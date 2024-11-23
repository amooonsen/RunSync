"use client";

import {useHeartRateStore} from "@/lib/store/useHeartRateStore";
import {useEffect, useState} from "react";

export default function HeartRateResultPage() {
  const {userData} = useHeartRateStore();
  const [calculatedZones, setCalculatedZones] = useState<any>(null);

  const zoneDescriptions = {
    zone1: {
      name: "유산소 지구력 (Aerobic Endurance)",
      description:
        "가벼운 운동, 워밍업, 회복 운동에 적합한 구간입니다. 장시간 운동이 가능하며 체지방 연소에 효과적입니다.",
      benefits: ["체지방 감소", "기초 체력 향상", "회복력 증진", "스트레스 해소"],
      recommendedActivities: ["가벼운 조깅", "빠르게 걷기", "가벼운 자전거", "수영"],
    },
    zone2: {
      name: "유산소 파워 (Aerobic Power)",
      description:
        "기본적인 체력 향상을 위한 구간입니다. 편안하게 대화가 가능한 페이스로 장거리 러닝에 적합합니다.",
      benefits: ["심폐지구력 향상", "근지구력 발달", "유산소 능력 향상", "에너지 효율 개선"],
      recommendedActivities: ["중간 강도 러닝", "사이클링", "수영", "크로스핏"],
    },
    zone3: {
      name: "역치 (Threshold)",
      description:
        "젖산 역치 구간으로, 고강도 지구력 향상에 효과적입니다. 짧은 문장 정도만 말할 수 있는 강도입니다.",
      benefits: ["젖산 내성 향상", "운동 수행능력 증가", "심폐 기능 강화", "대사량 증가"],
      recommendedActivities: ["템포런", "인터벌 트레이닝", "힐 러닝", "고강도 사이클링"],
    },
    zone4: {
      name: "무산소 지구력 (Anaerobic Endurance)",
      description: "고강도 인터벌 트레이닝에 적합한 구간입니다. 말하기 어려울 정도의 강도입니다.",
      benefits: ["스피드 향상", "파워 증가", "무산소 능력 향상", "근력 발달"],
      recommendedActivities: ["단거리 스프린트", "HIIT 트레이닝", "파틀렉", "스피드 인터벌"],
    },
    zone5: {
      name: "무산소 파워 (Anaerobic Power)",
      description:
        "최대 심박수에 가까운 구간으로, 단거리 스프린트나 짧은 고강도 운동에 해당합니다.",
      benefits: ["최대 파워 향상", "순발력 증가", "신경근 조절능력 향상", "대사 효율 극대화"],
      recommendedActivities: ["최대 스프린트", "파워 트레이닝", "플라이오메트릭", "고강도 인터벌"],
    },
  };

  useEffect(() => {
    if (userData) {
      // 기본 최대 심박수 계산
      let maxHR = userData.gender === "male" ? 214 - 0.8 * userData.age : 209 - 0.7 * userData.age;

      // 운동 수준에 따른 조정
      maxHR *= Number(userData.exerciseLevel) / 200;

      // 생활습관에 따른 조정
      maxHR *= Number(userData.lifeStyle);

      // 운동 빈도에 따른 조정
      maxHR *= Number(userData.exerciseFrequency);

      // 건강 수준에 따른 조정
      const healthFactor = Number(userData.healthLevel) / 100;
      maxHR *= healthFactor;

      // 안정시 심박수 추정 (건강 수준에 따라)
      const estimatedRestingHR = 60 + (100 - Number(userData.healthLevel)) * 0.4;

      const calculateZone = (minPercent: number, maxPercent: number) => {
        const min = Math.round(
          ((maxHR - estimatedRestingHR) * minPercent) / 100 + estimatedRestingHR
        );
        const max = Math.round(
          ((maxHR - estimatedRestingHR) * maxPercent) / 100 + estimatedRestingHR
        );
        return {min, max};
      };

      setCalculatedZones({
        maxHeartRate: Math.round(maxHR),
        restingHeartRate: Math.round(estimatedRestingHR),
        zones: {
          zone1: calculateZone(59, 74),
          zone2: calculateZone(75, 84),
          zone3: calculateZone(85, 88),
          zone4: calculateZone(89, 95),
          zone5: calculateZone(96, 100),
        },
      });
    }
  }, [userData]);

  if (!calculatedZones) return <div>데이터를 불러오는 중...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">심박수 구간 분석 결과</h1>
        <p>최대 심박수: {calculatedZones.maxHeartRate} BPM</p>
        <p>안정시 심박수: {calculatedZones.restingHeartRate} BPM</p>
      </div>

      <div className="space-y-6">
        {Object.entries(calculatedZones.zones).map(([zone, values], index) => {
          const zoneKey = `zone${index + 1}` as keyof typeof zoneDescriptions;
          const zoneDescription = zoneDescriptions[zoneKey];

          return (
            <div key={zone} className="border rounded-lg p-4 space-y-4">
              <h2 className="text-xl font-semibold">
                Zone {index + 1}: {zoneDescription.name}
              </h2>
              <p className="text-lg font-medium">
                {values.min as unknown as number} - {values.max as unknown as number} BPM
              </p>
              <p className="text-gray-600">{zoneDescription.description}</p>
              <div className="mt-4">
                <h3 className="font-medium mb-2">주요 효과:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {zoneDescription.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-medium mb-2">추천 운동:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {zoneDescription.recommendedActivities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
