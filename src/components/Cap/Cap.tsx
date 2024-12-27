import Image from "next/image"
import { IoMdHome } from "react-icons/io";
import { FaNewspaper } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";
import './cap.scss'
import gameNRG from '../../img/gameNRG.png'
import { Roboto } from 'next/font/google'
import { NextFont } from "next/dist/compiled/@next/font";
import { GiVerticalBanner } from "react-icons/gi";
import Link from "next/link";

const textRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '500'
})

const Cap: React.FC = () => {
    return (
        <div>
            <div className="cap">
                <div className="cap-content">
                    <div className="img-cap">
                        <Image
                            src={gameNRG}
                            alt={`${gameNRG}`}
                        />
                    </div>
                    <div className="line" />
                    <div className="text-cap">
                        <Link href='/' className="link">
                            <p className={textRoboto.className}>
                                <IoMdHome />
                                 Главная
                            </p>
                        </Link>
                        <Link href='/news' className="link">
                            <p className={textRoboto.className}>
                                <FaNewspaper /> 
                                Новости
                            </p>
                        </Link>
                        <Link href='/Video' className="link">
                            <p className={textRoboto.className}>
                                <MdVideoLibrary />  
                                Видео
                            </p>
                        </Link>
                        <Link href='/Video' className="link">
                            <p className={textRoboto.className}>
                                <GiVerticalBanner /> 
                                 Кланы
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cap