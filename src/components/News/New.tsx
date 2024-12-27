import { news, INews } from "./new";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import './newsStyle.scss'

const HRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '500'
})

const PRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '300'
})

const New: React.FC = () => {
    return (
        <div className="item-news">
            {news.slice().reverse().map((item: INews, index: number) => (
                <div key={index} className="news-item">
                    <Image
                        src={item.img}
                        alt={`${item.img}`}
                    />
                    <div className="news-item-content">
                        <h1 className={HRoboto.className}>
                            {item.title}
                        </h1>
                        <p className={PRoboto.className}>
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default New;
