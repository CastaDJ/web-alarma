export function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
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
    </form>
  );
}
