"use client";
import { Project } from "@/lib/definitions";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
} from "@mui/material";

import RedirectToRepo from "./repoLink";
import { useDrawerState } from "@/lib/customHooks";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, frontEndRepo, description, cover, backEndRepo } = project;
  const { open, setOpen } = useDrawerState();
  function handleDisplay() {
    setOpen(!open);
  }
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
        <Button
          onClick={handleDisplay}
          className="w-full flex justify-between bg-inherit cursor-pointer"
        >
          <span className="text-base">Project description</span>
          {!open ? <ExpandMore /> : <ExpandLess />}
        </Button>
        <Collapse in={open} className="text-justify mt-2">
          {description}
        </Collapse>
        <RedirectToRepo link={frontEndRepo} direction="front-end" />
        {backEndRepo && (
          <RedirectToRepo link={backEndRepo} direction="backend" />
        )}
      </CardContent>
    </Card>
  );
}
