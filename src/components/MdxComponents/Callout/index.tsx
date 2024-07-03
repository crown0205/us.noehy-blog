import { Icons } from "@/components/common";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ICalloutProps extends PropsWithChildren {
  type: "info" | "warn" | "danger";
  title?: string;
  className?: string;
}

const Callout = (props: ICalloutProps) => {
  const { type, title, children, className } = props;
  switch (type) {
    case "info":
      return (
        <div
          className={cn(
            "bg-[#009CEB1a] text-[#003B59] rounded-md",
            "dark:border-[#009deb77] dark:bg-[#079AE31a] dark:text-[#D7F3FA]",
            "border-l-4 border-[#079ae372]",
            "flex items-center gap-5",
            "mb-5 px-4 py-6 break-words break-keep "
          )}
          role="alert"
        >
          <Icons.info className="min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
          <div className="flex flex-col gap-1">
            {title ? (
              <p className="font-bold m-0 text-xl mb-[8px]">{title}</p>
            ) : null}
            <div className="m-0 [&_p]:m-0">{children}</div>
          </div>
        </div>
      );
    case "warn":
      return (
        <div
          className={cn(
            "bg-[#F7BE6824] text-[#4D361A] rounded-md",
            "dark:border-[#f0bb6c84] dark:bg-[#F0BB6C24] dark:text-[#EDE7DA]",
            "border-l-4 border-[#f7be687d]",
            "flex items-center gap-5",
            "mb-5 px-4 py-6 break-words break-keep "
          )}
          role="alert"
        >
          <Icons.warn className="min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
          <div className="flex flex-col gap-1">
            {title ? (
              <p className="font-bold m-0 text-xl mb-[8px]">{title}</p>
            ) : null}
            <div className={cn("m-0 [&_p]:m-0", "[&_p]:text-[#4D361A]")}>
              {children}
            </div>
          </div>
        </div>
      );
    case "danger":
      return (
        <div
          className={cn(
            "bg-[#FF41331a] text-[#821006] rounded-md",
            "dark:border-[#f7463984] dark:bg-[#F746391a] dark:text-[#F7E5E4]",
            "border-l-4 border-[#F746391a]",
            "flex items-center gap-5",
            "mb-5 px-4 py-6 break-words break-keep "
          )}
          role="alert"
        >
          <Icons.danger className="min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
          <div className="flex flex-col gap-1">
            {title ? (
              <p className="font-bold m-0 text-xl mb-[8px]">{title}</p>
            ) : null}
            <div className={cn("m-0 [&_p]:m-0", "[&_p]:text-[#821006]")}>
              {children}
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div
          className={cn(
            "bg-[#f2f3f6] text-[#212124] rounded-md",
            "dark:border-[#84868892] dark:bg-[#2b2e33] dark:text-[#eaebee]",
            "border-l-4 border-[#12141671]",
            "flex items-center gap-5",
            "mb-5 px-4 py-6 break-words break-keep ",
            className
          )}
          role="alert"
        >
          <Icons.text className="min-w-4 min-h-4 md:min-w-6 md:min-h-6" />
          <div className="flex flex-col gap-1">
            {title ? (
              <p className="font-bold m-0 text-xl mb-[8px]">{title}</p>
            ) : null}
            <div className={cn("m-0 [&_p]:m-0", "[&_p]:text-[#212124]")}>
              {children}
            </div>
          </div>
        </div>
      );
  }
};

export default Callout;
