import { CardMedia, Typography } from "@mui/material";
import FaceContainer from "./faceContainer";

export default function Front({
  logoURL,
  name,
}: {
  logoURL: string;
  name: string;
}) {
  return (
    <FaceContainer>
      <CardMedia
        component={`img`}
        width={140}
        height={140}
        src={logoURL}
        alt={name}
      />
      <Typography variant="h5" component={`div`} align="center" sx={{ mt: 1 }}>
        {name}
      </Typography>
    </FaceContainer>
  );
}
