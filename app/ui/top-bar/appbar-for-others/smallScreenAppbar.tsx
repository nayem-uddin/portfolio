"use client";
import { Container, Toolbar } from "@mui/material";
import MenuToggler from "./menuToggler";
import { useDrawerState } from "@/lib/customHooks";
import MenuContainer from "./menuContainer";

export default function SmallScreenAppBar() {
  const drawerState = useDrawerState();
  return (
    <Container className="md:hidden">
      <Toolbar disableGutters>
        <MenuToggler setOpen={drawerState.setOpen} />
        <MenuContainer {...drawerState} />
      </Toolbar>
    </Container>
  );
}
