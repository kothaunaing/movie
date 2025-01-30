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

const Pagination = ({ data, query }) => {
  const currentPage = data.page;
  const totalPages = data.total_pages;
  const paginations = getPaginationPages(currentPage, totalPages);

  const getPath = (p) => {
    return query
      ? `?query=${encodeURIComponent(query)}&page=${p}`
      : `?page=${p}`;
  };

  return (
    <ul className="flex gap-2 justify-center mt-4">
      {currentPage >= 4 && (
        <li>
          <Link
            className={clsx(
              "p-2 px-3 rounded-md flex items-center justify-center font-bold drop-shadow-lg shadow-white border border-white bg-black ",
              currentPage === 1 ? "bg-blue-800" : "hover:bg-opacity-70"
            )}
            href={
              query ? `?query=${encodeURIComponent(query)}&page=1` : "?page=1"
            }
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
                "p-2 px-3 rounded-md flex items-center justify-center font-bold drop-shadow-lg shadow-white border border-white bg-black ",
                p === currentPage ? "bg-blue-800" : "hover:bg-opacity-70"
              )}
              href={getPath(p)}
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
