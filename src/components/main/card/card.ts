import backgraundCard1 from '../../../img/blok1.png'
import backgraundCard2 from '../../../img/blok2.png'

export interface ICard {
    text: string,
    p: string,
    backgraundCard?: string,
    color?: string
}

export const card: ICard[] = [
    {
        text: 'GameNRG: Сервер Minecraft',
        p: `Присоединяйтесь к уникальному игровому сообществу!
            Играйте с друзьями и контент-креаторами на приватном сервере Minecraft Bedrock.`,
        backgraundCard: backgraundCard1.src
    },
    {
        text: 'Почему выбирают GameNRG?',
        p: `
    Легкость подключения: Быстрый доступ без сложных настроек.
    Кроссплатформенность: Играйте на ПК и мобильных устройствах.
    `,
        backgraundCard: backgraundCard2.src
    },
    {
        text: 'Уникальные события !',
        p: `
    Уникальные события
    Регулярные мероприятия и активности!
    частвуйте в аукционах, совместных постройках и других увлекательных событиях. Начните свое приключение на GameNRG уже сегодня!
    `,
        color: '#664DF8'
    },
]
