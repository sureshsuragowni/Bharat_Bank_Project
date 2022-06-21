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
    public class ForgotPasswordsController : ControllerBase
    {
        private readonly BharatBankContext _context;

        public ForgotPasswordsController(BharatBankContext context)
        {
            _context = context;
        }

        // GET: api/ForgotPasswords
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ForgotPassword>>> GetForgotPasswords()
        {
            return await _context.ForgotPasswords.ToListAsync();
        }

        // GET: api/ForgotPasswords/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ForgotPassword>> GetForgotPassword(int id)
        {
            var forgotPassword = await _context.ForgotPasswords.FindAsync(id);

            if (forgotPassword == null)
            {
                return NotFound();
            }

            return forgotPassword;
        }

        // PUT: api/ForgotPasswords/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutForgotPassword(int id, ForgotPassword forgotPassword)
        {
            if (id != forgotPassword.EnterUserId)
            {
                return BadRequest();
            }

            _context.Entry(forgotPassword).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ForgotPasswordExists(id))
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

        // POST: api/ForgotPasswords
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Insert")]
        public async Task<ActionResult<ForgotPassword>> PostForgotPassword(ForgotPassword forgotPassword)
        {
            _context.ForgotPasswords.Add(forgotPassword);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetForgotPassword", new { id = forgotPassword.EnterUserId }, forgotPassword);
        }

        // DELETE: api/ForgotPasswords/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteForgotPassword(int id)
        {
            var forgotPassword = await _context.ForgotPasswords.FindAsync(id);
            if (forgotPassword == null)
            {
                return NotFound();
            }

            _context.ForgotPasswords.Remove(forgotPassword);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ForgotPasswordExists(int id)
        {
            return _context.ForgotPasswords.Any(e => e.EnterUserId == id);
        }
    }
}
