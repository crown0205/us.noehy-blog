import PostTemplate from "../components/PostTemplate";
import { IBlogPageProps } from "../page";

const PostSlugPage = ({ searchParams }: IBlogPageProps) => {
  return <PostTemplate searchParams={searchParams} />;
};

export default PostSlugPage;
