import { create } from 'zustand';

const useFormStore = create(set => ({
  form: null,
  setForm: newData => set({ form: newData }),
}));

export default useFormStore;
