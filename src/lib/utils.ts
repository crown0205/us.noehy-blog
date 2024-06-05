import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post } from "#site/contents";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number) {
  return new Date(input).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function sortPost(post: Array<Post>) {
  return post.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
