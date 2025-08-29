import { AppBar } from "@mui/material";
import SmallScreenAppBar from "./appbar-for-others/smallScreenAppbar";
import ElevationScroll from "./elevationScroll";
import WideScreenAppBar from "./appbar-for-desktop/wideScreenAppBar";

export default function Menubar() {
  return (
    <ElevationScroll>
      <AppBar color="transparent" position="static">
        <SmallScreenAppBar />
        <WideScreenAppBar />
      </AppBar>
    </ElevationScroll>
  );
}
