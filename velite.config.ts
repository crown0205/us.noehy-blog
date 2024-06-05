import { defineConfig, defineCollection, s } from "velite";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const posts = defineCollection({
  name: "Post",
  pattern: "**/*.mdx",
  schema: s
    .object({
      slug: s.path(), // 조드 프리미티브 타입
      title: s.string().max(100), // 파일 경로에서 슬러그 자동 생성
      description: s.string().max(999).optional(),
      coverImage: s.string(), // 파일 경로
      tags: s.array(s.string()), // 문자열 배열
      date: s.isodate(), // 입력 날짜 문자열, 출력 ISO 날짜 문자열
      published: s.boolean().default(true),
      body: s.mdx(), // 마크다운을 HTML로 변환
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "contents",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
