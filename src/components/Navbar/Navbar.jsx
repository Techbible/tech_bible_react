import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // <div
    //     class="styles_header__x7qVU flex direction-row flex-row-gap-5 flex-row-gap-mobile-undefined flex-row-gap-widescreen-8 py-5 px-mobile-5 px-desktop-5 px-widescreen-8 px-tablet-5 align-center bg-black"
    //     data-test="main-header"
    //   >
    //     <a aria-label="TechBible Logo" href="/">
    //       <div class="logo">
    //         <div class="square"></div>
    //         <div class="name">Tech Bible</div>
    //       </div>
    //     </a>
    //     <div
    //       class="styles_hideOnSearch__imbb4 flex direction-row justify-center flex-row-gap-5 flex-row-gap-mobile-undefined flex-row-gap-widescreen-8 flex-1"
    //     >
    //       <div class="styles_navLink__NXAo6">
    //         <a
    //           class="color-white fontSize-16 fontWeight-400 noOfLines-undefined"
    //           href="/"
    //           >All tools</a
    //         >
    //       </div>
    //       <div class="styles_navLink__NXAo6">
    //         <a
    //           class="color-white fontSize-16 fontWeight-400 noOfLines-undefined"
    //           href="/submitTool"
    //           >Submit you tool</a
    //         >
    //       </div>
    //       <div class="styles_navLink__NXAo6">
    //         <a
    //           class="color-white fontSize-16 fontWeight-400 noOfLines-undefined"
    //           href="/resources"
    //           >Resources</a
    //         >
    //       </div>
    //       <div class="styles_navLink__NXAo6">
    //         <a
    //           class="color-white fontSize-16 fontWeight-400 noOfLines-undefined"
    //           href="/discussions"
    //           >Community</a
    //         >
    //       </div>
    //     </div>
    //     <div
    //       class="styles_hideOnSearch__imbb4 flex direction-row flex-row-gap-5 flex-row-gap-mobile-undefined flex-row-gap-widescreen-8 align-center"
    //     >
    //       <button class="signin-btn">Sign in</button>
    //       <button class="signup-btn">Sign up</button>
    //     </div>
    //   </div>
    <header
      aria-label="Site Header"
      className="navbar-header dark:bg-[#1D1D1F]"
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a aria-label="TechBible Logo" href="/">
              <div class="logo">
                <div class="square"></div>
                <div class="name">Tech Bible</div>
              </div>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: 'pointer' }}
                >
                  All Tools
                </li>

                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: 'pointer' }}
                >
                  Submit your Tool{" "}
                </li>

                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: 'pointer' }}
                >
                  Resources
                </li>

                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: 'pointer'}}
                >
                  Community
                </li>
                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: 'pointer'}}
                >
                  <span class="text-white rounded-full p-1">
                      <i class="fab fa-tiktok text-white text-xl"></i>
                    </span>
                </li>
                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: 'pointer'}}
                >
                  <span class="text-white rounded-full p-1">
                      <i class="fab fa-youtube text-white text-xl"></i>
                    </span>
                </li>
                <li
                  className="tracking-wider hover:tracking-widest"
                  style={{ transition: "0.3s", cursor: 'pointer'}}
                >
                  <span class="text-white rounded-full p-1">
                      <i class="fab fa-instagram text-white text-xl"></i>
                    </span>
                </li>
                
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <button className="signin-btn">Sign in</button>
              <div className="hidden sm:flex">
                <button className="signup-btn">Sign up</button>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
