'use client'

import dynamic from "next/dynamic"
import Loading from "@/components/Loading/Liading"
import { ComponentType } from "react"

const UserComponent: ComponentType = dynamic(() => import('@/components/User/user'), {
    loading: () => <Loading />,
    ssr: false,
})

const page = () => {
    return (
        <div>
            <UserComponent />
        </div>
    )
}

export default page