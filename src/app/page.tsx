"use client";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

const Main: ComponentType = dynamic(() => import('@/components/main/Main'), {
  ssr: false,
  loading: () => <p>loading ... </p>,
  
});

export default function Home() {
  return (
    <div className="main">
      <Main />
    </div>
  );
}
