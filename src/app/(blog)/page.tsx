import PostTemplate, { IPostTemplateProps } from "./components/PostTemplate";

export interface IBlogPageProps extends IPostTemplateProps {}

// [x] : route를 이렇게 하는게 최선인지?
// [ ] : category, tag 로 쿼리를 받아 넘기도록 변경해도 좋을듯 하지만 postTemplate은 변경을 못할듯...
const BlogPage = async ({ searchParams }: IBlogPageProps) => {
  return <PostTemplate searchParams={searchParams} />;
};

export default BlogPage;
