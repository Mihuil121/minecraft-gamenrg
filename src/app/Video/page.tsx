'use client'
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import Loading from "@/components/Loading/Liading";

const Videos: ComponentType = dynamic(() => import('@/components/Videos/Videos'), {
  ssr: false,
  loading: () => <Loading/>,
  
});

const Video:React.FC = () => {
  return (
    <div>
       <Videos/> 
    </div>
  )
}

export default Video