'use client'

import dynamic from "next/dynamic";
import { ComponentType } from "react";
import Loading from "@/components/Loading/Liading";

const Clan: ComponentType = dynamic(() => import('@/components/Clas/Clan'), {
  ssr: false,
  loading: () => <Loading/>,
  
});

const Сlans = () => {
  return (
    <div>
      <Clan />
    </div>
  )
}

export default Сlans