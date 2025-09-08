import SectionContainer from "./sectionContainer";
import SectionHeadline from "./sectionHeadline";
import TechStackList from "./techStackList";

export default function TechStack({ techStack }: { techStack?: string[] }) {
  return (
    <SectionContainer>
      {techStack && techStack.length > 0 && (
        <>
          <SectionHeadline>Tech Stack</SectionHeadline>
          <TechStackList techStackList={techStack} />
        </>
      )}
    </SectionContainer>
  );
}
