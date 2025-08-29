"use client";
import { useState } from "react";

export function useDrawerState() {
  const [open, setOpen] = useState<boolean>(false);
  return { open, setOpen };
}
