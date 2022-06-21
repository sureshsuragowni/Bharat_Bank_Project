using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BharatBankA1.Models
{
    public class Login
    {
        [Key]
        public int ReferLogId { get; set; }
        [Required]
        //[Column(TypeName = "integer")]
        public int UserID { get; set; }
        [Required]
        //[DataType(DataType.Password)]
        //[Column(TypeName = "nvarchar(30)")]
        public string Password { get; set; }
        [NotMapped]
        [Required, Range(0, 3)]
        public int PasswordAttempts { get; set; }
        [NotMapped]
        [Required]
        public int BlockedAccount { get; set; }
    }
}