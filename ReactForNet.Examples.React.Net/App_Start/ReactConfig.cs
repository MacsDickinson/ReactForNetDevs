using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(ReactForNet.Examples.React.Net.ReactConfig), "Configure")]

namespace ReactForNet.Examples.React.Net
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            ReactSiteConfiguration.Configuration
                .AddScript("~/Scripts/templates/HelloWorld.js");
        }
	}
}