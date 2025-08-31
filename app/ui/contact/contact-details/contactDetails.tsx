import ContactNumber from "./contactNumber";
import Headline from "../headline";
import HomeAddress from "./homeAddress";
import EmailAddress from "./mailAddress";
import { Container } from "@mui/material";

export default function ContactDetails() {
  return (
    <Container maxWidth={`sm`}>
      <Headline title="Contact details" />
      <HomeAddress />
      <ContactNumber />
      <EmailAddress />
    </Container>
  );
}
