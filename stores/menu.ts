// stores/categoryStore.ts
import { create } from "zustand";

interface MenuStateProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const useMenuStores = create<MenuStateProps>((set) => ({
  activeCategory: "All", // default awal
  setActiveCategory: (category) => set({ activeCategory: category }),
}));
