import Image from "next/image";
import { LoginForm } from "./_components/login-form";

export default function LoginPage() {
  return (
    <main className="bg-[#f3f3f0] flex-1 w-full min-h-dvh flex items-center justify-center p-6">
      <section className="flex flex-wrap w-full max-w-190 border border-solid border-hard-gray rounded-[14px] bg-white overflow-hidden">
        <aside className="flex-[1_1_35%] min-w-60 bg-primary-100/40 flex flex-col items-center justify-center gap-5 p-10">
          <Image
            src="/avatar.png"
            alt="Avatar del usuario"
            width={112}
            height={112}
            className="rounded-full"
            priority
          />
          <p className="font-semibold text-center text-lg max-w-40">
            Tus mañanas, bajo control
          </p>
        </aside>

        <section className="flex-[1_1_55%] min-w-75 p-10 flex flex-col gap-6">
          <header className="flex flex-col gap-2">
            <h1 className="font-bold text-primary text-[28px]">
              Bienvenido de nuevo
            </h1>
            <p className="text-sm text-gray-500">
              Inicia sesión para gestionar tus alarmas y retos.
            </p>
          </header>
          <LoginForm />
        </section>
      </section>
    </main>
  );
}
