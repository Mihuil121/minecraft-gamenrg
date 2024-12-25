import Image from "next/image"
import mane from '../../img/man2.png'
import './main.scss'
import { Roboto } from "next/font/google"
import { NextFont } from "next/dist/compiled/@next/font"
import Card from "./card/Card"
import About from "./ about/About"
import Why from "./card/WhyUs/Why"
import Icons from "./icons/Icons"
import Participants from './participants/Participants'

const HRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '500'
})

const PRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '300'
})

const Main: React.FC = () => {
    return (
        <div>
            <main className="main">
                <section className="main-content">
                    <div className="text-main">
                        <h1 className={HRoboto.className}>
                            Добро пожаловать на сайт GameNRG.
                        </h1>
                        <p className={PRoboto.className}>
                            Это приватный сервер Minecraft Bedrock для друзей и контент-креаторов
                        </p>
                    </div>
                    <figure className="img-content">
                        <Image
                            src={mane}
                            alt="Изображение сервера GameNRG"
                        />
                    </figure>
                </section>
                <Card />
                <About />
                <Why />
                <Icons />
                <Participants />
            </main>
        </div>

    )
}

export default Main