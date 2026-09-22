"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export function Navbar() {
  const [first] = useSelectedLayoutSegments();

  return (
    <nav className="flex gap-7 text-sm font-medium items-center">
      <Link href="/" className={`${!first ? "text-primary font-bold" : ""}`}>
        Alarmas
      </Link>
      <Link
        href="/history"
        className={`${first === "history" ? "text-primary font-bold" : ""}`}
      >
        Historial
      </Link>
      <Link
        href="/games"
        className={`${first === "games" ? "text-primary font-bold" : ""}`}
      >
        Juegos
      </Link>
      <Image src="/avatar.png" alt="Description" width={34} height={34} />
    </nav>
  );
}
