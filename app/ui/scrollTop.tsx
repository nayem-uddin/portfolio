import { Fade, useScrollTrigger } from "@mui/material";
import { MouseEvent, ReactNode } from "react";

export default function ScrollTop({ children }: { children: ReactNode }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });
  function handleClick(event: MouseEvent<HTMLDivElement>) {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#top");
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  }
  return (
    <Fade in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className="fixed bottom-5 right-5"
      >
        {children}
      </div>
    </Fade>
  );
}
