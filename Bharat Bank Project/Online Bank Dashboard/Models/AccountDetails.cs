using System.ComponentModel.DataAnnotations;

namespace OnlineBankingDashboard.Models
{
    public class AccountDetails
    {

        [Key]
        public int id { get; set; }

        public int accno { get; set; }
        public string name { get; set; }

        public string mobile { get; set; }

        public string email { get; set; }

        public string aadhar { get; set; }

        public string dob { get; set; }
        
        public string address { get; set; }

        public int balance { get; set; }

        
    }
}
