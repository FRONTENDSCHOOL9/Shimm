import { create } from 'zustand';

const useSelectedTimeStore = create(set => ({
  selectedTime: '',
  selectedTimeSet: value => set({ selectedTime: value }),
}));

const useIsTimeSelectedStore = create(set => ({
  isTimeSelected: false,
  isTimeSelectedSet: value => set({ isTimeSelected: value }),
}));

export { useSelectedTimeStore, useIsTimeSelectedStore };
