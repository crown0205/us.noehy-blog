import { posts } from "#site/contents";

const useTags = () => {
  const tags = posts
    .map((post) => post.tags)
    .flat()
    .reduce(
      (acc, tag) => {
        acc.find((t) => t.tagName === "all")!.count += 1;

        const existingTag = acc.find((t) => t.tagName === tag);

        if (existingTag) {
          existingTag.count += 1;
        } else {
          acc.push({
            tagName: tag,
            path: "/" + tag,
            count: 1,
          });
        }

        return acc;
      },
      [{ tagName: "all", path: "/", count: 0 }]
    );

  return { tags };
};

export default useTags;
