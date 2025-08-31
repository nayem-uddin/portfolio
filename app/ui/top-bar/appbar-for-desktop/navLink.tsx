import { NavigationLink } from "@/lib/definitions";
import Link from "next/link";

export default function NavLink({ menu }: { menu: NavigationLink }) {
  return (
    <Link
      href={menu.link}
      className="hover:text-cyan-300"
      aria-label={`Link to ${menu.name} section`}
      prefetch
    >
      {menu.name}
    </Link>
  );
}
