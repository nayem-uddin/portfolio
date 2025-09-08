import { RepoLink } from "@/lib/definitions";
import RepoLinks from "./repoLinks";
import SectionContainer from "./sectionContainer";
import SectionHeadline from "./sectionHeadline";

export default function Links({ repoLinks }: { repoLinks?: RepoLink }) {
  return (
    <SectionContainer>
      <SectionHeadline>Links</SectionHeadline>
      <div>
        <ol className="list-decimal list-inside">
          <RepoLinks repoLinks={repoLinks} />
        </ol>
      </div>
    </SectionContainer>
  );
}
