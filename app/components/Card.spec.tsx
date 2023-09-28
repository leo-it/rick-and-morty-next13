import { fireEvent, render, screen } from "@testing-library/react";

import { Card } from "./Card";

let isSelected = 0;
let setIsSelected = (id) => {
  isSelected = id;
};
describe("Character card component", () => {
  it("render correctly", () => {
    render(
      <Card
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        name={"Rick Sanchez"}
        status={"Alive"}
        specie={"Human"}
        image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg?w=256"}
        id={1}
      />
    );

    const nameElement = screen.getByText("Rick Sanchez");
    const status = screen.getByText("Alive");
    const specie = screen.getByText("Human");

    expect(nameElement).toBeTruthy();
    expect(status).toBeTruthy();
    expect(specie).toBeTruthy();
  });
  it("selects the card when 'Select' button is clicked", () => {
    render(
      <Card
        isSelected={isSelected}
        setIsSelected={setIsSelected}
        name={"Rick Sanchez"}
        status={"Vivo"}
        specie={"Humano"}
        image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg?w=256"}
        id={1}
      />
    );

    const selectButton = screen.getByText("Select");

    expect(isSelected).toBe(0);

    fireEvent.click(selectButton);

    expect(isSelected).toBe(1);
  });
});
