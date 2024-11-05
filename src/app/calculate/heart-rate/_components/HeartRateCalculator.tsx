"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";

// components
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Separator} from "@/components/ui/separator";

// form
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {
  HeartRateCalculatorSchema,
  HeartRateCalculatorSchemaType,
} from "@/lib/schema/calculate.schema";

export default function HeartRateCalculator() {
  const [results, setResults] = useState<Record<string, number> | null>(null);
  const router = useRouter();
  const form = useForm<HeartRateCalculatorSchemaType>({
    resolver: zodResolver(HeartRateCalculatorSchema),
    defaultValues: {
      age: "",
      restingHeartRate: "",
      gender: "male",
      maxHeartRate: "",
      zone1: "50",
      zone2: "60",
      zone3: "70",
      zone4: "80",
      zone5: "90",
    },
  });

  function onSubmit(values: HeartRateCalculatorSchemaType) {
    // const maxHR =
    //   values.maxHeartRate ||
    //   (values.gender === "male" ? 214 - 0.8 * values.age : 209 - 0.7 * values.age);
    // const calculateZone = (percentage: number) =>
    //   Math.round(((maxHR - values.restingHeartRate) * percentage) / 100 + values.restingHeartRate);

    // setResults({
    //   maxHeartRate: Math.round(maxHR),
    //   zone1: calculateZone(values.zone1),
    //   zone2: calculateZone(values.zone2),
    //   zone3: calculateZone(values.zone3),
    //   zone4: calculateZone(values.zone4),
    //   zone5: calculateZone(values.zone5),
    // });

    console.log(values);
    setResults({
      maxHeartRate: 180,
      zone1: 90,
      zone2: 108,
      zone3: 126,
      zone4: 144,
      zone5: 162,
    });

    router.push("/calculate/heart-rate/result");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="age"
            render={({field}) => (
              <FormItem>
                <FormLabel>나이</FormLabel>
                <FormControl>
                  <Input maxLength={3} placeholder="나이를 입력해주세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="restingHeartRate"
            render={({field}) => (
              <FormItem>
                <FormLabel>안정시 심박수</FormLabel>
                <FormControl>
                  <Input
                    minLength={2}
                    maxLength={3}
                    placeholder="안정시 심박수를 입력해주세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="gender"
          render={({field}) => (
            <FormItem className="space-y-3">
              <FormLabel>성별</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1 md:flex-row md:space-x-4 md:space-y-0"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" />
                    </FormControl>
                    <FormLabel className="font-normal">남성</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel className="font-normal">여성</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="maxHeartRate"
          render={({field}) => (
            <FormItem>
              <FormLabel>최대 심박수 (선택사항)</FormLabel>
              <FormControl>
                <Input placeholder="직접 입력하거나 비워두세요" {...field} />
              </FormControl>
              <FormDescription>입력하지 않으면 나이를 기준으로 자동 계산됩니다.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator className="my-6" />

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">운동 강도 설정 (% of Max HR)</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["zone1", "zone2", "zone3", "zone4", "zone5"].map((zone, index) => (
              <FormField
                key={zone}
                control={form.control}
                name={zone as keyof HeartRateCalculatorSchemaType}
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Zone {index + 1}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button
            type="button"
            variant="outline"
            className="w-full md:w-auto"
            onClick={() => {
              form.reset();
              setResults(null);
            }}
          >
            다시하기
          </Button>
          <Button type="submit" className="w-full md:w-auto">
            계산하기
          </Button>
        </div>
      </form>
    </Form>
  );
}

// http://marathon.pe.kr/pds/heartrate_cal.html
// https://www.garmin.com/ko-KR/blog/about-runners-heartrate-zones/
// https://m.blog.naver.com/dotoridoc/222915642251
