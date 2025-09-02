import { Container, Toolbar } from "@mui/material";
import NavLink from "./navLink";
import { sectionLinks } from "@/lib/constants/links";

export default function WideScreenAppBar() {
  return (
    <Container className="hidden md:block" disableGutters>
      <Toolbar className="justify-end-safe gap-x-5">
        {sectionLinks.map((link) => (
          <NavLink key={link.name} menu={link} />
        ))}
      </Toolbar>
    </Container>
  );
}
