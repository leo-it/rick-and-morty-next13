import { Card, GridCharacters } from ".";
import { render, screen } from "@testing-library/react";

let isSelected = 0;
const characters = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/25",
    ],
  },
];
describe("Characters Grid component", () => {
  it("render correctly", () => {
    render(<GridCharacters characters={characters} />);

    const nameElement = screen.getByText("Rick Sanchez");
    const status = screen.getByText("Alive");
    const specie = screen.getByText("Human");

    expect(nameElement).toBeTruthy();
    expect(status).toBeTruthy();
    expect(specie).toBeTruthy();
  });
});
