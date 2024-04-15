import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useSelectedThemeStore = create(
  persist(
    set => ({
      selectedTheme: '',
      selectedThemeId: null,
      selectedThemeSet: value => set({ selectedTheme: value }),
      selectedThemeIdSet: value => set({ selectedThemeId: value }),
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
