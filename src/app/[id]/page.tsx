'use client';

import { useParams } from 'next/navigation';
import { clanser, IBanner } from '../clans/clanser';
import Image from 'next/image';
import './Ban.scss';

const Ban = () => {
    const { id } = useParams();

    const clanId = id ? parseInt(id as string) : null;

    const selectedClan = clanId !== null ? clanser.find(clan => clan.id === clanId) : null;

    if (!selectedClan) {
        return <h1>Клан не найден</h1>;
    }

    return (
        <div className="clan-container">
              <div className="banners">
                {selectedClan.baner.map((banner: IBanner, index: number) => (
                    <div className="banner-card2" key={index}>
                        <Image
                            src={banner.img}
                            alt={`${banner.img}`}
                            className='banner-image'
                        />
                        <h2 className="banner-title">{banner.title}</h2>
                        <p className="banner-description">{banner.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ban;
