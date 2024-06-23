import { siteConfig } from "@/config/site";
import Icons from "../Icons";
import { Mail } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a target="_blank" rel="noreferrer" href="mailto:crown0205@gmail.com">
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6" />
          </a>
          <a target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            <span className="sr-only">GitHub</span>
            <Icons.github className="h-6 w-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-ms text-muted-foreground">
          {siteConfig.author}
        </div>
        <div className="mb-2 flex space-x-2 text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
