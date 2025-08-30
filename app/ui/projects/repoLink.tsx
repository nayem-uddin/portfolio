import { Button } from "@/components/ui/button";
import { notoSerif } from "@/lib/fonts";
import Link from "next/link";

export default function RedirectToRepo({
  link,
  direction,
}: {
  link: string;
  direction: string;
}) {
  return (
    <Button
      asChild
      variant={`link`}
      className={`text-emerald-400 ${notoSerif.className} text-[0.9rem] text-wrap`}
    >
      <Link href={link} target="_blank">
        View {direction} GitHub repo
      </Link>
    </Button>
  );
}
