using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace FundProject.Models
{
    public class Balance
    {
        [Key]
        public int BalanceId { get; set; }
        public string Account { get; set; }
        public string AccountBalance { get; set; }
    }
}