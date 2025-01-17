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
  thumbnail: string;
  published: boolean;
}

const PostItem = (props: IPostItemProps) => {
  const { title, description, date, tags, thumbnail, slug } = props;

  return (
    <article className={cn("border-b border-border py-3", "h-full flex")}>
      {/* [ ] : 컨텐츠 썸네일 넣을시 이미지 사이즈에 따라서 height 차이 남 - 체크 필요 */}
      <Link
        href={`posts/${slug}`}
        className={cn(
          "flex flex-col gap-2 justify-between",
          "h-full w-full flex-1"
        )}
      >
        {/* [ ] : img 사이즈 수정 */}
        <div className="relative">
          <Image
            className={cn(
              "bg-gray-400",
              "min-w-[100%]",
              "min-h-[200px] max-h-[250px]",
              "sm:min-h-[300px] md:max-h-[300px]",
              "rounded-md"
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
        </div>
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
        </div>
        <div className="flex justify-between gap-1">
          <div className="flex gap-1 items-center flex-1">
            {tags.map((tag) => {
              return (
                <small
                  key={tag}
                  className="px-2 py-1 rounded-sm shadow-sm bg-[#e6e6e6] dark:bg-slate-800"
                >
                  {tag}
                </small>
              );
            })}
          </div>
          <small
            className={cn(
              buttonVariants({ variant: "link" }),
              "flex items-center justify-end gap-1 flex-1",
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
