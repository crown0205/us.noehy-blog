"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const PageNation = () => {
  const pages = [1, 2, 3];
  const [activePave, setPage] = useState(1);
  // [ ] : 페이지네이션 로직 추가

  return (
    <div className="w-full flex justify-center mt-8">
      {pages.map((page) => (
        <button
          key={page}
          className={cn(
            "px-2 py-1 mx-1 border border-gray-300 rounded-md",
            "hover:bg-gray-100 hover:border-gray-400 hover:text-gray-800",
            "active:bg-gray-200 active:border-gray-500 active:text-gray-900",
            page === activePave ? "bg-gray-200" : ""
          )}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default PageNation;
