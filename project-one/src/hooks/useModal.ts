import type { Modal } from "@/types";
import { create } from "zustand";

const useModal = (confirmCb?: () => void) => {
  const modalStore = create<Modal>((set, get) => ({
    open: false,
    title: "",
    content: "",
    onTriggerModal: (title: string, content?: string) => {
      set({ open: true, title, content });
    },
    onClose: () => set({ open: false }),
    onConfirm: () => {
      debugger;
      confirmCb && confirmCb();
      set({ open: false });
    },
    onCancel: () => {
      set({ open: false });
    },
  }));

  return {
    ...modalStore.getState(),
  };
};

export default useModal;
