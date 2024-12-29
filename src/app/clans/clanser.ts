import { StaticImageData } from "next/image";
import photo1 from '../../img/gameNRG.png';
import osnov from '../../img/osnovat.png'
import pod from '../../img/podze.png'
import fen from '../../img/fen.jpg'
import hron from '../../img/hran.png'
import and from '../../img/and.jpg'
import ozi from '../../img/ozi.jpg'
import mer from '../../img/merk.jpg'

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
                title: 'Основатели 🌍',
                img: osnov,
                description: `
Клан был создан в начале проекта GameNRG и состоит из трех членов: Nexon95, goldenfredy и лидера Redokser.
 Клан придерживается нейтральной позиции, не инициирует нападений и готов помогать другим игрокам, но сейчас его статус — распущен.
                `
            },
            {
                title: 'Подземное око 👁️',
                img: pod,
                description: `
                Клан развивался под землёй, предлагая каменные породы и секретный склад. У него не было командного коллектива и был низкий онлайн. 
                В настоящее время клан не существует; участники: FlyFunny1545, Bayron6764, ArtemMBS, ShockRPG, happy fox.
                `
            },
            {
                title: 'Грозящий Феникс 🦅',
                img: fen,
                description: `
                Клан  был новым и быстрорастущим, состоящим из ArtemMBS, Spooky, SulimineYT, Prokvin и Lolocraft под руководством Prokvin.
                 У него были плюсы, такие как торговая площадка и база близко к спавну, но также наблюдались низкий актив и нехватка ресурсов.
                `
            }
        ]
    },
    {
        id: 1,
        baner: [
            {
                title: 'Хранители времени',
                img: hron,
                description: `
               Клан распущен, но ранее состоял из членов MIRAI, Bayron6764, Dizimi, Lolocraft, DiaMorfaPlay, KiritoSama и Antarrobin217. 
               Они защищали порядок во времени и игроков Game NRG от временных аномалий.
                `
            },
            {
                title: 'Хранителей Энда',
                img: and,
                description: `
             Лидером был FlyFunny1545, участники — LaikaAfka, Lazy cat и Dizimi.
                Альянс поддерживал дружеские отношения, планировал благоустройство спавна и имел привилегии, такие как скидки на ресурсы и участие в ивентах.
                `
            }
        ]
    }, {
        id: 2,
        baner: [
            {
                title: 'Оазис Культуры',
                img: ozi,
                description: `
            Стремится создать безопасный рынок и культурное наследие на сервере, управляемый комитетом через голосование. 
              Глава клана — Bayron6764, а в составе четыре участника, включая Venus, Meviti и Loloscam
                `
            },
            {
                title: 'Альянс Меркурия',
                img: mer,
                description: `
            дружная компания с увлекательными проектами Скалк-сити и Библиотека воспоминаний,
             в состав которой входят FlyFunny1545, Lazy cat, SofiaAndGame и NeKirara; набор новых участников продолжается.
                `
            }
        ]
    }
];
