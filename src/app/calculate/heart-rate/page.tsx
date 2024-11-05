import React from "react";
import HeartRateCalculator from "./_components/HeartRateCalculator";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";

export default function HeartRatePage() {
  return (
    // <div>
    //   <h2>HeartRatePage</h2>
    //   <HeartRateCalculator />
    // </div>
    <section className="container mx-auto p-4 max-w-3xl">
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            <h2>적정 심박수 계산기</h2>
          </CardTitle>
          <CardDescription>
            <p>나이와 안정시 심박수를 입력하여 운동 강도별 목표 심박수를 계산하세요.</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <HeartRateCalculator />
        </CardContent>
      </Card>
    </section>
  );
}
