import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface GlobalStore {
  temp: boolean;
  setTemp: (temp: boolean) => void;
}

export const globalStore = create<GlobalStore>()(
  devtools(
    (set) => ({
      temp: false,
      setTemp: (temp: boolean) => set({ temp }),
    }),
    { name: "globalStore" }
  )
);
