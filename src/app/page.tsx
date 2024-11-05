import IntroProvider from "@/components/provider/IntroProvider";
import ContentsSection from "@/components/layout/ContentsSection";
import MaskText from "@/components/ui/mask-text";
import ZoomImages from "@/components/blocks/ZoomImages";
import LinkButton from "@/components/blocks/LinkButton";
import HeroSection from "@/components/blocks/HeroSection";
import ParallaxCardContainer from "@/components/blocks/ParallaxCardContainer";
import Image from "next/image";

// assets
import RunningImage01 from "@/assets/images/running_image01.jpg";
import RunningImage02 from "@/assets/images/running_image02.jpg";
import RunningImage03 from "@/assets/images/running_image03.jpg";
import RundayLogo from "@/assets/images/runday_logo.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen mb-36">
      <IntroProvider />
      <ContentsSection isFull>
        <HeroSection />
      </ContentsSection>
      <ContentsSection
        layout="grid"
        gap={{
          columnGap: 28,
          rowGap: 24,
        }}
      >
        <MaskText
          visibleValue={0.5}
          containerClass="col-start-2 col-end-8"
          text={{
            fontSize: 96,
            weight: "bold",
          }}
        >
          같이의 가치를 찾다.
        </MaskText>
        <MaskText
          containerClass="mt-5 col-start-5 col-end-8"
          text={{
            fontSize: 48,
            weight: "bold",
          }}
        >
          동기부여란 이런 것.
          <br />
          당신이 더 나아갈 수 있도록.
        </MaskText>
      </ContentsSection>
      <ContentsSection>
        {/* component */}
        <ZoomImages />
        {/* component */}
      </ContentsSection>
      <ContentsSection layout="grid">
        <MaskText
          containerClass="md:col-start-2 col-end-8 col-start-1"
          text={{
            fontSize: 64,
            weight: "semibold",
          }}
        >
          우리는 <span className="text-[96px] text-secondary-dark">달렸습니다.</span>
        </MaskText>
        <MaskText
          containerClass="md:col-start-2 col-end-8 col-start-1"
          text={{
            fontSize: 58,
            weight: "medium",
          }}
        >
          <span className="text-secondary-dark">문명</span>이 태동할 때 부터.
        </MaskText>
        <MaskText
          containerClass="2xl:col-start-5 md:col-start-4 col-start-1 col-end-9 mt-20"
          text={{
            fontSize: 24,
          }}
        >
          먼 과거, 인류는 생존을 위해 뛰었습니다.
          <br />
          사냥감을 추적하며 먹이를 얻고, 위험으로부터 도망치기 위해.
        </MaskText>
        <MaskText
          containerClass="2xl:col-start-5 md:col-start-4 col-start-1 col-end-9 mt-3"
          text={{
            fontSize: 24,
          }}
        >
          이러한 활동은 인간의 발달에 필수적이었으며,
          <br />
          우리의 신체 구조와 체력을 형성하는 데 중요한 역할을 했습니다.
        </MaskText>
        <MaskText
          containerClass="2xl:col-start-5 md:col-start-4 col-start-1 col-end-9 mt-3"
          text={{
            fontSize: 24,
          }}
        >
          달리기는 단순한 생존 기술을 넘어, 인류가 자연과 교감하고,
          <br /> 무리를 이루어 사회적 결속을 다지는 수단이 되었습니다.
        </MaskText>
        <MaskText
          containerClass="2xl:col-start-5 md:col-start-4 col-start-1 col-end-9 mt-3"
          text={{
            fontSize: 24,
          }}
        >
          <span className="font-bold">오늘날에도 우리는 계속해서 달리고 있습니다.</span>
          <br /> 즉 달리기는 우리가 누구인지, 어디서 왔는지를 상기시켜 주는 행위입니다.
        </MaskText>
      </ContentsSection>
      <ContentsSection
        layout="grid"
        gap={{
          columnGap: 28,
          rowGap: 24,
        }}
      >
        <MaskText
          visibleValue={0.5}
          containerClass="mt-32 col-start-2 col-end-8"
          text={{
            fontSize: 64,
            weight: "bold",
          }}
        >
          그리하여,
          <br />
          우리를 뛰게 하는 자극들.
        </MaskText>
        {/* component */}
        <ParallaxCardContainer />
        {/* component */}
      </ContentsSection>
      <ContentsSection layout="grid">
        <MaskText
          containerClass="mt-20 md:col-start-2 col-end-8 col-start-1 leading-tight"
          text={{
            fontSize: 64,
            weight: "semibold",
          }}
        >
          당신의 적정 심박수는?
        </MaskText>
        <MaskText
          containerClass="md:col-start-3 col-start-1 col-end-9 mt-10"
          text={{
            fontSize: 24,
          }}
        >
          언제, 어떻게, 얼마나 뛰어야 할까요?
          <br />
          간편하게 알아보는 운동목적, 심박수, 그에 따른 설정값.
          <br />
        </MaskText>
        <MaskText
          containerClass="mt-12 col-start-6 col-end-9"
          text={{
            fontSize: 20,
          }}
        >
          첫 발걸음을 맞추며{" "}
          <span className="md:text-[28px] text-[22px] font-semibold text-secondary-dark">편안</span>{" "}
          하게.
          <br />
          오늘보다는 내일이 더{" "}
          <span className="md:text-[28px] text-[22px] font-semibold text-secondary-dark">
            가치
          </span>{" "}
          있게.
          <br />
          변화는 움직여야만 이뤄집니다.
        </MaskText>
        {/* 이미지 섹션 추가 예정 */}
      </ContentsSection>
      <div className="flex justify-center mt-20">
        <LinkButton title="심박수 확인하기" href="/calculate" />
      </div>
      <ContentsSection layout="grid">
        <MaskText
          containerClass="md:col-start-4 col-start-1 col-end-7 mt-28 leading-tight"
          text={{
            fontSize: 64,
            weight: "semibold",
          }}
        >
          폭 넓은 코스.
        </MaskText>
        <MaskText
          containerClass="md:col-start-4 col-start-1 col-end-7 leading-tight"
          text={{
            fontSize: 58,
            weight: "medium",
          }}
        >
          폭 넓은 걸음.
        </MaskText>
        <div className="col-start-1 col-end-[none] row-start-3 mt-20">
          <Image
            src={RunningImage01}
            width={600}
            height={400}
            sizes="100vw"
            loading="lazy"
            alt="런데이 이미지"
          />
        </div>
        <div className="col-start-4 col-end-[none] row-start-4 mt-20">
          <Image
            src={RunningImage02}
            width={400}
            height={300}
            sizes="100vw"
            loading="lazy"
            alt="런데이 이미지"
          />
        </div>
        <div className="col-start-3 col-end-[none] row-start-5 mt-20">
          <Image
            src={RunningImage03}
            width={400}
            height={300}
            sizes="100vw"
            loading="lazy"
            alt="런데이 이미지"
          />
        </div>
      </ContentsSection>
      <div className="flex justify-center mt-20">
        <LinkButton title="코스 보러가기" href="/course" />
      </div>
      <ContentsSection
        layout="grid"
        gap={{
          columnGap: 28,
          rowGap: 24,
        }}
      >
        <MaskText
          containerClass="mt-20 pl-[3vw] col-start-1 col-end-[none] row-start-1 leading-tight"
          text={{
            fontSize: 48,
            weight: "semibold",
          }}
        >
          달리기를 도와줄 제일 가까운 친구.
          <br />
          런데이를 사용해보세요.
        </MaskText>
        {/* 이미지 섹션 추가 예정 */}
        <div className="col-start-6 col-end-[none] row-start-2 row-end-3 mt-20">
          <Image src={RundayLogo} width={256} height={256} alt="런데이 로고 이미지" />
          <p>앱스토어, 플레이스토어 링크 바로가기</p>
        </div>
      </ContentsSection>
    </main>
  );
}
