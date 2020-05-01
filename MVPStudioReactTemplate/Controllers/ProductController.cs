using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnBoardingTask.Models;


namespace OnBoardingTask.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private AdventureWorks2017Context db = new AdventureWorks2017Context();
      //  DataAccessLayer objproduct = new DataAccessLayer();

        // GET: api/<controller>
        [HttpGet]
        [Route("api/Product/Index")]
        public IEnumerable<Product> Index()
        {
            var Product = db.Product;
            return Product.ToList();

        }
        [HttpPost]
        [Route("api/Product/Create")]
        public int Create(Product Product)
        {

            return Product.AddProduct(Product);
        }
        //[HttpGet]
        // [Route("api/Product/Details/{id}")]
    }
}