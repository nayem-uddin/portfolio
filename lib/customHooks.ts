"use client";
import { useState } from "react";

export function useDrawerState() {
  const [open, setOpen] = useState<boolean>(false);
  return { open, setOpen };
}

export function useProjectType() {
  const fullStack: string = "fullStack";
  const frontEnd: string = "frontEnd";
  const all: string = "all";
  const [projectType, setProjectType] = useState<string>(all);
  return { projectType, setProjectType, fullStack, frontEnd, all };
}
