import { posts } from "#site/contents";
import { cn, sortPost } from "@/lib/utils";
import PostItem from "./components/PostItem";

// [ ] : route를 이렇게 하는게 최선인지?
const BlogPage = async () => {
  const postsData = sortPost(posts.filter((post) => post.published));

  console.log({ postsData: postsData.map((post) => post.tags) });

  return (
    <div
      className={cn(
        "container max-w-4xl", //
        "py-6", //
        "lg:py-10"
      )}
    >
      <div className="flex items-center">
        <div
          className={cn(
            "flex flex-col flex-1 gap-3", //
            "md:gap-6"
          )}
        >
          <h1
            className={cn(
              "inline-block", //
              "font-black text-4xl", //
              "lg:text-5xl"
            )}
          >
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            {/* [ ] : 블로그 설명 글 수정 */}
            My ramblings on all things web dev.
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      <ul>
        {postsData.length > 0 ? (
          // NOTE : md(768px) 이상에서만 2개씩 보이기
          <div className={cn("md:flex md:flex-wrap md:flex-1 md:gap-4")}>
            {postsData.map((post) => (
              <li key={post.slug} className={cn("max-w-[100%] md:max-w-[48%]")}>
                <PostItem {...post} />
              </li>
            ))}
          </div>
        ) : (
          <p>Nothing to see here yet</p>
        )}
      </ul>
    </div>
  );
};

export default BlogPage;
