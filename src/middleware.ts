import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";
  const isMobile = /Mobile|Android|iPhone|iPad|iPod|IEMobile|BlackBerry/i.test(userAgent);
  const url = request.nextUrl.clone();

  // 이미지와 같은 리소스는 리다이렉트 시키지 않음
  const isAsset = url.pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/);
  if (isAsset) {
    return NextResponse.next();
  }

  // 현재 경로가 루트 일 때
  if (request.nextUrl.pathname === "/") {
    if (isMobile) {
      NextResponse.redirect(new URL("/menus", request.url));
    }
  }

  // PC일 경우 기본 '/' 경로를 유지함
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
