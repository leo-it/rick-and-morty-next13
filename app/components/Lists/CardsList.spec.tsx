import { render, screen } from "@testing-library/react";

import { CardList } from "./CardsList";

const character = {
  name: "Rick Sanchez",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};

describe("Characters CardList component", () => {
  it("render correctly", () => {
    render(
      <CardList character={character} episodes={[]} title={"Morty Smith"} />
    );

    const nameElement = screen.getByText("Rick Sanchez");
    const image = screen.getByRole("img");

    expect(nameElement).toBeTruthy();
    expect(image).toBeTruthy();
  });
});
