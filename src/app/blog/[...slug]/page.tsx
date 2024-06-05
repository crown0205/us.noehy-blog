import { posts } from "#site/contents";
import MdxComponent from "@/components/MdxComponent";
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
  const post = posts.find((post) => {
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

  const { coverImage, title, tags, body, date, description } = post;
  return (
    <article
      className={cn(
        // NOTE : prose is from tailwind typography plugin
        "container prose py-6 max-w-4xl mx-auto",
        "dark:prose-invert"
      )}
    >
      <Image
        className={cn(
          "bg-gray-400",
          "w-[100%] ",
          "min-h-[200px] max-h-[300px]",
          "rounded-md border-[2px]"
        )}
        src={coverImage}
        alt={`thumbnail for ${title}`}
        width={800}
        height={400}
        priority
        style={{
          objectFit: "cover",
        }}
      />
      <div className="flex flex-col mt-10 md:gap-2">
        <h1 className="mb-2 text-4xl font-black">{title}</h1>
        {description ? (
          <p className="text-xl mt-0 text-muted-foreground">{description}</p>
        ) : null}

        <p className="text-muted-foreground text-sm mt-6">
          {formatDate(date)} · {tags.join(", ")}
        </p>
      </div>
      <hr className="my-4" />
      <MdxComponent code={body} />
    </article>
  );
};

export default PostPage;
