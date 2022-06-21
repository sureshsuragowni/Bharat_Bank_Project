using Microsoft.Extensions.Logging;
using FundProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FundProject.Services;


namespace FundProject.Services
{
    public class FundTransferRepo : IRepo<FundTransfer,int,Payee>
    {

        private readonly FundTransferContext _context;

        public FundTransferRepo(FundTransferContext context)
        {
            _context = context;
        }

        public async Task<FundTransfer> AddImps(FundTransfer item)
        {
            FundTransfer fundTransfer = new FundTransfer();
            fundTransfer.Id = item.Id;
            Random random = new Random();
            fundTransfer.ReferenceId = random.Next(1000000, 100000000);
            fundTransfer.FromAccount = item.FromAccount;
            fundTransfer.ToAccount = item.ToAccount;
            fundTransfer.Amount = item.Amount;
            fundTransfer.TransactionTime = item.TransactionTime;
            fundTransfer.Remark = item.Remark;
            fundTransfer.Mode = item.Mode;
            _context.FundTransfers.Add(fundTransfer);
            _context.SaveChanges();
            return fundTransfer;

        }

 


        public async Task<FundTransfer> GetDetails(int id)
        {
            var details = _context.FundTransfers.SingleOrDefault(e=>e.Id == id);
            return details;
                
        }

        public async Task<Payee> AddBeneficiary(Payee item)
        {
            _context.Payees.Add(item);
            _context.SaveChanges();
            return item;

        }
    }
}
