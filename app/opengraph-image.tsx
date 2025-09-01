import { ImageResponse } from "next/og";
import Cover from "./ui/cover/cover";
export const alt = "Nayem's Portfolio";
export const contentType = "image/png";
export default async function Image() {
  return new ImageResponse(<Cover />);
}
