import { RepoLink } from "@/lib/definitions";
import RepoLinksListItem from "./repoLinksListItem";

export default function RepoLinks({ repoLinks }: { repoLinks?: RepoLink }) {
  const { frontEndRepo, backEndRepo } = repoLinks || {};
  return (
    <li>
      <h3 className="inline">GitHub Repository Links</h3>
      <ul className="list-inside ml-5">
        {frontEndRepo && (
          <li>
            <RepoLinksListItem
              href={frontEndRepo}
              label="Frontend Repository"
            />
          </li>
        )}
        {backEndRepo && (
          <li>
            <RepoLinksListItem href={backEndRepo} label="Backend Repository" />
          </li>
        )}
      </ul>
    </li>
  );
}
