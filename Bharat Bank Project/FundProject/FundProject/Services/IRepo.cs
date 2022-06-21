using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FundProject.Services
{
    public interface IRepo<K,T,P>
    {
        Task<K> AddImps(K item);

        Task<K> GetDetails(T id);

        Task<P> AddBeneficiary(P item);

    }
}
