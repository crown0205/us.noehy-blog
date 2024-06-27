"use client";
import { Icons } from "@/components/common";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex items-center space-x-4 lg:space-x-6",
        "w-full justify-between pr-4"
      )}
    >
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-8 w-8" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>

      <Link
        href="/about"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/about" ? "text-foreground" : "text-foreground/60",
          "hidden sm:inline-block"
        )}
      >
        About
      </Link>
    </nav>
  );
};

export default MainNav;
