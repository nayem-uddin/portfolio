import { TextField } from "@mui/material";

export default function Content() {
  return (
    <TextField
      multiline
      name="content"
      label="Details"
      placeholder="Your opinion, review or proposal"
      minRows={4}
    />
  );
}
