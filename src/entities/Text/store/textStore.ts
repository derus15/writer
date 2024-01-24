import { create } from 'zustand'
import { createStore } from './../../../app/providers/storeProvider.ts';

type Store = {
    text: string
    change: (text: string) => void
}

const useTextStoreBase = create<Store>((set) => ({
    text: '',
    change: (text: string) => set(() => ({text: text})),
}))

export const useTextStore = createStore(useTextStoreBase)
