import PostTemplate from "./components/PostTemplate";

// [x] : route를 이렇게 하는게 최선인지?
// [ ] : category, tag 로 쿼리를 받아 넘기도록 변경해도 좋을듯 하지만 postTemplate은 변경을 못할듯...
const BlogPage = async () => {
  return <PostTemplate />;
};

export default BlogPage;
