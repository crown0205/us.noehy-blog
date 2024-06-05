import PostItem from "./components/PostItem";
import { posts } from "#site/contents";
import { cn, sortPost } from "@/lib/utils";

const BlogPage = async () => {
  const postsData = sortPost(posts.filter((post) => post.published));

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
            My ramblings on all things web dev.
          </p>
        </div>
      </div>

      <hr className="mt-8" />

      <ul>
        {postsData.length > 0 ? (
          <div>
            {postsData.map((post) => (
              <li key={post.slug}>
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
