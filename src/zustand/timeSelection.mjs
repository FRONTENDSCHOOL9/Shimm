import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useSelectedTimeStore = create(
  persist(
    set => ({
      selectedTime: '',
      selectedTimeSet: value => set({ selectedTime: value }),
    }),
    {
      name: 'selectedTime',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

const useIsTimeSelectedStore = create(set => ({
  isTimeSelected: false,
  isTimeSelectedSet: value => set({ isTimeSelected: value }),
}));

export { useSelectedTimeStore, useIsTimeSelectedStore };
