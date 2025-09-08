import { getProjectDetails } from "@/lib/utils";
import { Props } from "./page";
import { ImageResponse } from "next/og";
import Image from "next/image";

export const alt = "Project Details";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function OGImage({ params }: Props) {
  const { projectTitle } = await params;
  const { cover, title } = getProjectDetails(projectTitle) || {};
  return new ImageResponse(
    (
      <>
        {/* <img src={cover} alt={title} width={1200} height={630} loading="eager" /> */}
        <Image
          src={cover || ""}
          alt={title || ""}
          width={1200}
          height={630}
          loading="eager"
        />
      </>
    )
  );
}
