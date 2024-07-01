import { cn } from "@/lib/utils";

import PostList from "../PostList";
import PostTags from "../PostTags";

// [ ] : PostTemplate 컴포넌트 수정 ==> Template을 이렇게 하는게 최선인지?
const PostTemplate = () => {
  return (
    <div
      className={cn(
        "container max-w-4xl", //
        "py-6", //
        "lg:py-10"
      )}
    >
      <div className="flex flex-col">
        <div
          className={cn(
            "flex flex-col flex-1 gap-3 mb-5", //
            "md:gap-6"
          )}
        >
          <h1
            className={cn(
              "inline-block", //
              "font-black text-4xl", //
              "lg:text-5xl"
            )}
          >
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            {/* [ ] : 블로그 설명 글 수정 */}
            블로그에 오신 것을 환영합니다. 여기에는 일상과 기술에 대한 이야기를
            담을 예정입니다. <br /> 계속 업데이트 예정이니 자주 방문해주세요. 🙇‍♂️
          </p>
        </div>

        <PostTags />
      </div>
      <hr className="mt-8" />
      <PostList />
    </div>
  );
};

export default PostTemplate;
