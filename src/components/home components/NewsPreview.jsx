import React from "react";

function NewsPreview() {
  return (
    <aside className="sidebarWithSeparator right">
      <h1 className="fontSize-10">News</h1>

      <div className="max-w-md mx-auto bg-[#1D1D1F] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 md:pt-4">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-2">
              Breaking News
            </div>
            <a
              href="www.google.com"
              className="block text-xl font-bold leading-tight text-gray-900 hover:underline"
            >
              Title of the News Article
            </a>
            <p className="mt-2 text-gray-500 text-sm">
              By John Doe | April 20, 2023
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default NewsPreview;
