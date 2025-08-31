import { steps } from "@/lib/constants";
import { Stepper } from "@mui/material";
import Degree from "./degree";
import { Connector } from "./connector";

export default function EducationDetails() {
  return (
    <Stepper
      activeStep={steps.length - 1}
      orientation="vertical"
      connector={<Connector />}
      className="m-auto w-fit mt-3"
    >
      {steps.map((step) => (
        <Degree key={step.label} degree={step} />
      ))}
    </Stepper>
  );
}
