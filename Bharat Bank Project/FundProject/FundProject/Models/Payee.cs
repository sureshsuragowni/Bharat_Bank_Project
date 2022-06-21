using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace FundProject.Models
{
    
        public class Payee
        {
            [Key]
            public int PayeeId { get; set; }
            public string BeneficiaryName { get; set; }
            public string BeneficiaryAccountNumber { get; set; }
            public string ReBeneficiaryAccountNumber { get; set; }
            public string NickName { get; set; }



        }
    
}
