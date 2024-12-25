import { create } from 'zustand'
import { urls } from './dataIcons';

interface IStoreLink {
    link: number,
    setLink: (index: number) => void;
    openLink: () => void;
}

const StoreLink = create<IStoreLink>((set,get) => ({
    link: 0,
    setLink: (index) => set({ link: index }),
    openLink:()=> {
        const state =get();
        const {link}= state;
        if(link !== null && urls[link]){
            window.open(urls[link].url)
        }
    }

    
}))

export default StoreLink;