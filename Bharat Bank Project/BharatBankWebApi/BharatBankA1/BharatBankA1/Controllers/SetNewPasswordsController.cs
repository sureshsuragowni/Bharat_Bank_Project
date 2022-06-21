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
    public class SetNewPasswordsController : ControllerBase
    {
        private readonly BharatBankContext _context;

        public SetNewPasswordsController(BharatBankContext context)
        {
            _context = context;
        }

        // GET: api/SetNewPasswords
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SetNewPassword>>> GetSetNewPasswords()
        {
            return await _context.SetNewPasswords.ToListAsync();
        }

        // GET: api/SetNewPasswords/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SetNewPassword>> GetSetNewPassword(int id)
        {
            var setNewPassword = await _context.SetNewPasswords.FindAsync(id);

            if (setNewPassword == null)
            {
                return NotFound();
            }

            return setNewPassword;
        }

        // PUT: api/SetNewPasswords/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSetNewPassword(int id, SetNewPassword setNewPassword)
        {
            if (id != setNewPassword.ReferenceNewId)
            {
                return BadRequest();
            }

            _context.Entry(setNewPassword).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SetNewPasswordExists(id))
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

        // POST: api/SetNewPasswords
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Insert")]
        public async Task<ActionResult<SetNewPassword>> PostSetNewPassword(SetNewPassword setNewPassword)
        {
            _context.SetNewPasswords.Add(setNewPassword);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSetNewPassword", new { id = setNewPassword.ReferenceNewId }, setNewPassword);
        }

        // DELETE: api/SetNewPasswords/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSetNewPassword(int id)
        {
            var setNewPassword = await _context.SetNewPasswords.FindAsync(id);
            if (setNewPassword == null)
            {
                return NotFound();
            }

            _context.SetNewPasswords.Remove(setNewPassword);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SetNewPasswordExists(int id)
        {
            return _context.SetNewPasswords.Any(e => e.ReferenceNewId == id);
        }
    }
}
