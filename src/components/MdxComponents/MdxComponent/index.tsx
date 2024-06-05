import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "@/components/MdxComponents";
import { cn } from "@/lib/utils";

const useMdxComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

// NOTE : This is a custom implementation of MDX components
const components = {
  Image,
  Callout,
  h1: (props: any) => (
    <h1 className="text-4xl mt-20 break-keep break-words" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl mt-20 mb-10 break-keep break-words" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl mt-16 mb-8 break-keep break-words" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-xl mt-10 mb-5 break-keep break-words" {...props} />
  ),
  p: (props: any) => (
    <p
      className="mt-4 text-[#202125] dark:text-white leading-8 break-keep break-words"
      {...props}
    />
  ),

  ol: (props: any) => <ol className="list-inside pl-0 mb-0" {...props} />,
  ul: (props: any) => <ul className="p-0" {...props} />,
  li: (props: any) => (
    <li
      className="list-none before:content-['•'] before:pr-4 before:text-[#36587de3] before:dark:text-[#CBD5E0] break-keep break-words"
      {...props}
    />
  ),

  a: (props: any) => (
    <a
      className={cn(
        "font-semibold dark:text-[#08bae7] text-[#4299e1] no-underline break-keep break-words",
        "hover:underline"
      )}
      target="_blank"
      {...props}
    />
  ),

  strong: (props: any) => (
    <strong
      className="font-bold text-[#1d305a] dark:text-[#d7f3fa]"
      {...props}
    />
  ),

  code: (props: any) => (
    <code
      className={cn(
        "text-[16px] font-bold text-[#243c70] bg-[#f5f5f5]",
        "dark:text-[#d7f3fa] dark:bg-[#1a1a1a]",
        "rounded-md p-1"
      )}
      {...props}
    />
  ),

  blockquote: (props: any) => (
    <Callout className="[&_strong]:text-black [&_p]:m-0" {...props} />
  ),
};

interface MdxProps {
  code: string;
}

const MdxComponent = ({ code }: MdxProps) => {
  const Component = useMdxComponent(code);
  return <Component components={components} />;
};

export default MdxComponent;
