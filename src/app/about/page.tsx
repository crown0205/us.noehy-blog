import { cn } from "@/lib/utils";

const AboutPage = () => {
  // TODO : 추후 디자인 변경 필요
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
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <div className="h-48 w-48 bg-gray-100 rounded-xl">
            <img src="#" alt="#" />
          </div>
          <h2 className="text-2xl font-bold text-center break-words">
            {"Author"}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Frontend Developer
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          안녕하세요! 제 이름은 정현수입니다. 저는 제과제빵을 하다가 프런트엔드
          개발로 전환했습니다. 저는 앱 사용하는 것을 좋아하는데, 불편한 사항을
          직접 수정하고, 사용자 경험을 개선하는 데에 관심이 생겨 개발을
          시작했습니다. 이러한 이유로 인해 저는 사용자 편의성을 고려하고
          향상시키는데에 초점을 두고 개발을 하게 되었습니다. 저는 사용자
          경험(UX)에 중점을 두고 있으며 사용자를 위한 직관적이고 원활한 상호
          작용을 만드는 데 전념하고 있습니다. 앞으로는 React Native와 Electron을
          공부하며 실력을 늘릴 계획입니다. 이러한 기술을 통해 모바일 및 데스크톱
          애플리케이션을 만들어 보며 다양한 플랫폼에서 사용자들에게 좀더
          편리하고 좋은 서비스를 만들어 보며, 사용자 경험을 향상시킬 수 있는
          개발자가 되려고 합니다. 현재 저는 Next.js를 사용하여 블로그 작업을
          하고 있는데, 이를 통해 next 14버전을 경험하고 앞으로의 개발을 하면서
          공부한 자료를 기록하기 위해 만든 공간입니다.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
