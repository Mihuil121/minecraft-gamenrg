import { create } from 'zustand';

interface IuseStore {
    curIndex: number,
    setCureIndex: (index: number) => void,
}

const useStore = create<IuseStore>((set) => ({
    curIndex: 0,
    setCureIndex: (index) => set({ curIndex: index })
}))

export default useStore;