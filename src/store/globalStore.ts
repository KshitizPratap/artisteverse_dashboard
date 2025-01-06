import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface GlobalStore {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
}

export const globalStore = create<GlobalStore>()(
  devtools(
    (set) => ({
      isAuth: false,
      setIsAuth: (isAuth: boolean) => set({ isAuth }),
    }),
    { name: "globalStore" }
  )
);
