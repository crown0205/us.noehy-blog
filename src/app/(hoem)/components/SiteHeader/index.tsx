import { Icons } from "@/components/common/Icon";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MainNav from "../MainNav";

const SiteHeader = () => {
  const linkData = [
    {
      href: siteConfig.links.github,
      icon: <Icons.github className="w-4 h-4" />,
      label: "GitHub",
    },
    // TODO : link 추가
    // {
    //   href: siteConfig.links.twitter,
    //   icon: <Icons.twitter className="w-4 h-4" />,
    //   label: "Twitter",
    // }
  ];
  return (
    <header
      className={cn(
        "w-full h-14",
        "flex",
        "sticky top-0",
        "border-b border-border",
        "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div
        className={cn(
          "container max-w-screen-2xl", //
          "flex flex-1 items-center"
        )}
      >
        <MainNav />
        <div
          className={cn(
            "flex flex-1 items-center justify-end ", //
            "space-x-2"
          )}
        >
          <nav>
            {linkData.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "w-10 px-0",
                    "rounded-[50%]"
                  )}
                >
                  {link.icon}
                  <span className="sr-only">{link.label}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
