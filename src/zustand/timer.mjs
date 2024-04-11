import { create } from 'zustand';

const useCompleteTimeStore = create(set => ({
  completeTime: 0,
  completeTimeSet: value => set({ completeTime: value }),
}));

export default useCompleteTimeStore;
