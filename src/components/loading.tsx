import React, { useEffect, useState } from 'react'
import Image from 'next/image'
type Props = {
    hidden: boolean
}

const Loading = ({ hidden }: Props) => {
    const [_animation, set_animation] = useState<boolean>(false)
    useEffect(() => {
        if (hidden === true) {
            set_animation(true)
        }
    }, [hidden])
    return (
        <div className={`h-screen w-screen fixed top-0 left-0 z-20 bg-cl-1 overflow-hidden flex ${hidden ? "loading_animation" : ""}`}>
            <div className={`h-max w-full flex absolute transition-all 0.5s bottom-0 ${_animation ? "opacity-100" : "opacity-0"}`}>
                <Image src={"/img/foam_v2.png"} width={500} height={500} className="w-1/2 h-auto " alt="foam" />
                <Image src={"/img/foam_v2.png"} width={500} height={500} className="w-1/2 h-auto " alt="foam" />
            </div>
        </div>
    )
}

export default Loading