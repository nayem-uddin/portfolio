import { SectionLink } from "@/app/lib/definitions";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function DrawerMenu({ menu }: { menu: SectionLink }) {
  return (
    <ListItem disablePadding>
      <ListItemButton href={menu.link}>
        <ListItemText primary={menu.name} />
      </ListItemButton>
    </ListItem>
  );
}
