import { posts } from "#site/contents";
import MdxComponent from "@/components/MdxComponents/MdxComponent";
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
  console.log(posts.length);
  const post = posts.find((post) => {
    console.log({ post, slug });
    return post.slugAsParams === slug;
  });

  return post;
};

export const generateStaticParams = async (): Promise<
  IPostPageProps["params"][]
> => {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
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
        // NOTE : prose is from tailwind typography plugin
        "container prose py-6 max-w-4xl mx-auto",
        "dark:prose-invert"
      )}
    >
      <div className="flex flex-col mt-10">
        <h1 className="mb-2 text-4xl font-black">{title}</h1>
        {description ? (
          <p className="text-xl m-0 text-muted-foreground">{description}</p>
        ) : null}

        <p className="text-muted-foreground text-sm">
          {/* TODO : TAG 만들기 */}
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
    </article>
  );
};

export default PostPage;
