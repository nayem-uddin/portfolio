import { Box, Drawer, List } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import CloseDrawer from "./menu-container-items/closeDrawer";
import { sectionLinks } from "@/lib/constants/links";
import DrawerMenu from "./menu-container-items/drawerMenu";

export default function MenuContainer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  function handleClose() {
    setOpen(false);
  }
  return (
    <Drawer open={open} onClose={handleClose}>
      <Box sx={{ width: "150px" }}>
        <List disablePadding>
          <CloseDrawer setOpen={setOpen} />
          {sectionLinks.map((menu) => (
            <DrawerMenu key={menu.name} menu={menu} handleClose={handleClose} />
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
