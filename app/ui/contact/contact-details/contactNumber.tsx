import { PhoneAndroid } from "@mui/icons-material";
import InfoContainer from "../infoContainer";
import Link from "next/link";
import { phone } from "@/lib/constants/contact";

export default function ContactNumber() {
  return (
    <InfoContainer icon={<PhoneAndroid />}>
      <Link href={`tel:${phone}`}>{phone}</Link>
    </InfoContainer>
  );
}
