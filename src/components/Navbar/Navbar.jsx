import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div
        class="styles_header__x7qVU flex direction-row flex-row-gap-5 flex-row-gap-mobile-undefined flex-row-gap-widescreen-8 py-5 px-mobile-5 px-desktop-5 px-widescreen-8 px-tablet-5 align-center bg-black"
        data-test="main-header"
      >
        <a aria-label="TechBible Logo" href="/">
          <div class="logo">
            <div class="square"></div>
            <div class="name">Tech Bible</div>
          </div>
        </a>
        <div
          class="styles_hideOnSearch__imbb4 flex direction-row justify-center flex-row-gap-5 flex-row-gap-mobile-undefined flex-row-gap-widescreen-8 flex-1"
        >
          <div class="styles_navLink__NXAo6">
            <a
              class="color-white fontSize-16 fontWeight-400 noOfLines-undefined"
              href="/"
              >All tools</a
            >
          </div>
          <div class="styles_navLink__NXAo6">
            <a
              class="color-white fontSize-16 fontWeight-400 noOfLines-undefined"
              href="/submitTool"
              >Submit you tool</a
            >
          </div>
          <div class="styles_navLink__NXAo6">
            <a
              class="color-white fontSize-16 fontWeight-400 noOfLines-undefined"
              href="/resources"
              >Resources</a
            >
          </div>
          <div class="styles_navLink__NXAo6">
            <a
              class="color-white fontSize-16 fontWeight-400 noOfLines-undefined"
              href="/discussions"
              >Community</a
            >
          </div>
        </div>
        <div
          class="styles_hideOnSearch__imbb4 flex direction-row flex-row-gap-5 flex-row-gap-mobile-undefined flex-row-gap-widescreen-8 align-center"
        >
          <button class="signin-btn">Sign in</button>
          <button class="signup-btn">Sign up</button>
        </div>
      </div>
  )
}

export default Navbar
