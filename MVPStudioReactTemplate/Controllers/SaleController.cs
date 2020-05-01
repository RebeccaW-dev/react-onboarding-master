using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SaleController.Controllers
{
    public class SaleController : Controller
    {
       
        public class Sale
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public int Address { get; set; }

        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Edit()
        {
            return View();
        }
        public IActionResult Delete()
        {
            return View();
        }
    }
}