using Microsoft.EntityFrameworkCore;

namespace OnlineBankingDashboard.Models
{
    public class Applicationcontext : DbContext
    {
        public Applicationcontext(DbContextOptions options) : base(options)
        {

        }
        
        public DbSet<Account> accounts { get; set; }

       
        public DbSet<AccountDetails> accountDetails { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Account>().ToTable("accounts");
            //modelBuilder.Entity<User>().ToTable("users");
            //modelBuilder.Entity<User>().HasNoKey();
        }

    }
}
