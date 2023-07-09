import React from 'react'

function BlogPostLayout({title,subtitle}) {
  return (
    <div className="bg-black text-white min-h-screen w-full py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-orange-700 mb-6">
        {title}
      </h1>

      <h2 className="text-2xl font-semibold text-center text-orange-700 mb-6">
        {subtitle}
      </h2>

      <div className="text-lg text-left mb-8">
        Automation has no limits. In this guide, we will show you how to turn news articles into Instagram posts just by following simple Zapier automations.
      </div>

      <div className="mb-8">
        <p className="text-lg mb-2 font-bold text-orange-700">Step 1: Using Feedly to Collect News Articles</p>
        <ul className="list-disc list-inside">
          <li>Set up a Feedly account ($6/month) and connect your preferred news sources.</li>
          <li>Save the news articles you want to turn into Instagram posts.</li>
          <li>Create a dedicated board or collection within Feedly to organize the selected articles.</li>
        </ul>
      </div>

      <div>
        <img src={`${process.env.PUBLIC_URL}/blog/content_automation/1.png`} alt="1" />
      </div>

      <br />

      <h1 className="text-lg font-bold text-orange-700">Step 2: Trigger the Zap to Process the News Article</h1>

      <ul className="list-disc list-inside">
        <li>Create a Zapier account if you don't have one.</li>
        <li>Set up a new Zap and select Feedly as the trigger app.</li>
        <li>Choose the "New Article Saved to Board" trigger event in Feedly.</li>
        <li>Connect your Feedly account and select the board you created in Step 1.</li>
      </ul>

      <br />

      <div>
        <img src={`${process.env.PUBLIC_URL}/blog/content_automation/2.png`} alt="1" />
      </div>
    </div>
  </div>
  )
}

export default BlogPostLayout
