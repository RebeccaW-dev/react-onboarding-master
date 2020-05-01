using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnBoardingTask.Models;

namespace CustomerController.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {
        private string cs = AdventureWorks2017Context.ConnectionString;

        //Return list of all Employees
        public List<Customers> ListAll(object CustomerList)
        {
            List<Customers> lst = new List<Customers>();
            using (SqlConnection con = new SqlConnection(cs))
            {
                con.Open();
                SqlCommand com = new SqlCommand("CustomerList", con);
                com.CommandType = CommandType.StoredProcedure;
                SqlDataReader rdr = com.ExecuteReader();
                while (rdr.Read())
                {

                }
                return lst;
            }
        }

        [HttpGet("[action]")]
        public IEnumerable<Customers> Customer()
        {


            var customerList = new Customers();
           // System.Diagnostics.Debug.WriteLine(rng.ToString());
            return Enumerable.Range(1, 5).Select(index => new Customers
            {
                Id = customerList.Id,
                Name = customerList.Name,
                Address = customerList.Address,


            }) ;

        }

        public class Customers
        {
            public string Id { get; set; }
            public int Name { get; set; }
            public string Address { get; set; }

      
            }
        }
    }


