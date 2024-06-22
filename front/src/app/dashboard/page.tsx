"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { TopNav } from "~/components/TopNav";
import { DataEntryForm } from "~/components/DataEntryForm";
import "~/styles/globals.css";
import { Landing } from "~/components/Landing";
import { testGet } from "~/services/test";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

export default function HomePage() {
  type GetData = {
    id: number;
    date: string;
    name: string;
    category: string;
    notes: string;
    hours: number;
    comments: string;
  };
  const [gets, setGets] = useState<GetData[]>([]);

  useEffect(() => {
    testGet().then((data: GetData[]) => {
      setGets(data);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <SignedOut>
        <Landing />
      </SignedOut>
      <SignedIn>
        <TopNav />
        {gets
          ? gets.map((get) => {
              return <p>{get.name}</p>;
            })
          : null}
      </SignedIn>
    </main>
  );
}
