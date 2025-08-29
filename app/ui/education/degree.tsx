import { DegreeDetails } from "@/lib/definitions";
import { robotoSlab } from "@/lib/fonts";
import { Step } from "@mui/material";
import Image from "next/image";

export default function Degree({ degree }: { degree: DegreeDetails }) {
  const { label, logo, description } = degree;
  return (
    <Step className="flex gap-x-3 items-center">
      <div className="border-2 border-blue-900 rounded-full p-2 shrink-0">
        <Image src={logo} height={100} width={100} alt={logo} />
      </div>
      <div>
        <p
          className={`font-bold text-lg md:text-3xl ${robotoSlab.className} leading-6`}
        >
          {label}
        </p>
        <p className="text-sm md:text-lg mt-1.5 md:mt-3">{description}</p>
      </div>
    </Step>
  );
}
