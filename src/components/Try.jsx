
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils'; // Shadcn utility


export default function Try({ totalPages = 5 }) {

  // 1. Hook into the URL search params
  const [searchParams, setSearchParams] = useSearchParams();

  // 2. Get the current page from URL, default to 1 if not present
  const currentPage = Number(searchParams.get('page')) || 1;

  // Generate page numbers array [1, 2, 3, 4, 5]
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // 3. Function to update the URL
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      // Update the 'page' param in the URL
      setSearchParams({ page: page.toString() });

      // Optional: Scroll to top of news list on change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center justify-between w-full py-4 px-2 select-none">

      {/* --- PREVIOUS BUTTON --- */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={cn(
          "flex items-center gap-2 text-lg transition-colors duration-200 font-medium",
          currentPage === 1
            ? "text-gray-300 cursor-not-allowed" // Faded state
            : "text-gray-500 hover:text-blue-600 cursor-pointer"
        )}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Previous Page</span>
      </button>

      {/* --- PAGE NUMBERS --- */}
      <div className="hidden md:flex items-center gap-1">
        {pageNumbers.map((number, index) => (
          <React.Fragment key={number}>
            {/* The Number */}
            <button
              onClick={() => handlePageChange(number)}
              className={cn(
                "text-lg font-medium transition-colors duration-200 px-1",
                currentPage === number
                  ? "text-blue-600 font-bold" // Active state (Blue)
                  : "text-gray-600 hover:text-blue-400" // Inactive state (Dark Grey)
              )}
            >
              {number}
            </button>

            {/* The Separator (Hyphen) - Only show if not the last item */}
            {index < pageNumbers.length - 1 && (
              <span className="text-gray-400 mx-1">-</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile View: Just "Page 1 of 5" */}
      <div className="md:hidden text-gray-600 font-medium">
        Page {currentPage} of {totalPages}
      </div>

      {/* --- NEXT BUTTON --- */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={cn(
          "flex items-center gap-2 text-lg transition-colors duration-200 font-medium",
          currentPage === totalPages
            ? "text-gray-300 cursor-not-allowed"
            : "text-blue-600 hover:text-blue-800 cursor-pointer" // Active blue
        )}
      >
        <span>Next Page</span>
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}
