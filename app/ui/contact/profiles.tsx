import Link from "next/link";
import Headline from "./headline";
import { Container } from "@mui/material";
import { profiles } from "@/lib/constants/links";

export default function Profiles() {
  return (
    <Container maxWidth={`sm`}>
      <Headline title="Profiles" />
      {profiles.map((profile) => (
        <p key={profile.name} className="mt-1">
          <Link
            href={profile.link}
            className="underline underline-offset-3"
            target="_blank"
          >
            {profile.name}
          </Link>
        </p>
      ))}
    </Container>
  );
}
