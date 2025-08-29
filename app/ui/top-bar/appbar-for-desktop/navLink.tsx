import { SectionLink } from "@/lib/definitions";
import Link from "next/link";

export default function NavLink({ menu }: { menu: SectionLink }) {
  return (
    <Link
      href={menu.link}
      className="hover:text-cyan-300"
      aria-label={`Link to ${menu.name} section`}
    >
      {menu.name}
    </Link>
  );
}
