import { MdDescription } from 'react-icons/md'
import photo from '../../../../img/man.png'
import { StaticImageData } from 'next/image'

interface IWhy {
    img: StaticImageData,
    text: string,
    description: string,
}

export const why: IWhy[] = [
    {
        img: photo,
        text: 'Что отличает GameNRG от конкурентов?',
        description: `
        Активное сообщество и мероприятия: GameNRG активно организует различные события и мероприятия для игроков, такие как аукционы и совместные постройки. 
        Это создает уникальную атмосферу взаимодействия и сотрудничества среди пользователей, чего может не хватать на других серверах.
        `
    }
]