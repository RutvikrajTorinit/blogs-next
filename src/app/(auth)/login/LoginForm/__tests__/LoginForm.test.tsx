import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import LoginForm from "..";

test("Login Form", () => {
  render(<LoginForm />);

  const form = within(screen.getByRole("form"));

  const label = form.getByRole("Label", { name: "Email address" });

  expect(label).toBeInTheDocument();
});
