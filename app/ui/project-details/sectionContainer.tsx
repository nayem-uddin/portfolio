export default function SectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mt-5 grid gap-y-2">{children}</div>;
}
