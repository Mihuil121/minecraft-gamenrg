import photo1 from '../../img/gameNRG.png'
import { StaticImageData} from 'next/image'

export interface IClans{
    title:string,
    img:StaticImageData

}

export const Clans:IClans[] = [
    {
        title:'сезон 1',
        img:photo1,

    },    {
        title:'сезон 1',
        img:photo1,

    },
]