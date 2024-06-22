"use client";

import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export function DashboardButton() {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <button type="button" onClick={handleClick}>
      Dashboard
    </button>
  );
}
