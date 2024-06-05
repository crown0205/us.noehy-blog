import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate } from "@/lib/utils";

import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IPostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags: string[];
  coverImage: string;
  published: boolean;
  slugAsParams: string;
}

const PostItem = (props: IPostItemProps) => {
  const { title, description, date, tags, coverImage, slugAsParams } = props;

  return (
    <article
      className={cn("flex flex-col gap-2", "border-b border-border py-3")}
    >
      <Link href={`/blog/${slugAsParams}`}>
        {/* TODO : img 사이즈 수정 */}
        <Image
          className={cn(
            "bg-gray-400",
            "w-[100%] ",
            "min-h-[200px] max-h-[300px]",
            "rounded-md"
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
        <div className="mt-6">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className={cn("text-muted-foreground")}>{description || ""}</div>
        <div className="flex justify-between items-center">
          <dl
            className={cn(
              "flex items-center gap-1",
              "text-sm font-medium",
              "sm:text-base"
            )}
          >
            <dt className="sr-only">게시일</dt>
            <dd
              className={cn(
                "flex items-center gap-1",
                "text-sm font-medium",
                "sm:text-base"
              )}
            >
              <Calendar className="w-4 h-4" />
              <span>{formatDate(date)}</span>
            </dd>
          </dl>
          <small
            className={cn(
              buttonVariants({ variant: "link" }),
              "flex items-center gap-1",
              "text-sm sm:text-base"
            )}
          >
            더 보기 <ArrowRight className="h-4 w-4" />
          </small>
        </div>
      </Link>
    </article>
  );
};

export default PostItem;
