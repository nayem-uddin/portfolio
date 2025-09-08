import TechStackItem from "./techStackItem";

export default function TechStackList({
  techStackList,
}: {
  techStackList: string[];
}) {
  return (
    <ul className="list-disc list-inside">
      {techStackList.map((tech) => (
        <TechStackItem key={tech} techStack={tech} />
      ))}
    </ul>
  );
}
