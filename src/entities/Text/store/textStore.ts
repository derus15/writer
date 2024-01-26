import { create } from 'zustand';
import { createStore } from 'app/providers/storeProvider.ts';
import { persist } from 'zustand/middleware';

type Store = {
    text: string
    change: (text: string) => void
}

const useTextStoreBase = create<Store>()(
    persist(
        (set) => ({
            text: '',
            change: (text: string) => set(() => ({text: text})),
        }),
        {name: 'text'}
    )
);

export const useTextStore = createStore(useTextStoreBase);
