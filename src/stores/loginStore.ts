import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IsLoginState {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  userId: string;
  setUserId: (value: string) => void;
}

const useIsLoginStore = create<IsLoginState>()(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (value) => set({ isLogin: value }),
      userId: "",
      setUserId: (value) => set({ userId: value }),
    }),
    {
      name: "isLoginStore",
    },
  ),
);

export default useIsLoginStore;
