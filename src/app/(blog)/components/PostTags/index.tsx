"use client";

import { Badge } from "@/components/ui/badge";
import useTags from "@/hooks/useTags";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PostTags = () => {
  const pathname = usePathname();

  const { tags } = useTags();

  return (
    <section className="flex gap-2 flex-wrap">
      {tags.map(({ tagName, count, path }) => (
        <Link href={`${path}`} key={tagName}>
          <Badge
            className={cn(
              "rounded-sm cursor-pointer px-3 py-1 text-sm",
              pathname === path
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-800"
            )}
          >
            {tagName} ({count})
          </Badge>
        </Link>
      ))}
    </section>
  );
};

export default PostTags;
