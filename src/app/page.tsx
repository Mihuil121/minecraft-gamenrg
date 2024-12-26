"use client";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import Loading from "@/components/Loading/Liading";

const Main: ComponentType = dynamic(() => import('@/components/main/Main'), {
  ssr: false,
  loading: () => <Loading/>,
  
});

export default function Home() {
  return (
    <div className="main">
      <Main />
    </div>
  );
}
