"use client";

import usePosts from "@/hooks/usePosts";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import PostItem from "../PostItem";
import { POSTS_PER_PAGE } from "@/components/common/PageNation";

export interface IPostListProps {
  currentPage: number;
}

const PostList = ({ currentPage }: IPostListProps) => {
  // NOTE : postsData는 usePosts 훅을 통해 가져온다.
  const pathName = usePathname();
  const { postsData } = usePosts({ pathName });

  const disPlayPosts = postsData.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div>
      {disPlayPosts.length > 0 ? (
        // NOTE : md(768px) 이상에서만 2개씩 보이기
        <ul className={cn("md:flex md:flex-wrap md:flex-1 md:gap-4")}>
          {disPlayPosts.map((post) => (
            <li key={post.slug} className={cn("max-w-[100%] md:max-w-[48%]")}>
              <PostItem {...post} />
            </li>
          ))}
        </ul>
      ) : (
        // [ ] : 아무것도 없을 때 보여줄 컴포넌트 추가
        <p>Nothing to see here yet</p>
      )}
    </div>
  );
};

export default PostList;
