import { Close } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export default function CloseDrawer({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  function handleClick() {
    setOpen(false);
  }
  return (
    <ListItem dense divider disablePadding>
      <ListItemButton onClick={handleClick} disableGutters>
        <ListItemText primary="Close" sx={{ ml: 5 }} />
        <ListItemIcon>
          <Close fontSize="small" />
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  );
}
