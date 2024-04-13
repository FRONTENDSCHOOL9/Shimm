import { create } from 'zustand';

const useSelectedThemeStore = create(set => ({
  selectedTheme: '',
  selectedThemeSet: value => set({ selectedTheme: value }),
}));

const useIsThemeSelectedStore = create(set => ({
  isThemeSelected: false,
  isThemeSelectedSet: value => set({ isThemeSelected: value }),
}));

export { useSelectedThemeStore, useIsThemeSelectedStore };
