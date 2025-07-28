import React from "react";

const Pagination = () => {
  return (
    <div className="pb-[140px]">
      <div className="flex items-center justify-between bg-white">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-[#F0F0F0] bg-white px-4 py-2 text-sm font-medium text-secondary hover:bg-primary"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-[#F0F0F0] bg-white px-4 py-2 text-sm font-medium text-secondary hover:bg-primary"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <nav
              aria-label="Pagination"
              className="isolate inline-flex gap-x-[15px] -space-x-px rounded-md shadow-xs"
            >
              <a
                href="#"
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-secondary ring-1 ring-[#F0F0F0] ring-inset hover:bg-primary hover:text-white "
              >
                <span className="sr-only">Previous</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-5"
                >
                  <path
                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
              {/* Current: "z-10 bg-indigo-600 text-white ", Default: "text-primary hover:text-white ring-1 ring-inset ring-[#F0F0F0]  focus:outline-offset-0"  */}
              <a
                href="#"
                aria-current="page"
                className="relative text-secondary  z-10 inline-flex items-center bg-transparent hover:text-[white] hover:bg-primary px-4 py-2 text-sm font-semibold  focus:z-20  ring-1 ring-[#F0F0F0] ring-inset"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-secondary hover:text-white hover:bg-primary ring-1 ring-[#F0F0F0] ring-inset  "
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-secondary hover:text-[white] hover:bg-primary ring-1 ring-[#F0F0F0] ring-inset   md:inline-flex"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-[#F0F0F0] ring-inset focus:outline-offset-0">
                ...
              </span>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-secondary hover:text-[white] hover:bg-primary ring-1 ring-[#F0F0F0] ring-inset   md:inline-flex"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-secondary hover:text-[white] hover:bg-primary ring-1 ring-[#F0F0F0] ring-inset  "
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-secondary hover:text-[white] hover:bg-primary ring-1 ring-[#F0F0F0] ring-inset  "
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-secondary ring-1 ring-[#F0F0F0] ring-inset  hover:text-[white] hover:bg-primary"
              >
                <span className="sr-only">Next</span>
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-5"
                >
                  <path
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
          <div>
            <p className="text-sm text-gray-700">
              Products from <span className="font-medium">1</span> to{" "}
              <span className="font-medium">12</span> of{" "}
              <span className="font-medium">80</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
