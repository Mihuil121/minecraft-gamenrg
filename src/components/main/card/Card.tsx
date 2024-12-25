import { NextFont } from 'next/dist/compiled/@next/font';
import { ICard, card } from './card';
import './cardStyle.scss'
import { Roboto } from 'next/font/google';
import Bluecard from './BlueCard/Bluecard';

const HRoboto: NextFont = Roboto({
  subsets: ['latin'],
  weight: '500'
})

const PRoboto: NextFont = Roboto({
  subsets: ['latin'],
  weight: '300'
})



const Card: React.FC = () => {
  return (
    <div>
      <div className="card-form">
        <div className="card-one">
          {card.map((cardData: ICard, index: number) => (
            index === 2 ? null : (
              <article className="card" style={{ background: `url(${cardData.backgraundCard})` }} key={index}>
                <div className="content-card-bac">
                  <h2 className={HRoboto.className}>{cardData.text}</h2>
                  <p className={PRoboto.className}>{cardData.p}</p>
                </div>
              </article>
            )
          ))}
        </div>
        <Bluecard />
      </div>
    </div>

  );
}

export default Card;
