import { SectionLink } from "@/lib/definitions";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function DrawerMenu({
  menu,
  handleClose,
}: {
  menu: SectionLink;
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
