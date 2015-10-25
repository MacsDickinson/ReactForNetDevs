using ReactForNet.Examples.React.Net.Models;
using System.Web.Mvc;

namespace ReactForNet.Examples.React.Net.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            var model = new HelloWorldViewModel
            {
                Name = "Macs"
            };

            return View(model);
        }
    }
}