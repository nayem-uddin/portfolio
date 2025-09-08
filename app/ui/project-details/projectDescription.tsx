import SectionContainer from "./sectionContainer";
import SectionHeadline from "./sectionHeadline";

export default function ProjectDescription({
  description,
}: {
  description?: string;
}) {
  return (
    <SectionContainer>
      <SectionHeadline>Description</SectionHeadline>
      <p className="text-justify">{description}</p>
    </SectionContainer>
  );
}
