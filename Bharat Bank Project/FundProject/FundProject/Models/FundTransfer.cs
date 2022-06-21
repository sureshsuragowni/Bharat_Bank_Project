using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace FundProject.Models
{
    public class FundTransfer
    {
        [Key]
        public int Id { get; set; }
        public int ReferenceId { get; set; }
        [Required]
        public string FromAccount { get; set; }
        [Required]
        public string ToAccount { get; set; }
        [Required]
        public int Amount { get; set; }
        [Required]
        public DateTime TransactionTime { get; set; }
     
       // public string MaturityInstruction { get; set; }
        [Required]
        public string Remark { get; set; }
        [Required]
        public string Mode { get; set; }
        
    }
}