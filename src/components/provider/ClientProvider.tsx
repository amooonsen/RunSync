"use client";
import {useScreenSize} from "@/lib/hooks/global/useScreenSize";

export function ClientProvider({children}: {children: React.ReactNode}) {
  useScreenSize();
  return <>{children}</>;
}
