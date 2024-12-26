"use client";
import { IUser, user } from './practicipants';
import Image from 'next/image';
import './styleP.scss';
import userStore from './store';
import { Roboto } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';
import { FiUser } from "react-icons/fi";
import Link from 'next/link';

const HRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '500'
});

const PRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '300'
});

const Participants: React.FC = () => {
    const { setLink, openUser } = userStore();

    const clickLink = (index: number) => {
        setLink(index);
        openUser();
    }

    return (
        <div>
            <main className="Participants">
                <article className="article-Participants">
                    {user.slice(0, 3).map((users: IUser, index: number) => (
                        <div className="participants-blok"
                            key={index}
                        >
                            <div className="content-Par">
                                <div className="content-img-Par">
                                    <Image
                                        src={users.img}
                                        alt={users.name}

                                    />
                                </div>
                                <div className="content-p-Par">
                                    <h1 className={HRoboto.className}>
                                        Имя: {users.name}
                                    </h1>
                                    <p className={PRoboto.className}>
                                        Ссылка: {users.url}
                                    </p>
                                    <p className={PRoboto.className}>
                                        Описание: {users.description}
                                    </p>
                                    <button onClick={() => clickLink(index)}>
                                        Подписаться
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </article>
                <Link href='/Users' className='FiUser'>
                    <button className='But-Partic' style={{ cursor: 'pointer' }}>
                        <p>
                            Помотреть всех  <FiUser />
                        </p>
                    </button>
                </Link>
            </main>
        </div>
    );
}

export default Participants;
