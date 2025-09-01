import { Card, CardContent } from "@mui/material";
import { ReactNode } from "react";

export default function FaceContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={`absolute size-full ${className} backface-hidden`}>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
