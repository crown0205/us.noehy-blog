import { posts } from "#site/contents";
import { cn } from "@/lib/utils";
import "@/styles/mdx.css";
import { notFound } from "next/navigation";
import PostContent from "./components/PostContent";
import PostToc from "./components/PostToc";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

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

export const generateMetadata = async ({
  params,
}: IPostPageProps): Promise<Metadata> => {
  const post = await getPostFromPrams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [
        { url: `/api/og?${ogSearchParams.toString()}`, alt: post.title },
      ],
    },
  };
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
