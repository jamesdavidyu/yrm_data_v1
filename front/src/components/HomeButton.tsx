"use client";

import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export function HomeButton() {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <button type="button" onClick={handleClick}>
      Home
    </button>
  );
}
