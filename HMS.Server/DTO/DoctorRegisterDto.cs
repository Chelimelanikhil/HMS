namespace HMS.Server.DTO
{
    public class DoctorRegisterDto
    {
        public UserDto User { get; set; }

        public string Specialization { get; set; }
        public string Phone { get; set; }
        public int Experience { get; set; }
        public TimeSpan AvailableFrom { get; set; }
        public TimeSpan AvailableTo { get; set; }
    }

}
