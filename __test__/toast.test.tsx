import {renderHook, act, screen} from "@testing-library/react";
import {useToast} from "@/lib/hooks/global/useToast";
import {ClientProvider} from "../src/components/provider/ClientProvider";

type ToastFunction = ReturnType<typeof useToast>;

type ToastReturnKeys = keyof ToastFunction;

describe("toast test", () => {
  test.each<ToastReturnKeys>(["toast", "dismiss", "toasts"])(
    "toast 테마별로 호출했을 때 메세지가 보여야한다",
    async (kind) => {
      const {result} = renderHook(() => useToast(), {
        wrapper: ClientProvider,
      });
      const spy = jest.spyOn(result.current, kind);
      act(() => {
        result.current[kind]({
          title: `${kind}토스트`,
          description: "입니다",
        });
      });
      expect(screen.getByText(`${kind}토스트`)).toBeInTheDocument();
      expect(spy).toHaveBeenCalled();
    }
  );
});
