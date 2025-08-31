import { NavigationLink } from "@/lib/definitions";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function DrawerMenu({
  menu,
  handleClose,
}: {
  menu: NavigationLink;
  handleClose: VoidFunction;
}) {
  return (
    <ListItem disablePadding>
      <ListItemButton
        href={menu.link}
        aria-label={`Link to ${menu.name} section`}
        onClick={handleClose}
      >
        <ListItemText primary={menu.name} />
      </ListItemButton>
    </ListItem>
  );
}
