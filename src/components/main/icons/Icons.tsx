"use client";

import React, { useEffect } from "react";
import { RiFolderVideoFill } from "react-icons/ri";
import { RiTelegram2Fill } from "react-icons/ri";
import { TbBulbFilled } from "react-icons/tb";
import { Numans, Roboto } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import './iconsStyle.scss';
import StoreLink from "./store";
import { urls } from './dataIcons';

interface IVideo {
    icon: React.ReactNode;
    num: number;
    text: string;
}

const video: IVideo[] = [
    {
        icon: <RiFolderVideoFill />,
        num: 250,
        text: 'Видео'
    },
    {
        icon: <RiTelegram2Fill />,
        num: 150,
        text: 'Активность'
    },
    {
        icon: <TbBulbFilled />,
        num: 300,
        text: 'Идей для проекта'
    },
];

const HRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '500'
});

const PRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '300'
});

const Icons: React.FC = () => {
    const { link, setLink,openLink } = StoreLink();

    const hendelclick = (index: number) => {
        setLink(index);
        openLink();
    };

    return (
        <div>
            <div className="Icons-d">
                {video.map((icons: IVideo, index: number) => (
                    <div className="iconsV" key={index}>
                        <div className="icon-content">
                            {icons.icon}
                            <div className="content-text">
                                <h1 className={HRoboto.className}>
                                    {icons.num} +
                                </h1>
                                <p className={PRoboto.className}>
                                    {icons.text}
                                </p>
                            </div>
                        </div>
                        <button className={PRoboto.className} style={{ cursor: 'pointer' }} onClick={() => hendelclick(index)}>
                            Присоединиться
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Icons;
