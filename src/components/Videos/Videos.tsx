"use client"
import { useState } from "react";
import { video, IVideo } from "./video";
import Image from "next/image";
import './videoStyle.scss'

const Videos = () => {
    const [useFrame, setFrame] = useState<boolean[]>(Array(video.length).fill(false));

    const mouseOn = (index: number) => {
        const newFrame = [...useFrame];
        newFrame[index] = true;
        setFrame(newFrame);
    }

    const mouseF = (index: number) => {
        const newFrame = [...useFrame];
        newFrame[index] = false;
        setFrame(newFrame);
    }

    return (
        <div>
            <div className="Video">
                <div className="video-content">
                    {video.slice().reverse().map((videos: IVideo, index: number) => (
                        <div className="content-V" key={index} >
                            <div className="contentImg" onMouseEnter={() => mouseOn(index)} onMouseLeave={() => mouseF(index)}>
                                {useFrame[index] ? (
                                    <iframe
                                        src={videos.url}
                                        frameBorder="0" 
                                        allowFullScreen={true} 
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
