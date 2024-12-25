'use client'
import { ICard, card } from '../card'
import { Roboto } from 'next/font/google'
import { TbBrandMinecraft } from "react-icons/tb";
import { MdOutlineLocalActivity } from "react-icons/md"
import { FaGamepad } from "react-icons/fa6";
import { NextFont } from 'next/dist/compiled/@next/font';
import useStore from '../../store';
import { data } from '../data';
import { useEffect, useState } from 'react';

const HRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '500'
})
const PRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '300'
})

interface IIcons {
    icon: React.ReactNode;
}

const icons: IIcons[] = [
    { icon: <MdOutlineLocalActivity /> },
    { icon: <TbBrandMinecraft /> },
    { icon: <FaGamepad /> },
];

const Bluecard: React.FC = () => {
    const [isEntering, setIsEntering] = useState<boolean>(true);
    const { curIndex, setCureIndex } = useStore();

    useEffect(() => {
        setIsEntering(true);
        const timer: NodeJS.Timeout = setTimeout(() => {
            setIsEntering(false);
        }, 500); // Длительность анимации

        return () => clearTimeout(timer);
    }, [curIndex]);

    return (
        <div>
            <aside className="blue-card">
                {card.map((cardData: ICard, index: number) => (
                    index === 2 ? (
                        <article className="card2" style={{ background: `${cardData.color}` }} key={index}>
                            <div className="content-card-bac2">
                                <h2 className={`${HRoboto.className} text ${isEntering ? 'text-enter' : 'text-exit'}`}>
                                    {data[curIndex].text}
                                </h2>
                                <div className="icons">
                                    {icons.map((icon: IIcons, iconIndex: number) => (
                                        <div className="icon"
                                            key={iconIndex}
                                            onClick={() => setCureIndex(iconIndex)}
                                        >
                                            {icon.icon}
                                        </div>
                                    ))}
                                </div>
                                <p className={`${PRoboto.className} text ${isEntering ? 'text-enter' : 'text-exit'}`}>
                                    {data[curIndex].p}
                                </p>
                                <div className="but-card">
                                    <div className="join">
                                        <button className={PRoboto.className} >
                                            Присоеденится
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ) : null
                ))}
            </aside>
        </div>
    )
}

export default Bluecard;
