import { SignInButton } from "@clerk/nextjs";

export function Landing() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-lg border p-4">
        Hi Lou, <SignInButton />
      </div>
    </div>
  );
}
