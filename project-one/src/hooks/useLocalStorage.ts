import { LOCAL_STORAGE_KEYS } from "@/constants";
import type { UserInfo } from "@/types";

const useLocalStorage = () => {
  const getAcessInfo = () => {
    const info = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_INFO);
    if (info) {
      return JSON.parse(info) as UserInfo;
    }
    return undefined;
  };

  const setAccessInfo = (arg: UserInfo) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_INFO, JSON.stringify(arg));
  };

  return { setAccessInfo, getAcessInfo };
};

export default useLocalStorage;
