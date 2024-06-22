import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { TopNav } from "~/components/TopNav";
import { DataEntryForm } from "~/components/DataEntryForm";
import "~/styles/globals.css";
import { Landing } from "~/components/Landing";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignedOut>
        <Landing />
      </SignedOut>
      <SignedIn>
        <TopNav />
        <div>Dashboard Test</div>
      </SignedIn>
    </main>
  );
}
