import type { Modal } from "@/types";
import { create } from "zustand";

const useModal = create<Modal>((set, get) => ({
  open: false,
  title: "",
  content: null,
  onTriggerModal: (title: string) => {
    set({ open: true, title: title });
  },
  onClose: () => set({ open: false }),
  onConfirm: (callback: () => void) => {
    callback();
  },
  onCancel: (callback: () => void) => {
    callback();
  },
}));

export default useModal;
