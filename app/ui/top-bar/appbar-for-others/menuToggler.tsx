import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";
export default function MenuToggler({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  function handleOpenMenu() {
    setOpen(true);
  }
  return (
    <IconButton onClick={handleOpenMenu}>
      <Menu />
    </IconButton>
  );
}
