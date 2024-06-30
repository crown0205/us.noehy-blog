import { posts } from "#site/contents";
import { cn, sortPost } from "@/lib/utils";
import PostItem from "./components/PostItem";
import { Badge } from "@/components/ui/badge";

interface ITag {
  tag: string;
  count: number;
}

// [ ] : route를 이렇게 하는게 최선인지?
const BlogPage = async () => {
  const postsData = sortPost(posts.filter((post) => post.published));

  const tags = postsData
    .map((post) => post.tags)
    .flat()
    .reduce<ITag[]>(
      (acc: ITag[], tag) => {
        const existingTag = acc.find((t) => t.tag === tag);

        acc.find((t) => t.tag === "all")!.count += 1;

        if (existingTag) {
          existingTag.count += 1;
        } else {
          acc.push({ tag, count: 1 });
        }

        return acc;
      },
      [{ tag: "all", count: 0 }]
    );

  return (
    <div
      className={cn(
        "container max-w-4xl", //
        "py-6", //
        "lg:py-10"
      )}
    >
      <div className="flex flex-col">
        <div
          className={cn(
            "flex flex-col flex-1 gap-3 mb-5", //
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
        <section className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Badge
              key={tag.tag}
              className="rounded-sm cursor-pointer px-3 py-1 text-sm"
            >
              {tag.tag} ({tag.count})
            </Badge>
          ))}
        </section>
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
