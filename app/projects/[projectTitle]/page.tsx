import CoverImage from "@/app/ui/project-details/coverImage";
import Links from "@/app/ui/project-details/links";
import ProjectDescription from "@/app/ui/project-details/projectDescription";
import ProjectTitle from "@/app/ui/project-details/projectTitle";
import TechStack from "@/app/ui/project-details/techStack";
import { getProjectDetails } from "@/lib/utils";
import { Metadata } from "next";

export type Props = {
  params: Promise<{ projectTitle: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { projectTitle } = await params;
  const { title, description, cover } = getProjectDetails(projectTitle) || {};
  return {
    title,
    description,
    metadataBase: new URL(process.env.DEPLOY_URL || "http://localhost:3000"),
    openGraph: {
      images: cover ? cover : undefined,
    },
  };
}

export default async function Page({ params }: Props) {
  const { projectTitle } = await params;
  const { title, cover, description, techStack, repoLinks } =
    getProjectDetails(projectTitle) || {};
  return (
    <div className="max-w-[90%] md:max-w-4/5 m-auto">
      <ProjectTitle title={title} />
      <CoverImage cover={cover} />
      <ProjectDescription description={description} />
      <TechStack techStack={techStack} />
      <Links repoLinks={repoLinks} />
    </div>
  );
}
