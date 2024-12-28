import { StaticImageData } from "next/image";
import photo1 from '../../img/gameNRG.png';

export interface IBanner {
    title: string;
    img: StaticImageData;
    description: string;
}

export interface IClanser {
    id: number; 
    baner: IBanner[]; 
}

export const clanser: IClanser[] = [
    {
        id: 0,
        baner: [
            {
                title: '121',
                img: photo1,
                description: `
                121
                `
            },
            {
                title: '122', 
                img: photo1,
                description: `
                122
                `
            }
        ]
    },
    {
        id: 1, 
        baner: [
            {
                title: '221',
                img: photo1,
                description: `
                221
                `
            },
            {
                title: '222',
                img: photo1,
                description: `
                222
                `
            }
        ]
    }
];
