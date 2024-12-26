"use client"; 

import { user as userList, IUser } from "../main/participants/practicipants"; 
import userStore from "../main/participants/store";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import './userStyle.scss';

const HRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '500'
});

const PRoboto: NextFont = Roboto({
    subsets: ['latin'],
    weight: '300'
});

const UserComponent: React.FC = () => {
    const { setLink, openUser } = userStore();

    const clickLink = (index: number) => {
        setLink(index);
        openUser();
    }

    return (
        <div>
            <main className="user-participants">
                <article className="user-article">
                    {userList.map((user: IUser, index: number) => ( 
                        <div className="user-block" key={index}>
                            <div className="user-content">
                                <div className="user-image">
                                    <Image
                                        src={user.img}
                                        alt={user.name}
                                    />
                                </div>
                                <div className="user-details">
                                    <h1 className={HRoboto.className}>
                                        Имя: {user.name}
                                    </h1>
                                    <p className={PRoboto.className}>
                                        Ссылка: {user.url}
                                    </p>
                                    <p className={PRoboto.className}>
                                        Описание: {user.description}
                                    </p>
                                    <button onClick={() => clickLink(index)}>
                                        Подписаться
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </article>
            </main>
        </div>
    );
}

export default UserComponent; 
