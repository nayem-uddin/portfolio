import { Email } from "@mui/icons-material";
import InfoContainer from "../infoContainer";
import Link from "next/link";
import { email } from "@/lib/constants";

export default function EmailAddress() {
  return (
    <InfoContainer icon={<Email />}>
      <Link href={`mailto:${email}`}>{email}</Link>
    </InfoContainer>
  );
}
