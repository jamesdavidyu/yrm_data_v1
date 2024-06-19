import Link from "next/link";
import LoginButton from "./_components/login_button";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <LoginButton />
    </main>
  );
}
