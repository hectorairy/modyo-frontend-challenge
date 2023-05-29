import { fireEvent, render, screen } from "@testing-library/react";
import { WelcomeForm } from "../../src/components/WelcomeForm";

describe("<WelcomeForm /> tests", () => {
  test("should match with snapshot ", () => {
    const { container } = render(
      <WelcomeForm setUser={() => {}} setUsername={() => {}} username="" />
    );

    expect(container).toMatchSnapshot();
  });

  test("should execute setUserName func when input changes", () => {
    const setUsername = jest.fn();
    render(
      <WelcomeForm setUser={() => {}} setUsername={setUsername} username="" />
    );
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Hector" } });

    expect(setUsername).toBeCalled();
  });

  test("should not execute setUser func when button is clicked and username is empty", () => {
    const setUser = jest.fn();

    render(
      <WelcomeForm setUser={setUser} setUsername={() => {}} username="" />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setUser).not.toBeCalled();
  });

  test("should execute setUser func when button is clicked and username is not empty", () => {
    const setUser = jest.fn();

    render(
      <WelcomeForm setUser={setUser} setUsername={() => {}} username="Hector" />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setUser).toBeCalled();
  });
});
