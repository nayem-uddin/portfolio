import { qualifications } from "@/lib/constants/education";
import { Stepper } from "@mui/material";
import Degree from "./degree";
import { Connector } from "./connector";

export default function EducationDetails() {
  return (
    <Stepper
      activeStep={qualifications.length - 1}
      orientation="vertical"
      connector={<Connector />}
      className="m-auto w-fit mt-3"
    >
      {qualifications.map((step) => (
        <Degree key={step.label} degree={step} />
      ))}
    </Stepper>
  );
}
