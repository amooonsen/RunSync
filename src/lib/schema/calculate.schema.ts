import z from "zod";

export const HeartRateCalculatorSchema = z.object({
  age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0 && Number(val) <= 120, {
    message: "나이는 1에서 120 사이의 숫자여야 합니다.",
  }),
  restingHeartRate: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 30 && Number(val) <= 200, {
      message: "안정시 심박수는 30에서 200 사이의 숫자여야 합니다.",
    }),
  gender: z.enum(["male", "female"]),
  maxHeartRate: z
    .string()
    .refine(
      (val) => val === "" || (!isNaN(Number(val)) && Number(val) >= 100 && Number(val) <= 220),
      {
        message: "최대 심박수는 100에서 220 사이의 숫자이거나 비워둘 수 있습니다.",
      }
    ),
  zone1: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 50 && Number(val) <= 60, {
    message: "Zone 1은 50에서 60 사이의 숫자여야 합니다.",
  }),
  zone2: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 60 && Number(val) <= 70, {
    message: "Zone 2는 60에서 70 사이의 숫자여야 합니다.",
  }),
  zone3: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 70 && Number(val) <= 80, {
    message: "Zone 3은 70에서 80 사이의 숫자여야 합니다.",
  }),
  zone4: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 80 && Number(val) <= 90, {
    message: "Zone 4는 80에서 90 사이의 숫자여야 합니다.",
  }),
  zone5: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 90 && Number(val) <= 100, {
      message: "Zone 5는 90에서 100 사이의 숫자여야 합니다.",
    }),
});

export type HeartRateCalculatorSchemaType = z.infer<typeof HeartRateCalculatorSchema>;
