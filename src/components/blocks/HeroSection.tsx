import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div>
      <h2>메인 히어로 섹션 안내 헤딩</h2>
      <div className="">
        건강한 러닝 습관을 만들고 성과를 추적하세요. 우리와 함께 달리는 즐거움을 경험하세요.
      </div>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/calculate-heart-rate">심박수 계산하기</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/check-running-habit">러닝 습관 확인하기</Link>
        </Button>
      </div>
    </div>
  );
}
