import { StaticImageData } from "next/image"
import photo1 from '../../img/nexon.jpg'
import photo2 from '../../img/gold.jpg'
import photo3 from '../../img/NRG121.jpg'

export interface IVideo {
    title: string,
    url: string,
    description: string,
    img: StaticImageData
}

export const video: IVideo[] = [
    {
        title: 'Финал // GameNRG 2 сезон',
        url: "https://rutube.ru/play/embed/157997868b96b94b79a0596807aaf330/?p=r7cjZhtZUEwN3PaDJBtiZQ",
        description: 'Работа протяжённостью в 1 с половиной месяц завершена. Спасибо за прекрасный (или почти прекрасный) второй сезон.',
        img: photo3
    },
    {
        title: 'Старт сезона/GameNRG 3 season',
        url: "https://rutube.ru/play/embed/025c8db4f176986f2e56ce5ef4780cc7",
        description: 'Это не последний ролик!!!!! Люблю пиццу и, когда на меня подписываются😁',
        img: photo2
    },
    {
        title: 'СОЦИАЛИЗАЦИЯ на приватном сервере Minecraft Bedrock Edition / GameNRG 3 сезон / №2',
        url: "https://rutube.ru/play/embed/f82a5a5c79b27268361737f707541dce/?p=6hAPQnmsyx2QnOFcehbfkQ",
        description: 'Играя на приватном сервере друзей и ютуберов, ты можешь выживать совершенно один. ',
        img: photo1
    },
]