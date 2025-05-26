using HMS.Server.Controllers;
using HMS.Server.DTO;

namespace HMS.Server.Interfaces
{
    public interface IDoctorService
    {
        // IDoctorService.cs
        Task<bool> RegisterDoctorAsync(DoctorRegisterDto dto, IFormFile profileImage);

    }

}
