using HMS.Server.DAO;
using HMS.Server.DTO;
using HMS.Server.Interfaces;

namespace HMS.Server.Manager
{
    // DoctorService.cs
    public class DoctorsMgr : IDoctorService
    {
        private readonly DoctorsDAO _doctorsDao;

        public DoctorsMgr(DoctorsDAO doctorsDao)
        {
            _doctorsDao = doctorsDao;
        }

        public async Task<bool> RegisterDoctorAsync(DoctorRegisterDto dto, IFormFile profileImage)
        {
            return await _doctorsDao.RegisterDoctorAsync(dto, profileImage);
        }
    }

}
