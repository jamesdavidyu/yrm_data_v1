import { UserButton } from "@clerk/nextjs";
import { DashboardButton } from "./DashboardButton";
import { HomeButton } from "./HomeButton";
import "~/styles/globals.css";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div className="container">
        <div className="columns">
          <DashboardButton />
        </div>
        <div className="columns">
          <HomeButton />
        </div>
      </div>

      <div>
        <UserButton />
      </div>
    </nav>
  );
}
