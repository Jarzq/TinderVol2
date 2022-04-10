using System.ComponentModel.DataAnnotations;

namespace DatingApp.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        [MinLength(4)]
        [StringLength(8)]
        public string Password { get; set; }
    }
}
