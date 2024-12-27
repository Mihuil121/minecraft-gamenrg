"use client"
import { useState } from "react";
import { video, IVideo } from "./video";
import Image from "next/image";
import './videoStyle.scss'

const Videos = () => {
    const [useFrame, setFrame] = useState<boolean>(false);

    const mouseOn = () => {
        setFrame(true)
    }

    const mouseF = () => {
        setFrame(false)
    }
    return (
        <div>
            <div className="Video">
                <div className="video-content">
                    {video.slice().reverse().map((videos: IVideo, index: number) => (
                        <div className="content-V" key={index} >
                            <div className="contentImg" onMouseEnter={mouseOn} onMouseLeave={mouseF}>
                               {useFrame ? (
    <iframe 
        src={videos.url}
        frameBorder="0" // Corrected from frameborder to frameBorder
        allowFullScreen={true} // Corrected from allowfullscreen to allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="iframe-v"
    ></iframe>
) : (
    <Image
        src={videos.img}
        alt={`${videos.img}`}
    />
)}

                            </div>
                            <div className="content-text-v">
                                <h1>
                                    {videos.title}
                                </h1>
                                <p>
                                    {videos.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Videos;
