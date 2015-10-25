using Microsoft.AspNet.Mvc;
using ReactForNet.Examples.AspNet5.Models;

namespace ReactForNet.Examples.AspNet5.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            var model = new HelloWorldViewModel
            {
                Name = "Macs"
            };
            
            return View(model);
        }
    }
}
