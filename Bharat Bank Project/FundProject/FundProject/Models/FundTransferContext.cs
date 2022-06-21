using FundProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FundProject.Models
{
    public class FundTransferContext : DbContext
    {
        public FundTransferContext()
        {

        }
        public FundTransferContext(DbContextOptions options) : base(options)
        {

        }
        public virtual DbSet<Balance> Balances { get; set; }
        public virtual DbSet<FundTransfer> FundTransfers { get; set; }
        public virtual DbSet<Payee> Payees { get; set; }

    }
}
