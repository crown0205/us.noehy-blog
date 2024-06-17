import { posts } from "#site/contents";
import { cn } from "@/lib/utils";
import "@/styles/mdx.css";
import { notFound } from "next/navigation";
import PostContent from "./components/PostContent";
import PostToc from "./components/PostToc";

interface IPostPageProps {
  params: {
    slug: string[];
  };
}

const getPostFromPrams = async (params: IPostPageProps["params"]) => {
  const slug = params.slug.join("/");

  const post = posts.find((post) => post.slug === slug);

  return post;
};

// NOTE : generateStaticParams 함수는 페이지의 정적 경로를 생성한다.
export const generateStaticParams = async (): Promise<
  IPostPageProps["params"][]
> => {
  return posts.map((post) => ({ slug: [post.slug] }));
};

export interface IPost {
  date: string;
  slug: string;
  title: string;
  thumbnail: string;
  tags: string[];
  published: boolean;
  body: string;
  description?: string | undefined;
}

const PostPage = async ({ params }: IPostPageProps) => {
  const post: IPost | undefined = await getPostFromPrams(params);

  if (!post) {
    notFound();
  }

  return (
    <article
      className={cn(
        // NOTE : "prose" is from tailwind typography plugin
        "w-full px-8 prose py-14 mx-auto max-w-4xl",
        "flex justify-around",
        "dark:prose-invert",
        // NOTE : xl 이상에서만 적용되는 클래스
        "xl:max-w-6xl xl:px-0"
      )}
    >
      <PostContent {...post} />
      <PostToc />
    </article>
  );
};

export default PostPage;
