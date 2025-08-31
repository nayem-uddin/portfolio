import { TextField } from "@mui/material";

export default function SenderName() {
  return (
    <div className="flex flex-wrap gap-2">
      <TextField
        type="text"
        variant="outlined"
        name="firstName"
        label="First name"
      />
      <TextField
        type="text"
        variant="outlined"
        name="lastName"
        label="Last name"
      />
    </div>
  );
}
