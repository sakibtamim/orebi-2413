import React from "react";

const Pagination = ({
  pageNumber,
  paginate,
  data,
  perPage,
  currentPage,
  cateFilter,
}) => {
  let startIndex = (currentPage - 1) * perPage + 1;
  let endIndex = Math.min(currentPage * perPage, data.length);

  return (
    <div>
      <div className="flex items-center justify-between bg-white">
        <div
          className={`w-full text-center sm:hidden ${
            cateFilter.length > 0 ? "hidden" : ""
          }`}
        >
          <div className="flex flex-1 justify-between">
            <a
              onClick={() => {
                if (currentPage > 1) {
                  paginate(currentPage - 2);
                }
              }}
              className="relative inline-flex items-center rounded-md border border-[#F0F0F0] bg-white px-4 py-2 text-sm font-medium text-secondary hover:bg-primary cursor-pointer"
            >
              Previous
            </a>
            <a
              onClick={() => {
                if (currentPage < pageNumber.length) {
                  paginate(currentPage);
                }
              }}
              className="relative ml-3 inline-flex items-center rounded-md border border-[#F0F0F0] bg-white px-4 py-2 text-sm font-medium text-secondary hover:bg-primary cursor-pointer"
            >
              Next
            </a>
          </div>
          <p className={`text-sm text-primary lg:pt-0 pt-[16px] `}>
            Products from <span className="font-medium">{startIndex}</span> to{" "}
            <span className="font-medium">{endIndex}</span> of{" "}
            <span className="font-medium">{data.length}</span>
          </p>
        </div>
        <div className="hidden  sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div className={`${cateFilter.length > 0 ? "hidden" : ""}`}>
            <nav
              aria-label="Pagination"
              className="isolate inline-flex gap-x-[15px] -space-x-px rounded-md shadow-xs"
            >
              <a
                onClick={() => {
                  if (currentPage > 1) {
                    paginate(currentPage - 2);
                  }
                }}
                className={`relative inline-flex items-center rounded-l-md    text-secondary px-2 py-2 ring-1 ring-[#F0F0F0] ring-inset ${
                  currentPage === 1
                    ? "opacity-[0.1] cursor-not-allowed "
                    : "opacity-100 hover:bg-primary hover:text-white "
                }`}
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
              {pageNumber.map((item, i) => (
                <a
                  key={i}
                  onClick={() => paginate(i)}
                  aria-current={currentPage === i + 1 ? "page" : undefined}
                  className={`relative text-secondary  z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold  focus:z-20  ring-1 ring-[#F0F0F0] ring-inset cursor-pointer 
                  ${
                    currentPage === i + 1
                      ? "bg-primary !text-[white]"
                      : "bg-transparent hover:text-[white] hover:bg-primary"
                  } `}
                >
                  {item + 1}
                </a>
              ))}

              <a
                onClick={() => {
                  if (currentPage < pageNumber.length) {
                    paginate(currentPage);
                  }
                }}
                className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-secondary ring-1 ring-[#F0F0F0] ring-inset   ${
                  currentPage === pageNumber.length
                    ? " opacity-[0.1] cursor-not-allowed"
                    : "hover:text-[white] hover:bg-primary"
                }`}
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
          <div className={`${cateFilter.length > 0 ? "hidden" : ""}`}>
            <p className="text-sm text-primary">
              Products from <span className="font-medium">{startIndex}</span> to{" "}
              <span className="font-medium">{endIndex}</span> of{" "}
              <span className="font-medium">{data.length}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
