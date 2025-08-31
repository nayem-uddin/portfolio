import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function SkillCard({
  logoURL,
  name,
}: {
  logoURL: string;
  name: string;
}) {
  return (
    <Card className="mt-2 h-fit w-35 md:w-45">
      <CardContent>
        <CardMedia
          component={`img`}
          height={40}
          width={40}
          image={logoURL}
          alt={name}
        />
        <Typography
          variant="h5"
          component={`div`}
          align="center"
          sx={{ mt: 1 }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
