import { poppins } from "@/lib/fonts";
export default function SectionHeadline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className={`text-lg md:text-xl ${poppins.className}`}>{children}</h2>
  );
}
