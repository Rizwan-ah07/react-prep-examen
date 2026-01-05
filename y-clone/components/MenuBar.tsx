// components/MenuBar.tsx (can be a Server Component)
import Link from "next/link";
import { logout } from "@/actions/authActions";

export default function MenuBar() {
  return (
    <nav className="flex gap-4 items-center">
      <Link href="/">Home</Link>

      <form action={logout}>
        <button type="submit" className="underline">
          Logout
        </button>
      </form>
    </nav>
  );
}