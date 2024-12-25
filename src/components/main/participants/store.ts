import { create } from "zustand";
import { user } from "./practicipants";

interface IUsers {
    Link: number;
    setLink: (index: number) => void;
    openUser: () => void;
}

const userStore = create<IUsers>((set,get) => ({
    Link: 0,
    setLink: (index) => set({ Link: index }),
    openUser:()=>{
        const state = get();
        const { Link } = state;
        if(Link !== null && user[Link]){
            window.open(user[Link].url)
        }
    }
}))

export default userStore