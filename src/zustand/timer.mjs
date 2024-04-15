import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useCompleteTimeStore = create(
  persist(
    set => ({
      completeTime: 0,
      completeTimeSet: value => set({ completeTime: value }),
    }),
    {
      name: 'completeTime',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useCompleteTimeStore;
