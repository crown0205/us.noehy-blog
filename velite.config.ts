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
      // TODO : slug를 사용하지 않는다면.. 어떻게 해야할까?
      // slug: s.string(), // 파일 경로에서 슬러그 자동 생성
      slug: s.path(), // 조드 프리미티브 타입
      title: s.string().max(100), // 파일 경로에서 슬러그 자동 생성
      description: s.string().max(999).optional(),
      coverImage: s.string(), // 파일 경로
      tags: s.array(s.string()), // 문자열 배열
      date: s.isodate(), // 입력 날짜 문자열, 출력 ISO 날짜 문자열
      published: s.boolean().default(true), // 기본값 true
      body: s.mdx(), // 마크다운을 HTML로 변환
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "contents", // 컨텐츠 파일 경로
  output: {
    data: ".velite", // 데이터 파일 경로
    assets: "public/static", // 파일 경로
    base: "/static/", // 파일 경로 앞에 붙는 경로
    name: "[name]-[hash:6].[ext]", // 파일 이름 형식
    clean: true, // 파일 생성 전 기존 파일 삭제
  },
  collections: { posts }, // 컬렉션 정의
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});
