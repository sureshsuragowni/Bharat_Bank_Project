using System.ComponentModel.DataAnnotations;

namespace BharatBankA1.Models
{
    public class ForgotPassword
    {
        [Key]
        public int ReferencePasswordId { get; set; }

        //[Column(TypeName = "integer")]
        [Required]
        public int EnterUserId { get; set; } //primary key
        [Required]
        //[Column(TypeName = "nvarchar(30)")]
        public string EmailId { get; set; }
        [Required]
        //[Column(TypeName = "integer")]
        public int EnterOtp { get; set; }
    }
}
