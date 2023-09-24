import create from "zustand";

interface CharacterState {
  characterOne: { episode: string[]; name: string };
  setCharacterOne: (by: { episode: string[]; name: string }) => void;
  characterTwo: { episode: string[]; name: string };
  setCharacterTwo: (by: { episode: string[]; name: string }) => void;
}

const useStore = create<CharacterState>()((set) => ({
  characterOne: {
    episode: [],
    name: "",
  },
  characterTwo: {
    episode: [],
    name: "",
  },
  setCharacterOne: (characterOne) => set({ characterOne }), // Tipo actualizado
  setCharacterTwo: (characterTwo) => set({ characterTwo }), // Tipo actualizado
}));

export default useStore;