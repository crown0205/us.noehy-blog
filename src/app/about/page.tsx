import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "us.noeyh - about",
  description: "about page",
};

const AboutPage = () => {
  // TODO : 추후 디자인 변경 필요
  // [ ] : 추후 디자인 변경 필요
  // [ ] : 컴포넌트 분리
  // [ ] : data constant로 분리

  const stacks = [
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Styled-components",
    "Recoil",
    "Zustand",
    "React Query",
    "Axios",
    "Jest",
  ];

  /**

   */
  const works = [
    {
      company: "Slogup", // 회사명
      period: "2022.07 ~ 2023.11", // 기간
      JobTitle: "매니저", // 직책
      achievement: ["슬로그업에 있으면서 성장한 것들은 서술..."], // 성과 및 업적
      detail: [
        // 상세 내용
        {
          title:
            "SOCAR - 에버온 전기차 충전소 검색 서비스 신규 개발 및 유지보수",
          link: "https://www.socar.severon.co.kr/",
          description: [
            "SOCAR 전기차 이용 고객에게 현재 위치 기반으로 가까운 충전소를 찾는 지도 서비스",
            "DeepLink를 통해 라우팅하여 여러 지도 길찾기 기능( 카카오맵, 네이버, TMAP ) 구현",
          ],
          people: "프론트엔드 1명, 백엔드 1명",
          content: [
            "대량의 데이터를 처리 시 클러스터 랜더링시 속도 저하 이슈로 인해, supercluster 라이브러리를 사용하여 랜더링 최적화를 통해 랜 더링 속도를 5sec  => 3sec로 개선",
            "라이브러리로 대처시 모바일앱처럼 매끄러운 동작이 되지 않는 이슈로 인해 애니메이션 라이브러리 framer-motion 사용하여 맞춤형 바텀시트 자체 개발",
          ],
        },
        {
          title: "에버온 홈페이지 신규 개발 및 유지보수",
          link: "https://www.severon.co.kr/",
          description: [
            "기존 홈페이지 단일 페이지 SPA로 신규 개발",
            "적응형 디자인 적용",
            "SEO 최적화",
          ],
          people: "프론트엔드 1명, 백엔드 1명",
          content: [
            "초기 렌더링 속도가 느린 이슈가 발생하여, image의 속성 Loading 적용",
            "이미지의 용량을 줄이기 위해 WebP로 변경",
            "폰트의 포맷을 woff2로 변경하여 용량을 줄임",
            "앞의 작업을 통해 초기 렌더링 속도를 5 => 3초로 단축",
          ],
        },
      ],
    },
  ];
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      {/* NOTE : 자기 소개 part */}
      <section className="flex flex-col md:flex-row gap-8 items-center md:items-start my-8">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <div className="h-48 w-48 bg-gray-100 rounded-xl">
            {/* TODO : image add */}
            <img src="#" alt="#" />
          </div>
          {/* NOTE : Author */}
          <h2 className="text-2xl font-bold text-center break-words">정현수</h2>
          <p className="text-muted-foreground text-center break-words">
            Frontend Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4 break-keep">
          {/* TODO : word break 해주기 */}
          {/* 저는 제과제빵을 하다가 프런트엔드 개발로 전환했습니다. <br />
          저는 여러가지 앱을 사용하는 것을 좋아합니다. <br />
          불편한 사항을 직접 수정하고, 사용자 경험을 개선하는 데에 관심이 생겨
          개발을 시작했습니다. <br />
          이러한 이유로 인해 저는 사용자 편의성을 고려하고 향상시키는데에 초점을
          두고 개발을 하게 되었습니다. <br />
          저는 사용자 경험(UX)에 중점을 두고 있으며 사용자를 위한 직관적이고
          원활한 상호 작용을 만드는 데 전념하고 있습니다. <br />
          앞으로는 React Native와 Electron을 공부하며 실력을 늘릴 계획입니다.
          <br />
          이러한 기술을 통해 모바일 및 데스크톱 애플리케이션을 만들어 보며
          다양한 플랫폼에서 사용자들에게 좀더 편리하고 좋은 서비스를 만들어
          보며, 사용자 경험을 향상시킬 수 있는 개발자가 되려고 합니다. <br />
          현재 저는 Next.js를 사용하여 블로그 작업을 하고 있는데, 이를 통해 next
          14버전을 경험하고 앞으로의 개발을 하면서 공부한 자료를 기록하기 위해
          만든 공간입니다. */}
          불편한 문제를 해결하여 사용자 경험을 개선하는 것을 좋아하기 합니다.
          저는 사용자 경험(UX)이 중요하다고 생각하고, 직관적이고 원활한 상호
          작용을 만드는 데 중점을 두고 있습니다. 실력을 더욱 향상시키기 위해
          모바일 및 데스크톱 애플리케이션 개발을 위한 React Native 및 Electron을
          공부할 계획입니다. 다양한 플랫폼에서 더욱 편리한 서비스를 만드는 것이
          목표입니다. 현재 저는 학습 여정을 문서화하고 Next.js 14버전의 새로운
          기능을 공부 하기 위해, Next.js를 사용하여 블로그를 작성하고 있습니다.
        </p>
      </section>

      {/* NOTE : Stacks */}
      <section className="flex flex-col gap-8 py-8">
        <h2 className="text-3xl font-bold ">Stacks</h2>

        <ul className={cn("flex flex-wrap gap-2")}>
          {stacks.map((stack) => (
            <li key={stack} className="mb-3">
              <HoverCard>
                {/* TODO : Icon add */}
                <HoverCardTrigger className={cn("border p-2 rounded-md")}>
                  {stack}
                </HoverCardTrigger>
                <HoverCardContent sideOffset={1}>
                  <div className="p-4 bg-gray-100 rounded-md">
                    {stack} contents add
                  </div>
                </HoverCardContent>
              </HoverCard>
            </li>
          ))}
        </ul>
      </section>

      {/* NOTE : Work Part */}
      <section className="py-8">
        <h2 className="text-3xl font-bold">Work</h2>

        <ul>
          {works.map((work) => (
            <li key={work.company} className="py-4">
              <div className="flex flex-col gap-2 items-start">
                <h3 className="text-2xl font-bold">{work.company}</h3>
                <p className="text-muted-foreground">{work.period}</p>
                <p className="text-muted-foreground">{work.JobTitle}</p>
              </div>
              <p className="text-muted-foreground">{work.achievement}</p>
              <ul className="flex flex-col gap-4">
                {work.detail.map((detail) => (
                  <Accordion key={detail.title} type="single">
                    <AccordionItem value={detail.title}>
                      <li className="py-4 flex flex-col gap-2">
                        <AccordionTrigger>
                          <h4 className="text-xl font-bold">{detail.title}</h4>
                        </AccordionTrigger>
                        <AccordionContent>
                          {detail.link && (
                            <a href={detail.link} className="text-blue-500">
                              {detail.link}
                            </a>
                          )}
                          <p className="text-muted-foreground">
                            인원 : {detail.people}
                          </p>

                          <div className="mb-2 flex flex-col gap-2">
                            <p>프로젝트 내용</p>
                            <ul className="text-muted-foreground ">
                              {detail.description.map((description) => (
                                <span key={description} className="block">
                                  {">"} {description}
                                </span>
                              ))}
                            </ul>
                          </div>

                          <ul className="pl-6 list-disc">
                            성과
                            {detail.content.map((content) => (
                              <li key={content} className="py-1">
                                <p className="text-muted-foreground">
                                  {content}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </li>
                    </AccordionItem>
                  </Accordion>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AboutPage;
