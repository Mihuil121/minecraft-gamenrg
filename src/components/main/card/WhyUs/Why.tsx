import Image from "next/image"
import { why } from "./why"
import { Roboto } from "next/font/google"
import { NextFont } from "next/dist/compiled/@next/font"
import "./whyStyle.scss"

const HRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '500'
})

const PRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '300'
})

const Why: React.FC = () => {
    return (
        <div>
            <aside className='Why'>
                <div className="why-blok">
                    <main className="content-why">
                        <Image
                            src={why[0].img}
                            alt={`${why[0].text}`}
                        />
                        <div className="content-rext-why">
                            <h1 className={HRoboto.className}>
                                {why[0].text}
                            </h1>
                            <p className={PRoboto.className}>
                                {why[0].description}
                            </p>
                        </div>
                    </main>
                </div>
            </aside>
        </div>
    )
}

export default Why