import { StaticImageData } from 'next/image';
import photo from '../../img/News/GameNRG.jpg'
import photo1 from '../../img/News/min.jpg'

export interface INews{
    title:string,
    img:StaticImageData,
    description:string,
}

export const news:INews[] = [
    {
        title: 'Запуск нового сезона на сервере GameNRG!',
        img: photo,
        description: 'Мы рады объявить о запуске нового сезона на нашем сервере! Присоединяйтесь к нам для участия в уникальных событиях и конкурсах, которые начнутся уже на следующей неделе!'
    },
    {
        title: 'Конкурс на лучшее строение месяца',
        img: photo1,
        description: 'Объявляем конкурс на лучшее строение месяца! Участвуйте и получите шанс выиграть уникальные призы. Подробности в нашем Discord-сервере.'
    },
   
];

