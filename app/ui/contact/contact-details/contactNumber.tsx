import { PhoneAndroid } from "@mui/icons-material";
import InfoContainer from "../infoContainer";
import Link from "next/link";

export default function ContactNumber() {
  return (
    <InfoContainer icon={<PhoneAndroid />}>
      <Link href={`tel:+8801891852699`}>+880 1891 852699</Link>
    </InfoContainer>
  );
}
