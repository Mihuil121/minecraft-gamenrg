import { StaticImageData } from "next/image"
import photo1 from '../../img/nexon.jpg'

export interface IVideo{
    title:string,
    url:string,
    description:string,
    img:StaticImageData
}

export const video:IVideo[] =[
    {
        title:'СОЦИАЛИЗАЦИЯ на приватном сервере Minecraft Bedrock Edition / GameNRG 3 сезон / №2',
        url:"https://plvideo.ru/embed/b5EgoPvQpS0E",
        description:'Играя на приватном сервере друзей и ютуберов, ты можешь выживать совершенно один. ',
        img:photo1
    },
]