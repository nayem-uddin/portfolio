import Link from "next/link";

export default function RepoLinksListItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <span className={`text-sm before:content-['-_'] before:mr-1`}>
      <Link href={href} target="_blank">
        <span className="text-blue-300 after:content-['_↗']">{label}</span>
      </Link>
    </span>
  );
}
