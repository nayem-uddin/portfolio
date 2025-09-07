import { toggleOptions } from "@/lib/constants/portfolio";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export default function FilterProjects({
  projectType,
  setProjectType,
}: {
  projectType: string;
  setProjectType: Dispatch<SetStateAction<string>>;
}) {
  function handleChange(
    event: React.MouseEvent<HTMLElement>,
    newProjectType: string | null
  ) {
    if (newProjectType !== null) setProjectType(newProjectType);
  }
  return (
    <ToggleButtonGroup
      value={projectType}
      exclusive
      onChange={handleChange}
      className="m-auto mt-3"
      color="primary"
    >
      {toggleOptions.map((option) => (
        <ToggleButton key={option.value} value={option.value}>
          {option.label} ({option.count})
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
