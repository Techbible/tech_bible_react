import React from "react";
import { Link } from "react-router-dom";

const ToolInfo = ({ toolData }) => {
  return (
    <div>
      <p className="font-bold">{toolData?.Category}</p>
      <div className="px-mobile-1 px-tablet-1 pt-mobile-0 pt-desktop-6 pt-tablet-6 pt-widescreen-6 pb-mobile-7 pb-desktop-6 pb-tablet-6 pb-widescreen-6">
        <div
          className="flex direction-row flex-row-gap-4 flex-row-gap-mobile-2 flex-row-gap-widescreen-undefined flex-1"
          data-test="post-item-390145"
        >
          <a href={toolData?.URL} target="_blank" rel="noreferrer">
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
            <a href={toolData?.URL} target="_blank" rel="noreferrer">
              <div className="color-white fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-600 mb-3 noOfLines-2 styles_format__w0VVk">
                {toolData?.Name}
                <i className="ml-3 text-sm text-white hover:text-gray-600 transition-colors duration-300 fas fa-share"></i>
              </div>
            </a>
            <div className="fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-400">
              <span className="styles_tagline__j29pO text-gray-300">
                {toolData?.Description}
              </span>
            </div>
            <div className="flex direction-row flex-row-gap-6 mt-3 align-center">
              <div className="flex direction-row flex-row-gap-3">
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined border-1 border-white rounded-md px-3 bg-gradient">
                  {toolData?.Price}
                </div>
                <Link
                  className="styles_postTopicLink__wDe_p"
                  href="/topics/art"
                >
                  <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                    {toolData?.Category}
                  </div>
                </Link>
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  <span className="bi bi-chat-left-dots"></span>
                </div>
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  20
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolInfo;
