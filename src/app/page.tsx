import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "./../server/db";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignedOut>
        <div className="border p-4">
          Hi Lou, <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
        <div>Test</div>
      </SignedIn>
    </main>
  );
}
