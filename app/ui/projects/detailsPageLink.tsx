import { Button } from "@/components/ui/button";
import { notoSerif } from "@/lib/fonts";
import { ArrowForward } from "@mui/icons-material";
import Link from "next/link";

export default function RedirectToDetailsPage({ link }: { link: string }) {
  return (
    <Button
      asChild
      variant={`link`}
      className={`text-emerald-400 ${notoSerif.className} text-base text-wrap`}
    >
      <Link href={link} prefetch target="_blank">
        View project details
        <ArrowForward fontSize="small" />
      </Link>
    </Button>
  );
}
