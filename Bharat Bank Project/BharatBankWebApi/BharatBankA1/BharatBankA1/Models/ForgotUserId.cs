using System.ComponentModel.DataAnnotations;

namespace BharatBankA1.Models
{
    public class ForgotUserId
    {
        [Key]
        public int ReferenceUserId { get; set; }
        [Required]
        public long AccountNumber { get; set; }
        [Required]
        public string EmailId { get; set; }
        [Required]
        public int Otp { get; set; }
    }
}
