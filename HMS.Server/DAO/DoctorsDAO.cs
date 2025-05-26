using HMS.Server.DTO;
using Azure.Storage.Blobs;
using System.Data.SqlClient;
using Dapper;
using HMS.Server.Helpers;

namespace HMS.Server.DAO
{
    public class DoctorsDAO
    {
        private readonly BlobService _blobService;

        public DoctorsDAO(BlobService blobService)
        {
            _blobService = blobService;
        }

        public async Task<bool> RegisterDoctorAsync(DoctorRegisterDto dto, IFormFile profileImage)
        {
            using var connection = new SqlConnection(ConnectionString.DefaultConnection);
            await connection.OpenAsync();
            using var transaction = connection.BeginTransaction();

            try
            {
                // 1. Upload image to Azure Blob
                string imageUrl =  " ";
                if (profileImage != null && profileImage.Length > 0)
                {
                    imageUrl = await _blobService.UploadFileAsync(profileImage);
                }

                // 2. Insert into Users
                string insertUser = @"
                    INSERT INTO Users (FullName, Email, PasswordHash, Role, CreatedAt)
                    OUTPUT INSERTED.UserID
                    VALUES (@FullName, @Email, @PasswordHash, 'Doctor', GETDATE());";

                int userId = await connection.ExecuteScalarAsync<int>(
                    insertUser,
                    new
                    {
                        dto.User.FullName,
                        dto.User.Email,
                        dto.User.Password
                    },
                    transaction
                );

                // 3. Insert into Doctors
                string insertDoctor = @"
                    INSERT INTO Doctors (UserID, Specialization, Phone, Experience, AvailableFrom, AvailableTo, ProfileImage)
                    VALUES (@UserID, @Specialization, @Phone, @Experience, @AvailableFrom, @AvailableTo, @ProfileImage);";

                await connection.ExecuteAsync(
                    insertDoctor,
                    new
                    {
                        UserID = userId,
                        dto.Specialization,
                        dto.Phone,
                        dto.Experience,
                        dto.AvailableFrom,
                        dto.AvailableTo,
                        ProfileImage = imageUrl
                    },
                    transaction
                );

                await transaction.CommitAsync();
                return true;
            }
            catch
            {
                await transaction.RollbackAsync();
                return false;
            }
        }
    }
}
