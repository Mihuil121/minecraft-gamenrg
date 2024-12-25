import Nexon from '../../../img/user/nexon.jpg'
import Artom from '../../../img/user/artom.jpg'
import Fox from '../../../img/user/fox.jpg'
import Prokvin from '../../../img/user/prokvin.jpg'
import { StaticImageData } from 'next/image'

export interface IUser{
    name:string,
    url:string,
    img:StaticImageData,
    description:string
}

export const user:IUser[] = [
    {
        name: 'Nexon95',
        url: 'https://www.youtube.com/@cyborg_nexon_95',
        img: Nexon,
        description: `
        Nexon95 — это активный участник сервера GameNRG, известный своим контентом на платформе YouTube.
         Он создает видео о своих приключениях 
        в Minecraft, делясь опытом выживания и взаимодействия с другими игроками на сервере.
        `
    },
    {
        name: 'Артём MBS',
        url: 'https://www.youtube.com/channel/UCQCPty0xiI8cwcc0rqmjIkQ',
        img: Artom,
        description: `
        Артём MBS — один из популярных участников сервера GameNRG, известный своим увлекательным контентом на YouTube.
         Он активно создает видео о своих приключениях в Minecraft,
         делая акцент на взаимодействии с другими игроками и уникальными событиями на сервере.
        `
    },
    {
        name: 'Happy Fox',
        url: 'https://yt3.googleusercontent.com/fjWXf3jjHV-KsKjSClKLh4rD8qRbByg1M8p0cJdRephUL-cLBfn_sbkmlB-dgGUsLgujRZ7Bq68=s160-c-k-c0x00ffffff-no-rj',
        img: Fox,
        description: `
        Happy Fox — это талантливый контент-креатор на сервере GameNRG,
         который также активно занимается разработкой игр и делится своим опытом с аудиторией на YouTube. 
        Его канал привлекает внимание благодаря разнообразному контенту, который охватывает как игровые сессии, так и процессы разработки.
        `
    },
    {
        name: 'Проквин',
        url: 'https://www.youtube.com/@Prokvin',
        img: Prokvin,
        description: `
        Проквин — это популярный контент-креатор на платформе YouTube, который активно делится своим опытом и приключениями в Minecraft. 
        Он известен своим увлекательным стилем и разнообразием контента, что делает его канал интересным для широкой аудитории.
        `
    },
]