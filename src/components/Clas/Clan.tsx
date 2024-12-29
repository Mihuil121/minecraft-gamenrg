'use client'

import { Clans, IClans } from "./clans";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import useStore from "../main/store";
import Link from "next/link";
import '../../app/[id]/Ban.scss'

const HRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '500'
});

const Clan: React.FC = () => {
    const { setCureIndex } = useStore();

    return (
        <div className="clan-container">
            <div className="banners">
                {Clans.map((clan: IClans, index: number) => (
                    <div className="banner-card" key={index}>
                        <Link href={`/${index}`} className="Link-Clans" onClick={() => setCureIndex(index)} style={{cursor:'pointer'}}>
                            <div className="banner-image2">
                                <Image
                                    src={clan.img}
                                    alt={`${clan.img}`}
                                    layout="responsive"
                                    className="Image-clan-container"
                                    
                                />
                            </div>
                            <div className="content-text-Clans">
                                <h2 className={`${HRoboto.className} banner-title`}>
                                    {clan.title}
                                </h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clan;

