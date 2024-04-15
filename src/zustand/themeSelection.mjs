import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useSelectedThemeStore = create(
  persist(
    set => ({
      selectedTheme: '',
      selectedThemeSet: value => set({ selectedTheme: value }),
    }),
    {
      name: 'theme',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

const useIsThemeSelectedStore = create(set => ({
  isThemeSelected: false,
  isThemeSelectedSet: value => set({ isThemeSelected: value }),
}));

export { useSelectedThemeStore, useIsThemeSelectedStore };
