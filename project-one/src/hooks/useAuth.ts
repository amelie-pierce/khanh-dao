import type { User, UserInfo } from "@/types";
import { create } from "zustand";

const useAuth = create<User>((set, get) => ({
  setInfo: (arg: UserInfo) => {
    set({ info: arg });
  },
}));

export default useAuth;
