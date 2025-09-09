import { notoSansMultani } from "@/lib/fonts";

export default function Tech({ children }: { children: React.ReactNode }) {
  return (
    <code
      className={`text-lg md:text-xl lg:text-2xl text-amber-500 ${notoSansMultani.className}`}
    >
      {children}
    </code>
  );
}
