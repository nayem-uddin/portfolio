import { links } from "@/lib/constants";
import { Container, Toolbar } from "@mui/material";
import NavLink from "./navLink";

export default function WideScreenAppBar() {
  return (
    <Container className="hidden md:block" disableGutters>
      <Toolbar className="justify-end-safe gap-x-5">
        {links.map((link) => (
          <NavLink key={link.name} menu={link} />
        ))}
      </Toolbar>
    </Container>
  );
}
