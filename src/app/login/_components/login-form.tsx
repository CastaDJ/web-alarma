"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";

export function LoginForm() {
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5 text-xs font-bold">
        Correo electrónico
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="nombre@correo.com"
          className="bg-[#EFEFEC] border border-solid border-hard-gray rounded-lg px-3.5 py-2.5 text-sm font-normal outline-primary"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-xs font-bold">
        Contraseña
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          placeholder="••••••••"
          className="bg-[#EFEFEC] border border-solid border-hard-gray rounded-lg px-3.5 py-2.5 text-sm font-normal outline-primary"
        />
      </label>

      <Link
        href="/login"
        className="text-xs text-primary self-end hover:underline"
      >
        ¿Olvidaste tu contraseña?
      </Link>

      <button
        type="submit"
        className="font-bold text-sm bg-primary text-white py-3 px-5.5 rounded-[14px] w-full cursor-pointer hover:bg-primary-200 active:bg-primary-200"
      >
        Iniciar sesión
      </button>

      <p className="text-xs text-gray-500">
        ¿No tienes cuenta?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Crear cuenta
        </Link>
      </p>
    </form>
  );
}
