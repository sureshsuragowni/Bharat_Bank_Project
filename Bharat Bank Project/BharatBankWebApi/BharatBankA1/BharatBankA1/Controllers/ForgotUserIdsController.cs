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
    public class ForgotUserIdsController : ControllerBase
    {
        private readonly BharatBankContext _context;

        public ForgotUserIdsController(BharatBankContext context)
        {
            _context = context;
        }

        // GET: api/ForgotUserIds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ForgotUserId>>> GetForgotUserIds()
        {
            return await _context.ForgotUserIds.ToListAsync();
        }

        // GET: api/ForgotUserIds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ForgotUserId>> GetForgotUserId(int id)
        {
            var forgotUserId = await _context.ForgotUserIds.FindAsync(id);

            if (forgotUserId == null)
            {
                return NotFound();
            }

            return forgotUserId;
        }

        // PUT: api/ForgotUserIds/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutForgotUserId(int id, ForgotUserId forgotUserId)
        {
            if (id != forgotUserId.ReferenceUserId)
            {
                return BadRequest();
            }

            _context.Entry(forgotUserId).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ForgotUserIdExists(id))
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

        // POST: api/ForgotUserIds
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Insert")]
        public async Task<ActionResult<ForgotUserId>> PostForgotUserId(ForgotUserId forgotUserId)
        {
            _context.ForgotUserIds.Add(forgotUserId);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetForgotUserId", new { id = forgotUserId.ReferenceUserId }, forgotUserId);
        }

        // DELETE: api/ForgotUserIds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteForgotUserId(int id)
        {
            var forgotUserId = await _context.ForgotUserIds.FindAsync(id);
            if (forgotUserId == null)
            {
                return NotFound();
            }

            _context.ForgotUserIds.Remove(forgotUserId);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ForgotUserIdExists(int id)
        {
            return _context.ForgotUserIds.Any(e => e.ReferenceUserId == id);
        }
    }
}
