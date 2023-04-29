import React from "react";

const ToolInfo = ({ toolData }) => {
  return (
    <div>
      <p className="font-bold">Design tools</p>
      <div className="px-mobile-1 px-tablet-1 pt-mobile-0 pt-desktop-6 pt-tablet-6 pt-widescreen-6 pb-mobile-7 pb-desktop-6 pb-tablet-6 pb-widescreen-6">
        <div
          className="styles_item__Sn_12 flex direction-row flex-row-gap-4 flex-row-gap-mobile-2 flex-row-gap-widescreen-undefined flex-1"
          data-test="post-item-390145"
        >
          <a href="/posts/mage-4" aria-label="Mage">
            <div
              className="styles_thumbnail__Rmwk5 styles_thumbnail__E2_pB"
              data-test="post-thumbnail"
            >
              <img
                loading="lazy"
                src={toolData?.Icon}
                style={{ width: "140px", height: "140px" }}
                alt="Adobe XD"
                className="w-full md:w-140 rounded-sm"
              />
            </div>
          </a>
          <div className="flex direction-column flex-1 mt-2">
            <div className="color-white fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-600 mb-3 noOfLines-2 styles_format__w0VVk">
              {toolData?.Name}
              <i class="ml-3 text-white hover:text-gray-600 transition-colors duration-300 fas fa-share"></i>
              <a
                href="/r/p/390145"
                rel="noopener"
                target="_blank"
                className="styles_externalLinkIcon__822Ku"
              >
                <svg width="13" height="14" viewBox="0 0 13 14">
                  <g
                    stroke="#4B587C"
                    stroke-width="1.5"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <path d="M9.6 4H4.2a2.4 2.4 0 0 0-2.4 2.4V10"></path>
                    <path d="M6.6 7l3-3-3-3M12 10v3H0"></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className="fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-400 noOfLines-2">
              <span className="styles_tagline__j29pO text-gray-300">
                {toolData?.Description}
              </span>
            </div>
            <div className="flex direction-row flex-row-gap-6 mt-3 align-center">
              <div className="flex direction-row flex-row-gap-3">
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined border-1 border-white rounded-md px-3 bg-gradient">
                  {toolData?.Price}
                </div>
                <a className="styles_postTopicLink__wDe_p" href="/topics/art">
                  <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                    {toolData?.category}
                  </div>
                </a>
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  <span class="bi bi-chat-left-dots"></span>
                </div>
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  20
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex direction-column mr-mobile-0 mr-desktop-2 mr-tablet-2 mr-widescreen-2 mt-2 mb-2 ml-mobile-2 ml-desktop-0 ml-tablet-0">
              </div> */}
        </div>
      </div>
    </div>
  );
};

export default ToolInfo;
