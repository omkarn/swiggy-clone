import { render, screen } from "@testing-library/react";
import Cart from "../Cart";
import "@testing-library/jest-dom"

test("Should render Cart component", () => {
  render(
      <Cart />
  );
  const cart = screen.getByRole("heading", {name : "Cart"});
  expect(cart).toBeInTheDocument();
});
