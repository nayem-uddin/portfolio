import { Container, Typography } from "@mui/material";
import Headline from "../headline";
import { email } from "@/lib/constants";
import SenderName from "./senderName";
import SenderEmail from "./senderEmail";
import Content from "./content";
import { Button } from "@/components/ui/button";
import { inter } from "@/lib/fonts";

export default function Connect() {
  return (
    <Container maxWidth={`sm`}>
      <Headline title="Express your thought" />
      <Typography variant="subtitle1">
        Send your valuable review, suggestion or proposal.
      </Typography>
      <form action={`mailto:${email}`}>
        <fieldset className="gap-y-4 flex flex-col mt-4">
          <SenderName />
          <SenderEmail />
          <Content />
          <Button type="submit" className={`w-fit bg-blue-500`}>
            <span className={`${inter.className} text-base`}>Send</span>
          </Button>
        </fieldset>
      </form>
    </Container>
  );
}
