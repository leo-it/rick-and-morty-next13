import create from "zustand";

interface CharacterState {
  characterOne: { episode: string[]; name: string; image: string };
  setCharacterOne: (by: {
    episode: string[];
    name: string;
    image: string;
  }) => void;
  characterTwo: { episode: string[]; name: string; image: string };
  setCharacterTwo: (by: {
    episode: string[];
    name: string;
    image: string;
  }) => void;
}

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
