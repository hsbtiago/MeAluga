using System;

namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static DateTime PrimeiroDiaDoMes(this DateTime data)
        {
            return new DateTime(data.Year, data.Month,1);
        }
    }
}