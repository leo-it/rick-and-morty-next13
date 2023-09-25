import { render, screen } from "@testing-library/react";

import { Card } from ".";

let isSelected = 0;
describe("Character card component", () => {
  it("render correctly", () => {
    render(
      <Card
        isSelected={0}
        setIsSelected={isSelected}
        name={"Rick Sanchez"}
        status={"Alive"}
        specie={"Human"}
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
});
