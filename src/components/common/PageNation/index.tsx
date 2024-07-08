"use client";

import { IPostListProps } from "@/app/(blog)/components/PostList";
import usePosts from "@/hooks/usePosts";
import { cn } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

export const POSTS_PER_PAGE = 8;

interface IPageNationProps extends IPostListProps {}

// [ ] : PageNation 컴포넌트 수정 query 받아서 변경하도록 수정
const PageNation = ({ currentPage }: IPageNationProps) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const { postsData } = usePosts({ pathName });
  const totalPages = Math.ceil(postsData.length / POSTS_PER_PAGE);

  const createPageUrl = (page: number) => {
    if (currentPage === page) return;

    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${pathName}?${params.toString()}`;
  };

  return (
    <div className="w-full flex justify-center mt-8">
      {Array(totalPages)
        .fill("")
        .map((_, idx) => (
          <button
            key={idx}
            className={cn(
              "px-2 py-1 mx-1 border border-gray-300 rounded-md",
              idx + 1 !== currentPage &&
                "hover:bg-gray-100 hover:border-gray-400 hover:text-gray-800",
              idx + 1 !== currentPage &&
                "active:bg-gray-200 active:border-gray-500 active:text-gray-900",
              idx + 1 === currentPage ? "bg-gray-200" : ""
            )}
            disabled={idx + 1 === currentPage}
          >
            <a href={createPageUrl(idx + 1)}>{idx + 1}</a>
          </button>
        ))}
    </div>
  );
};

export default PageNation;
