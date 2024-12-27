'use client'

import dynamic from "next/dynamic"
import Loading from "@/components/Loading/Liading"
import { ComponentType } from "react"

const New: ComponentType = dynamic(() => import('@/components/News/New'), {
    loading: () => <Loading />,
    ssr: false,
})
const News: React.FC = () => {
    return (
        <div>
            <New />
        </div>
    )
}

export default News