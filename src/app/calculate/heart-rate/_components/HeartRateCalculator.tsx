"use client";

import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {useHeartRateStore} from "@/lib/store/useHeartRateStore";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  gender: z.enum(["male", "female"]),
  age: z.string().min(1, "나이를 입력해주세요"),
  height: z.string().min(1, "키를 입력해주세요"),
  weight: z.string().min(1, "체중을 입력해주세요"),
  lifeStyle: z.string().min(1, "생활습관을 선택해주세요"),
  exerciseLevel: z.string().min(1, "운동 구력을 선택해주세요"),
  exerciseFrequency: z.string().min(1, "운동 횟수를 선택해주세요"),
  healthLevel: z.string().min(1, "체력수준을 선택해주세요"),
});

export default function HeartRateCalculator() {
  const router = useRouter();
  const setUserData = useHeartRateStore((state) => state.setUserData);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "male",
      age: "",
      height: "",
      weight: "",
      lifeStyle: "",
      exerciseLevel: "",
      exerciseFrequency: "",
      healthLevel: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setUserData({
      gender: values.gender,
      age: Number(values.age),
      height: Number(values.height),
      weight: Number(values.weight),
      lifeStyle: values.lifeStyle,
      exerciseLevel: values.exerciseLevel,
      exerciseFrequency: values.exerciseFrequency,
      healthLevel: values.healthLevel,
    });
    router.push("/calculate/heart-rate/result");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="age"
            render={({field}) => (
              <FormItem>
                <FormLabel>나이</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="나이를 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="height"
            render={({field}) => (
              <FormItem>
                <FormLabel>키 (cm)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="키를 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="weight"
            render={({field}) => (
              <FormItem>
                <FormLabel>체중 (kg)</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="체중을 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="lifeStyle"
          render={({field}) => (
            <FormItem>
              <FormLabel>생활습관</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="생활습관을 선택해주세요" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1.05">15시간 이상 누워있습니다</SelectItem>
                  <SelectItem value="1.10">집에서 거의 움직이지 않습니다</SelectItem>
                  <SelectItem value="1.17">학생 또는 일반 사무직입니다</SelectItem>
                  <SelectItem value="1.24">활동적입니다</SelectItem>
                  <SelectItem value="1.31">보통 뛰어다닙니다</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="exerciseLevel"
          render={({field}) => (
            <FormItem>
              <FormLabel>운동 구력</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="운동 구력을 선택해주세요" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="200">입문자</SelectItem>
                  <SelectItem value="210">1~3년차 헬린이</SelectItem>
                  <SelectItem value="220">3~5년차 중급자</SelectItem>
                  <SelectItem value="230">5년차 이상 헬창</SelectItem>
                  <SelectItem value="240">10년차 이상 관장</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="exerciseFrequency"
          render={({field}) => (
            <FormItem>
              <FormLabel>운동 횟수</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="운동 횟수를 선택해주세요" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="0">안함</SelectItem>
                  <SelectItem value="0.8">주 1회</SelectItem>
                  <SelectItem value="1.05">주 2회</SelectItem>
                  <SelectItem value="1.3">주 3회</SelectItem>
                  <SelectItem value="1.55">주 4회</SelectItem>
                  <SelectItem value="1.8">주 5회</SelectItem>
                  <SelectItem value="2.05">주 6회</SelectItem>
                  <SelectItem value="2.30">주 7회</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="healthLevel"
          render={({field}) => (
            <FormItem>
              <FormLabel>체력수준</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="체력수준을 선택해주세요" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="88">매우 나쁨 : 걷지도 못하겠어요</SelectItem>
                  <SelectItem value="80">나쁨 : 못 달리겠어요</SelectItem>
                  <SelectItem value="74">평균 이하 : 달리면 힘들어요</SelectItem>
                  <SelectItem value="66">평균 : 5km 달리기 가능</SelectItem>
                  <SelectItem value="58">평균 이상 : 10km 달리기 완주 가능</SelectItem>
                  <SelectItem value="50">좋음 : 하프코스(21km) 달리기 완주 가능</SelectItem>
                  <SelectItem value="42">매우 좋음 : 풀코스(42km) 달리기 완주 가능</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button
            type="button"
            variant="outline"
            className="w-full md:w-auto"
            onClick={() => form.reset()}
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
