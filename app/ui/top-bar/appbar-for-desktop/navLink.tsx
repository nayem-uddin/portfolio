import { SectionLink } from "@/app/lib/definitions";
import Link from "next/link";

export default function NavLink({ menu }: { menu: SectionLink }) {
  return (
    <Link href={menu.link} className="hover:text-cyan-300">
      {menu.name}
    </Link>
  );
}
