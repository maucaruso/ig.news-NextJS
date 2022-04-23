import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import { useSession } from "next-auth/react";
import { SignInButton } from ".";

jest.mock("next-auth/react");

describe("SignInButton component", () => {
  const useSessionMocked = mocked(useSession);

  useSessionMocked.mockReturnValueOnce({
    data: null,
    status: "unauthenticated",
  });

  it("renders correctly when user is not authenticated", () => {
    render(<SignInButton />);

    expect(screen.getByText("Sign in with GitHub")).toBeInTheDocument();
  });

  useSessionMocked.mockReturnValueOnce({
    data: {
      user: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
      expires: "123",
    },
    status: "authenticated",
  });

  it("renders correctly when user is authenticated", () => {
    render(<SignInButton />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
