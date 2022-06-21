
using Microsoft.EntityFrameworkCore;

namespace BharatBankA1.Models
{
    public class BharatBankContext : DbContext
    {
        public BharatBankContext()
        {

        }
        public BharatBankContext(DbContextOptions<BharatBankContext> options) : base(options)
        {

        }
        public virtual DbSet<Login> Logins { get; set; }
        public virtual DbSet<Register> Registers { get; set; }
        public virtual DbSet<OpenSavingsAccount> OpenSavingsAccounts { get; set; }
        public virtual DbSet<ForgotUserId> ForgotUserIds { get; set; }
        public virtual DbSet<ForgotPassword> ForgotPasswords { get; set; }
        public virtual DbSet<SetNewPassword> SetNewPasswords { get; set; }
        
    }
}