import { openSans } from "@/lib/fonts";

export default function ProjectTitle({ title }: { title: string | undefined }) {
  return (
    <h1 className={`text-3xl md:text-5xl mt-2 md:mt-5 ${openSans.className}`}>
      {title}
    </h1>
  );
}
