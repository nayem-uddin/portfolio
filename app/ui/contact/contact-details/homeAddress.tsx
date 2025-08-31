import { Place } from "@mui/icons-material";
import InfoContainer from "../infoContainer";

export default function HomeAddress() {
  return (
    <InfoContainer icon={<Place />}>
      <address>Narayanganj, Bangladesh</address>
    </InfoContainer>
  );
}
