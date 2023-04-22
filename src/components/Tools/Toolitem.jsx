import React from "react";

const Toolitem = () => {
  return (
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png"
              style={{ width: "80px", height: "80px" }}
              alt="Adobe XD"
              className="styles_mediaThumbnail__LDCQN"
            />
          </div>
        </a>
        <div className="flex direction-column flex-1">
          <div className="color-white fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-600 noOfLines-2 styles_format__w0VVk">
            <a>Adobe XD</a>
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
          <div className="color-white fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-400 noOfLines-2">
            <a className="styles_tagline__j29pO">
              Browse 1000+ of the latest tech tools per task Updated daily
            </a>
          </div>
          <div className="flex direction-row flex-row-gap-6 mt-3 align-center">
            <div className="flex direction-row flex-row-gap-3">
              <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                Free
              </div>
              <a className="styles_postTopicLink__wDe_p" href="/topics/art">
                <div className="color-white fontSize-12 fontWeight-400 noOfLines-undefined">
                  Design tool
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex direction-column mr-mobile-0 mr-desktop-2 mr-tablet-2 mr-widescreen-2 mt-2 mb-2 ml-mobile-2 ml-desktop-0 ml-tablet-0">
          <button
            type="button"
            data-test="vote-button"
            className="styles_reset__opz7w styles_feed__JnsOv"
          >
            <div className="flex direction-column align-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18.333L2.5 11.24c-2.19-2.138-2.19-5.617 0-7.755C4.686 1.03 7.836 1.03 10 3.485 12.164 1.03 15.314 1.03 17.5 3.485c2.19 2.138 2.19 5.617 0 7.755L10 18.333z"
                  clip-rule="evenodd"
                />
              </svg>
              <div className="color-lighter-grey fontSize-12 fontWeight-600 noOfLines-undefined">
                368
              </div>
            </div>
          </button>
        </div>
      </div>
      <div style={{backgroundColor: 'grey', height: '1px', width: '90%', margin: '2rem 0px'}}></div>
    </div>
  );
};

export default Toolitem;
