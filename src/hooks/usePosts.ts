import { posts } from "#site/contents";
import { sortPost } from "@/lib/utils";

const usePosts = ({ pathName }: { pathName: string }) => {
  let postsData = [];

  if (pathName === "/") {
    postsData = sortPost(posts.filter((post) => post.published));
  } else {
    postsData = sortPost(
      posts.filter(
        (post) =>
          post.published && post.tags.includes(pathName.replace("/", ""))
      )
    );
  }

  return { postsData };
};

export default usePosts;
