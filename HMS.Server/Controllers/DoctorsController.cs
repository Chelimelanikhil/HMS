using HMS.Server.DTO;
using HMS.Server.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HMS.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        private readonly IDoctorService _doctorService;
       

        public DoctorsController(IDoctorService doctorService, IWebHostEnvironment env)
        {
            _doctorService = doctorService;
     
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterDoctor([FromForm] DoctorRegisterDto dto, [FromForm] IFormFile profileImage)
        {
            var result = await _doctorService.RegisterDoctorAsync(dto, profileImage);
            return result ? Ok(new { message = "Doctor registered successfully." }) : BadRequest("Failed to register doctor.");
        }
    }

}
