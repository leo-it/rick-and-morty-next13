import { CharacterState } from "../interfaces";
import { create } from "zustand";

const useStore = create<CharacterState>()((set) => ({
  characterOne: {
    episode: [],
    name: "",
    image: "",
  },
  characterTwo: {
    episode: [],
    name: "",
    image: "",
  },
  setCharacterOne: (characterOne) => set({ characterOne }), // Tipo actualizado
  setCharacterTwo: (characterTwo) => set({ characterTwo }), // Tipo actualizado
}));

export default useStore;
