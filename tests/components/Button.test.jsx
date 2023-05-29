import { render, screen } from "@testing-library/react";
import { Button } from "../../src/components/Button";

describe("<Button /> test", () => {
  test("should match with snapshot ", () => {
    const { container } = render(
      <Button handleClick={() => {}}>Hello World!</Button>
    );

    expect(container).toMatchSnapshot();
  });
});
