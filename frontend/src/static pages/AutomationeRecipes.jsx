import React from "react";
import NewsLetter from "../components/home components/NewsLetter";

function AutomationRecipes() {
  return (
    <div className="bg-black text-white min-h-screen w-full py-8 sm:px-6">
      <div className="mx-auto">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-4">
            <h1 className="text-3xl font-bold text-center text-orange-700 mb-6">
              Automation recipes: Part II
            </h1>

            <h2 className="text-2xl font-semibold text-center text-orange-700 mb-6">
              Automate Your Instagram Content: Turn News Articles into Captivating Posts with AI
            </h2>

            <div>
              <h3 className="text-lg font-bold text-orange-700 mb-4">Step 1: Using Feedly to Collect News Articles</h3>
              <p className="text-lg text-left mb-8">
                Automation has no limits. In this guide, we will show you how to turn news articles into Instagram posts just by following simple Zapier automations.
              </p>

              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-inside">
                    <li className="mb-2">- Set up a Feedly account ($6/month) and connect your preferred news sources.</li>
                    <li className="mb-2">- Save the news articles you want to turn into Instagram posts.</li>
                    <li>- Create a dedicated board or collection within Feedly to organize the selected articles.</li>
                  </ul>
                </div>
                <div>
                  <img
                    src={`${process.env.PUBLIC_URL}/blog/content_automation/1.png`}
                    alt="Step 1"
                    className="max-w-full h-auto"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-orange-700 mb-4">Step 2: Trigger the Zap to Process the News Article</h3>
                <ul className="list-inside">
                  <li className="mb-2">- Create a Zapier account if you don't have one.</li>
                  <li className="mb-2">- Set up a new Zap and select Feedly as the trigger app.</li>
                  <li className="mb-2">- Choose the "New Article Saved to Board" trigger event in Feedly.</li>
                  <li>Connect your Feedly account and select the board you created in Step 1.</li>
                </ul>
              </div>

              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/blog/content_automation/2.png`}
                  alt="Step 2"
                  className="max-w-full h-auto"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <NewsLetter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutomationRecipes;
