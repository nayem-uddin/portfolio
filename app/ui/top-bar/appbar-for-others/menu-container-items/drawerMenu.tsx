import { SectionLink } from "@/lib/definitions";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function DrawerMenu({ menu }: { menu: SectionLink }) {
  return (
    <ListItem disablePadding>
      <ListItemButton
        href={menu.link}
        aria-label={`Link to ${menu.name} section`}
      >
        <ListItemText primary={menu.name} />
      </ListItemButton>
    </ListItem>
  );
}
