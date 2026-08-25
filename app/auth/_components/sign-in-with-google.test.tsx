import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { SignInWithGoogle } from "./sign-in-with-google";

// next/image needs an actual Next.js runtime to optimize images; in a plain
// jsdom test we only care that the button renders, so swap it for a bare img.
vi.mock("next/image", () => ({
  default: (props: React.ComponentProps<"img">) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt ?? ""} />;
  },
}));

describe("smoke", () => {
  it("renders the Google sign-in entry point", () => {
    render(<SignInWithGoogle />);

    expect(
      screen.getByRole("button", { name: /fazer login com google/i })
    ).toBeInTheDocument();
  });
});
