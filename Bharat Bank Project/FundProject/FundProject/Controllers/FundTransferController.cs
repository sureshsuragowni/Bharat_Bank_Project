using FundProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FundProject.Services;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;


namespace FundTransferAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class FundTransferController : ControllerBase
    {
        private readonly IRepo<FundTransfer,int,Payee> _repo;
        public FundTransferController(IRepo<FundTransfer,int,Payee> repo)
        {
            _repo = repo;
        }


        [Route("Imps")]
        [HttpPost]
        public async  Task<ActionResult<FundTransfer>> PostImps(FundTransfer fundTransfer)
        {
            var _fundTransfer = await _repo.AddImps(fundTransfer);
            return Created("Added", _fundTransfer);

        }
   

        [Route("Details")]
        [HttpGet]
        public async virtual Task<ActionResult<FundTransfer>> GetDetails(int id)
        {
            return Ok(await _repo.GetDetails(id));

        }
        
        [Route("Beneficiary")]
        [HttpPost]
        public async virtual Task<ActionResult<Payee>> AddPayee(Payee item)
        {
         var payee=await _repo.AddBeneficiary(item);
            return Created("Added", payee);
        }


    }
}

