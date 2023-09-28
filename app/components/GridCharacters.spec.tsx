import { render, screen } from "@testing-library/react";

import { GridCharacters } from ".";

const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: ["https://rickandmortyapi.com/api/episode/25"],
  },
];
describe("Characters Grid component", () => {
  it("render correctly", () => {
    render(<GridCharacters characters={characters} />);

    const characterOneHeader = screen.getByText("Character #1");
    const characterTwoHeader = screen.getByText("Character #2");
    const nameElement = screen.getByText("Rick Sanchez");
    const status = screen.getByText("Alive");
    const specie = screen.getByText("Human");

    expect(characterOneHeader).toBeTruthy();
    expect(characterTwoHeader).toBeTruthy();
    expect(characterOneHeader).not.toEqual(characterTwoHeader);
    expect(characterOneHeader).toBeTruthy();
    expect(nameElement).toBeTruthy();
    expect(status).toBeTruthy();
    expect(specie).toBeTruthy();
  });

  it("displays 'Characters dont found' message when no characters are provided", () => {
    render(<GridCharacters characters={[]} />);
  
    const message = screen.getByText("Characters dont found");
  
    expect(message).toBeTruthy();
  });
});
