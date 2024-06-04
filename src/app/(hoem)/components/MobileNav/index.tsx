"use client";

import { Icons } from "@/components/common";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-10 px-0", //
            "sm:hidden"
          )}
        >
          <Menu />
          <span className="sr-only">Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className={cn(
            "flex items-center", //
            "mb-8"
          )}
        >
          <Icons.logo className="mr-2 h-4 w-4" />
          <span className="font-bold">{siteConfig.name}</span>
        </MobileLink>

        <div
          className={cn(
            "flex flex-col gap-3", //
            "mt-3"
          )}
        >
          <MobileLink
            className={cn(
              "font-medium transition-colors",
              "hover:text-primary",
              pathname === "/about" ? "text-foreground" : "text-foreground/60"
            )}
            onOpenChange={setOpen}
            href="/blog"
          >
            Blog
          </MobileLink>
          <MobileLink
            className={cn(
              "font-medium transition-colors",
              "hover:text-primary",
              pathname === "/about" ? "text-foreground" : "text-foreground/60"
            )}
            onOpenChange={setOpen}
            href="/about"
          >
            About
          </MobileLink>
          <Link
            className={cn(
              "font-medium transition-colors text-foreground/60",
              "hover:text-primary"
            )}
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
          >
            GitHub
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
