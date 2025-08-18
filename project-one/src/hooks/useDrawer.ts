import type { Drawer } from "@/types";
import { create } from "zustand";

const useDrawer = create<Drawer>((set, get) => ({
  open: false,
  onTriggerDrawer: () => {
    set({ open: true });
  },
  onClose: () => set({ open: false }),
}));

export default useDrawer;
