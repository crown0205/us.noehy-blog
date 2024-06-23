"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IPost } from "../../page";
import { cn, formatDate } from "@/lib/utils";
import MdxComponent from "@/components/MdxComponents/MdxComponent";

const PostContent = (props: IPost) => {
  const { body, date, tags, thumbnail, title, description } = props;

  console.log({ thumbnail1: thumbnail });

  return (
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
      <div>
        <MdxComponent code={body} />
      </div>
    </div>
  );
};

export default PostContent;
