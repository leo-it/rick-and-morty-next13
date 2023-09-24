import create from "zustand";

interface CharacterState {
  characterOneEpisodes: [];
  setCharacterOneEpisodes: (by: []) => void;
  characterTwoEpisodes: [];
  setCharacterTwoEpisodes: (by: []) => void;
}
const useStore = create<CharacterState>()((set) => ({
  characterOneEpisodes: [],
  characterTwoEpisodes: [],

  setCharacterOneEpisodes: (characterOneEpisodes: []) =>
    set({ characterOneEpisodes }),
    setCharacterTwoEpisodes: (characterTwoEpisodes: []) =>
    set({ characterTwoEpisodes }),
}));

export default useStore;
