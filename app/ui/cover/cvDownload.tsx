import { Button } from "@/components/ui/button";
import { Download } from "@mui/icons-material";
import Link from "next/link";

export default function CVDownload() {
  return (
    <Button
      className="bg-blue-500 cursor-pointer hover:bg-blue-700 md:py-6 text-inherit"
      asChild
    >
      <Link download={true} href="/CV_Nayem_Uddin_Biswas.pdf">
        <span>
          <Download />
        </span>
        <span className="text-xs md:text-base">Download my CV</span>
      </Link>
    </Button>
  );
}
