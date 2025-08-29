import { styled } from "@mui/material/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

export const Connector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.vertical}`]: {
    marginLeft: 60,
  },
  [`& .${stepConnectorClasses.line}`]: {
    minHeight: 50,
    borderLeftWidth: 2,
    borderColor: theme.palette.primary.main,
  },
  [`&:first-of-type .${stepConnectorClasses.line}`]: {
    display: "none",
  },
}));
