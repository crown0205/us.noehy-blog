import { cn } from "@/lib/utils";

const PostToc = () => {
  // NOTE : mdx style 불러와서 여기서는 style 초기화 해줘야됨.
  // TODO : side bar style 수정할지 고민
  return (
    <aside className={cn("absolute right-[19%]")}>
      <div
        className={cn(
          "hidden xl:block",
          "fixed top-[160px]",
          "h-[fit-content] w-[fit-content] min-w-[100px] max-w[150px]",
          "p-4"
        )}
      >
        <h2 className="text-xl font-bold m-0 p-0">Table of Contents</h2>
        <ul
          className={cn(
            "list-none no-underline",
            "flex flex-col gap-0 p-0 m-0"
          )}
        >
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
    </aside>
  );
};

export default PostToc;
