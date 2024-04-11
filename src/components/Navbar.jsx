import React from "react";

function Navbar(props) {
  return (
    <div class="relative w-full gradient1 overflow-hidden">
      <div class="mx-auto flex max-w-8xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div class="inline-flex items-center space-x-2">
          <span class="font-bold">Text Modifier</span>
        </div>
        <div class="hidden lg:block">
          <ul class="ml-12 inline-flex space-x-8">
            <li>
              <a
                href="#"
                class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Home
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="ml-2 h-4 w-4"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                About
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="ml-2 h-4 w-4"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
              >
                Contact
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="ml-2 h-4 w-4"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div class="flex grow justify-end">
          <input
            class="flex h-8 w-40 rounded-md bg-gray-100 focus:bg-white bg-opacity-70 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search"
          />

          <button class="ml-2 h-8 w-12 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1">
            Search
          </button>
        </div>

        <div class="ml-2 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6 cursor-pointer"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
