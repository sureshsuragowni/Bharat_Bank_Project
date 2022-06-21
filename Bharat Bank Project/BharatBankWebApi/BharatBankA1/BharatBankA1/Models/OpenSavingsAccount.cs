using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;

namespace BharatBankA1.Models
{
    public class OpenSavingsAccount
    {
        [Key]
        public int ReferenceId { get; set; }
        [Required]
        //[Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }
        [Required]
        //[Column(TypeName = "nvarchar(100)")]
        public string FirstName { get; set; }
        //[Column(TypeName = "nvarchar(100)")]
        public string MiddleName { get; set; }
        [Required]
        //[Column(TypeName = "nvarchar(100)")]
        public string LastName { get; set; }
        //[Column(TypeName = "nvarchar(100)")]
        public string FatherName { get; set; }
        //[Column(TypeName = "nvarchar(100)")]
        public string HusbandName { get; set;}

        //[Column(TypeName = "nvarchar(100)")]
        [Required]
        public string EmailId { get; set; }

        //[Column(TypeName = "integer")]
        [Required]
        public long MobileNumber { get; set; }

        //[Column(TypeName = "integer")]
        [Required]
        public long AadharCardNumber { get; set; }
        [Required]
        //[Column(TypeName = "Date")]
        public string DateOfBirth { get; set; }

        //[Column(TypeName = "nvarchar(100)")]
        [Required]
        public string AddressLine1 { get; set; }

        //[Column(TypeName = "nvarchar(100)")]
        [Required]
        public string AddressLine2 { get; set; }
        //[Column(TypeName = "nvarchar(100)")]
        public string LandMark { get; set; }

        //[Column(TypeName = "nvarchar(100)")]
        [Required]
        public string State { get; set; }

        //[Column(TypeName = "nvarchar(100")]
        [Required]
        public string City { get; set; }

        //[Column(TypeName = "integer")]
        [Required]
        public int PinCode { get; set; }

        //[Column(TypeName = "nvarchar(100)")]
        [Required]
        public string SourceOfIncome { get; set; }

        //[Column(TypeName = "decimal(18,3)")]
        [Required]
        public double GrossAnnualSalary { get; set; }
    }
}