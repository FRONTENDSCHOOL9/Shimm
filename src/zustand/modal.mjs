import { create } from 'zustand';

const useModalStore = create(set => ({
  showModal: false,
  modalData: null,
  setShowModal: value => set({ showModal: value }),
  setModalData: obj => set({ modalData: obj }),
}));

export default useModalStore;
