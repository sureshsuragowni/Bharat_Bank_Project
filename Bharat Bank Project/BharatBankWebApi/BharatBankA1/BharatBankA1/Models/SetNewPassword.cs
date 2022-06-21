using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BharatBankA1.Models
{
    public class SetNewPassword
    {
        [Key]
        public int ReferenceNewId { get; set; }
        [Required]
        //[Column(TypeName = "integer")]
        public int UserId { get; set; }
        [Required]
        [NotMapped]
        //[Column(TypeName = "nvarchar(30)")]
        public string OldPassword { get; set; }
        //[Required, StringLength(16, MinimumLength = 8, ErrorMessage = "Password must be 8 digits long")]
        //[DataType(DataType.Password)]
        //[Column(TypeName = "nvarchar(30)")]
        [Required]
        public string NewPassword { get; set; }
        //[Required, StringLength(16, MinimumLength = 8, ErrorMessage = "Password must be 8 digits long")]
        //[DataType(DataType.Password)]
        //[Column(TypeName = "nvarchar(30)")]
        [Required]
        public string ConfirmNewPassword { get; set; }
    }
}
