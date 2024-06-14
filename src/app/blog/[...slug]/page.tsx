import { posts } from "#site/contents";
import MdxComponent from "@/components/MdxComponents/MdxComponent";
import "@/styles/mdx.css";
import { cn, formatDate } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";

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

const PostPage = async ({ params }: IPostPageProps) => {
  const post = await getPostFromPrams(params);

  if (!post) {
    notFound();
  }

  const { thumbnail, title, tags, body, date, description } = post;

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
      <div className={cn("w-full xl:max-w-[800px]")}>
        <div className="flex flex-col mt-10">
          <h1 className="mb-2 text-4xl font-black">{title}</h1>
          {description ? (
            <p className="text-xl m-0 text-muted-foreground">{description}</p>
          ) : null}
          <p className="text-muted-foreground text-sm">
            {/* [ ] : TAG 컴포넌트 만들기 */}
            {formatDate(date)} · {tags.join(", ")}
          </p>
        </div>

        <hr className="my-4" />

        <Image
          className={cn(
            "bg-gray-400",
            "w-[100%] ",
            "min-h-[200px] max-h-[300px]",
            "rounded-md border-[2px]"
          )}
          src={thumbnail}
          alt={`thumbnail for ${title}`}
          width={800}
          height={400}
          priority
          style={{
            objectFit: "cover",
          }}
        />

        <MdxComponent code={body} />
      </div>
      <PostToc />
    </article>
  );
};

export default PostPage;

const PostToc = () => {
  return (
    <div
      className={cn(
        "hidden xl:block",
        "sticky top-[160px]",
        "h-[fit-content] w-[fit-content] min-w-[100px] max-w[150px]",
        "p-4"
      )}
    >
      <h2 className="text-xl font-bold">Table of Contents</h2>

      <ul className={cn("list-none no-underline", "flex flex-col gap-0")}>
        <li className="no-underline m-0 p-0">
          <a className="no-underline hover:underline" href="#test">
            <small>Test</small>
          </a>
        </li>
        <li className="no-underline m-0 p-0">
          <a className="no-underline hover:underline" href="#test">
            <small>Test</small>
          </a>
        </li>
        <li className="no-underline m-0 p-0">
          <a className="no-underline hover:underline" href="#test">
            <small>Test</small>
          </a>
        </li>
      </ul>
    </div>
  );
};
