import clsx from "clsx";
import Link from "next/link";
import React from "react";

function getPaginationPages(currentPage, totalPages) {
  const maxPagesToShow = 5; // Number of page links to display
  const pages = [];

  // Handle edge case where totalPages is less than maxPagesToShow
  let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  // Adjust startPage if we're near the last page
  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(endPage - maxPagesToShow + 1, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return pages;
}

const Pagination = ({ data, seeMorePath }) => {
  const currentPage = data.page;
  const totalPages = data.total_pages;
  const paginations = getPaginationPages(currentPage, totalPages);

  return (
    <ul className="flex gap-2 justify-center mt-4">
      {currentPage >= 4 && (
        <li>
          <Link
            className={clsx(
              "p-2 px-3 rounded-md flex items-center justify-center",
              currentPage === 1
                ? "bg-gray-800"
                : "bg-gray-500 hover:bg-opacity-80"
            )}
            href={`${seeMorePath}?page=1`}
          >
            1
          </Link>
        </li>
      )}
      {paginations.map((p) => {
        return (
          <li key={`page-${p}`}>
            <Link
              className={clsx(
                "p-2 px-3 rounded-md flex items-center justify-center font-bold",
                p === currentPage
                  ? "bg-gray-800"
                  : "bg-gray-500 hover:bg-opacity-80"
              )}
              href={`${seeMorePath}?page=${p}`}
            >
              {p}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
