import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface IPostTocProps {
  title: string;
  postElement: HTMLElement | null;
}

type Heading = {
  id: string;
  text: string;
  level: number;
  element: Element;
};

const PostToc = ({ title, postElement }: IPostTocProps) => {
  // NOTE : mdx style 불러와서 여기서는 style 초기화 해줘야됨.
  // [ ] : side bar style 수정할지 고민
  // [ ] : 로직 수정 필요 & 최적화 필요 (hook으로 분리 필요)
  const [activeId, setActiveId] = useState<string>("");

  const [headings, setHeadings] = useState<Heading[]>([]);

  const handleHeadingClick = (id: string): void => {
    const element = document.getElementById(id);

    if (element === null) {
      return;
    }

    window.scrollTo({
      top: element.offsetTop - 70,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!postElement) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectEntries = entries.filter(
          ({ isIntersecting }) => isIntersecting
        );

        if (intersectEntries.length > 0) {
          setActiveId(intersectEntries[0].target.id);
        }
      },
      {
        threshold: 0.95,
        rootMargin: "-50px 0px -85% 0px",
      }
    );

    const headingElements = Array.from(postElement.querySelectorAll("h2, h3"));

    let headings: Heading[] = [];

    for (const headingElement of headingElements) {
      headings = [
        ...headings,
        {
          id: headingElement.id,
          level: +headingElement.tagName.toLowerCase().replace("h", ""),
          text: headingElement.textContent || "",
          element: headingElement,
        },
      ];

      observer.observe(headingElement);
    }

    setHeadings(headings);

    return () => {
      observer.disconnect();
    };
  }, [postElement]);

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
        <h2 className="text-xl font-bold m-0 p-0 mb-3">{title}</h2>
        <ul
          className={cn(
            "list-none no-underline",
            "flex flex-col gap-1 p-0 m-0"
          )}
        >
          {headings.map((heading) => {
            return (
              <li
                className={cn(
                  "no-underline m-0 p-0 leading-[1.5]",
                  heading.level === 3 && "ml-5"
                )}
                key={heading.id}
              >
                <a
                  className="no-underline hover:underline"
                  href="#test"
                  onClick={() => handleHeadingClick(heading.id)}
                >
                  <small
                    className={cn(
                      "m-0 p-0 text-gray-500",
                      heading.id === activeId &&
                        "text-[13.8px] text-bold text-[#3182ce]"
                    )}
                  >
                    {heading.level === 3 && "> "}
                    {heading.text}
                  </small>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default PostToc;
