import {TypeBenefitInfo} from "../types/typeCommon";

import healthLottie from "../../../public/lotties/health_lottie.json";
import weightLottie from "../../../public/lotties/weight_lottie.json";
import mentalLottie from "../../../public/lotties/mental_lottie.json";
import runnerLottie from "../../../public/lotties/runner_lottie.json";
import testLottie from "../../../public/lotties/health_lottie.json";

export const benefitsInfo: TypeBenefitInfo[] = [
  {
    title: "심혈관 건강 향상",
    description:
      "심장을 강화하고 혈액 순환을 증가시켜 심혈관계 건강을 개선합니다. 꾸준히 달리기를 함으로써 심장 질환, 고혈압, 뇌졸중의 위험을 감소시킬 수 있습니다.",
    src: healthLottie,
    color: "#BBACAF",
  },
  {
    title: "체중 관리",
    description:
      "칼로리를 많이 소모하는 활동으로, 체중 감량과 체중 유지에 효과적입니다. 또한 신체의 대사율을 증가시켜 지속적으로 더 많은 칼로리를 태울 수 있도록 돕습니다.",
    src: weightLottie,
    color: "#fff",
  },
  {
    title: "정신 건강 개선",
    description:
      "스트레스를 감소시키고, 우울증 증상을 완화하며, 불안을 줄이는 데 도움을 줍니다. 운동을 할 때 방출되는 엔도르핀은 기분을 좋게 하고, 전반적인 정신 건강을 개선합니다.",
    src: mentalLottie,
    color: "#C2491D",
  },
  {
    title: "근력 및 지구력 향상",
    description:
      "다리와 하체의 근육을 강화하며, 전반적인 근력과 체력을 향상시킵니다. 또한, 꾸준한 달리기는 폐의 기능을 향상시키고, 오래 견딜 수 있는 체력을 증가시킵니다.",
    src: runnerLottie,
    color: "#333",
  },
  {
    title: "면역력 강화",
    description:
      "정기적인 달리기 활동은 면역계의 기능을 강화하여 감기나 독감과 같은 일반적인 질병에 대한 저항력을 높일 수 있습니다. 달리기는 또한 장기적으로 여러 만성 질환의 위험을 낮추는 데 도움을 줄 수 있습니다.",
    src: testLottie,
    color: "#ff0000",
  },
];
