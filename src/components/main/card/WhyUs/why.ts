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
        GameNRG — это современное и профессиональное решение для аренды игровых серверов, идеально адаптированное под индивидуальные потребности игроков. 
        Мы предлагаем множество пакетов, позволяющих выбрать оптимальные параметры сервера, чтобы каждый мог наслаждаться игрой в Minecraft на своих условиях.
        `
    }
]