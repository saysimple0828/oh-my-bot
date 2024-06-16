"use client";

import type { Metadata } from "next";
import "./globals.css";
import BottomNavigation from "@/feature/common/components/layout/BottomNavigation";
import Navbar from "@/feature/common/components/layout/Navbar";
import Header from "@/feature/common/components/layout/Header";
import { Provider } from "react-redux";
import { useRef } from "react";
import { makeStore, AppStore } from "@/feature/chat/store/store";
import { Providers } from "@/lib/chakra/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    // 스토어 데이터 초기화
    // storeRef.current.dispatch(initializeCount(count))
  }

  return (
    <html lang="en">
      <body>
        <Provider store={storeRef.current}>
          <Providers>
            {/* <Header leftIcons={[]} title="test" rightIcons={[]} /> */}
            <Navbar />
            <main>{children}</main>
            {/* <BottomNavigation /> */}
          </Providers>
        </Provider>
      </body>
    </html>
  );
}
