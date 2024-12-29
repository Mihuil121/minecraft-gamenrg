import { about } from "./about"
import { Roboto } from "next/font/google"
import { NextFont } from "next/dist/compiled/@next/font"
import './aboutStyle.scss'
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import Image from "next/image";
import NRG from '../../../img/gosnov.png'

const HRoboto: NextFont = Roboto({
  subsets: ['latin'],
  weight: '500'
})

const PRoboto: NextFont = Roboto({
  subsets: ['latin'],
  weight: '300'
})

const About: React.FC = () => {
  return (
    <div>
      <article className="about" key={about[0].id}>
        <div className="mane-A">
          <h1 className={HRoboto.className}>
            {about[0].text}
          </h1>
        </div>

        <div className="content">
          <ImQuotesLeft className="Left" />
          <p className={PRoboto.className}>
            {about[0].description}
          </p>
          <ImQuotesRight className="Right" />
          <Image
            src={NRG}
            alt={`${NRG}`}
          />
        </div>

      </article>
    </div>
  )
}

export default About