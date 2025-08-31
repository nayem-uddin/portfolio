import { lora } from "@/lib/fonts";

export default function Headline({ title }: { title: string }) {
  return <p className={`text-2xl mb-1.5 ${lora.className}`}>{title}</p>;
}
