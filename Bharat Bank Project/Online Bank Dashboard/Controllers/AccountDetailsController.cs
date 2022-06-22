using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OnlineBankingDashboard.Models;

namespace OnlineBankingDashboard.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountDetailsController : ControllerBase
    {
        private readonly IConfiguration config;
        public readonly Applicationcontext context;
        public AccountDetailsController(IConfiguration _config, Applicationcontext _context)
        {
            config = _config;
            context = _context;

        }

       

        [HttpGet("GetAccountdetails/{Accno}")]
        public async Task<ActionResult<AccountDetails>> GetAccountDetails(int Accno)
        {
            var tableData = await (from x in context.accountDetails
                                   where x.accno == Accno
                                   select new
                                   {
                                       accno = x.accno,
                                       name = x.name,
                                       mobile = x.mobile,
                                       aadhar = x.aadhar,
                                       dob = x.dob,
                                       address = x.address


                                   }).ToListAsync();

            return Ok(tableData);
            //return Ok("success");
        }


        [HttpPost("InsertTableRow")]
        public async Task<ActionResult<AccountDetails>> AccountDetailsInsert(AccountDetails cwdp)
        {
            await context.accountDetails.AddAsync(cwdp);
            await context.SaveChangesAsync();
            return Ok("success");
        }

        [HttpGet("GetAccountSummary/{Accno}")]
        public async Task<ActionResult<AccountDetails>> GetAccountSummary(int Accno)
        {
            var tableData = await (from x in context.accountDetails
                                   where x.accno == Accno
                                   select new
                                   {
                                       name= x.name,
                                       accno = x.accno,
                                       balance = x.balance,
                                       



                                   }).ToListAsync();

            return Ok(tableData);
            //return Ok("success");
        }
    }
}