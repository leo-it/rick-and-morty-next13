export interface CharacterState {
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