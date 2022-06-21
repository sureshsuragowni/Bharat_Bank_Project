using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BharatBankA1.Models;

namespace BharatBankA1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OpenSavingsAccountsController : ControllerBase
    {
        private readonly BharatBankContext _context;

        public OpenSavingsAccountsController(BharatBankContext context)
        {
            _context = context;
        }

        // GET: api/OpenSavingsAccounts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<OpenSavingsAccount>>> GetOpenSavingsAccounts()
        {
            return await _context.OpenSavingsAccounts.ToListAsync();
        }

        // GET: api/OpenSavingsAccounts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<OpenSavingsAccount>> GetOpenSavingsAccount(int id)
        {
            var openSavingsAccount = await _context.OpenSavingsAccounts.FindAsync(id);

            if (openSavingsAccount == null)
            {
                return NotFound();
            }

            return openSavingsAccount;
        }

        // PUT: api/OpenSavingsAccounts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOpenSavingsAccount(int id, OpenSavingsAccount openSavingsAccount)
        {
            if (id != openSavingsAccount.ReferenceId)
            {
                return BadRequest();
            }

            _context.Entry(openSavingsAccount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OpenSavingsAccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/OpenSavingsAccounts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Insert")]
        public async Task<ActionResult<OpenSavingsAccount>> PostOpenSavingsAccount(OpenSavingsAccount openSavingsAccount)
        {
            _context.OpenSavingsAccounts.Add(openSavingsAccount);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOpenSavingsAccount", new { id = openSavingsAccount.ReferenceId }, openSavingsAccount);
        }

        // DELETE: api/OpenSavingsAccounts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOpenSavingsAccount(int id)
        {
            var openSavingsAccount = await _context.OpenSavingsAccounts.FindAsync(id);
            if (openSavingsAccount == null)
            {
                return NotFound();
            }

            _context.OpenSavingsAccounts.Remove(openSavingsAccount);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OpenSavingsAccountExists(int id)
        {
            return _context.OpenSavingsAccounts.Any(e => e.ReferenceId == id);
        }
    }
}
