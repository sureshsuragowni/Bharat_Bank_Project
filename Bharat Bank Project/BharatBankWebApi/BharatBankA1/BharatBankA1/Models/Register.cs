using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BharatBankA1.Models
{
    public class Register
    {
        [Key]
        public int ReferRegId { get; set; }
        [Required]
        //[Column(TypeName = "integer")]
        public int UserId { get; set; }
        [Required]
        //[DataType(DataType.Password)]
        //[Column(TypeName = "nvarchar(30)")]
        public string LoginPassword { get; set; }
        [Required]
        //[DataType(DataType.Password)]
        //[Column(TypeName = "nvarchar(30)")]
        public string ConfirmLoginPassword { get; set; }
        [Required]
        //[Column(TypeName = "nvarchar(30)")]
        public string EmailId { get; set; }
        [Required]
        //[Column(TypeName = "integer")]
        public long MobileNumber { get; set; }

    }
}