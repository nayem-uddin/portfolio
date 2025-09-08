"use client";
import { Project } from "@/lib/definitions";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import RedirectToDetailsPage from "./detailsPageLink";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, cover } = project;
  return (
    <Card className="w-70 md:w-100 mt-2">
      <CardHeader
        title={title}
        slotProps={{
          title: {
            fontFamily: "sans-serif",
          },
        }}
      />
      <CardMedia
        component={`img`}
        src={cover}
        alt={title}
        className="max-h-50"
      />
      <CardContent>
        <RedirectToDetailsPage link={`/projects/${title}`} />
      </CardContent>
    </Card>
  );
}
