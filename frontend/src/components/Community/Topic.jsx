import React from 'react'

const Topic = () => {
  return (
    <div className="px-mobile-1 px-tablet-1 pt-mobile-0 pt-desktop-6 pt-tablet-6 pt-widescreen-6 pb-mobile-7 pb-desktop-6 pb-tablet-6 pb-widescreen-6">
      
        <a href="/posts/mage-4" aria-label="Mage" className="flex items-center">
          <div>
            <img
              loading="lazy"
              src="data:image/png;base64,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"
              style={{ width: "40px", height: "40px" }}
              className="styles_mediaThumbnail__LDCQN "
            />
          </div>
          <span className="color-white fontSize-mobile-12 fontSize-desktop-16 fontSize-tablet-16 fontSize-widescreen-16 fontWeight-400 noOfLines-2 ml-2">
            Growth
          </span>
        </a>
      
    </div>
  )
}

export default Topic