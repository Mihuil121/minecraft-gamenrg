import photo1 from '../../img/gameNRG.png'
import { StaticImageData } from 'next/image'
import g1 from '../../img/g1.png'
import g2 from '../../img/g2.png'
import g3 from '../../img/g3.png'

export interface IClans {
    title: string,
    img: StaticImageData

}

export const Clans: IClans[] = [
    {
        title: 'Season 1',
        img: g1,

    }, {
        title: 'Season 2',
        img: g2,

    }, {
        title: 'Season 3',
        img: g3,

    },
]