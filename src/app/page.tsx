import React from "react";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <section>메인 페이지 히어로</section>
      <section>심박수 계산기</section>
      <div className="">
        <Link href="/test/page">러닝 습관 테스트 해보기</Link>
        <Link href="/test/page">식습관 테스트 해보기</Link>
      </div>
    </>
  );
}
