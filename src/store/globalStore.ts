import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface GlobalStore {
  isAuth: boolean;
  isProfileMenuOpen: boolean;
  setIsProfileMenuOpen: (isProfileMenuOpen: boolean) => void;
  setIsAuth: (isAuth: boolean) => void;
}

export const globalStore = create<GlobalStore>()(
  devtools(
    (set) => ({
      isAuth: false,
      isProfileMenuOpen: false,
      setIsProfileMenuOpen: (isProfileMenuOpen: boolean) =>
        set({ isProfileMenuOpen }),
      setIsAuth: (isAuth: boolean) => set({ isAuth }),
    }),
    { name: "globalStore" }
  )
);
