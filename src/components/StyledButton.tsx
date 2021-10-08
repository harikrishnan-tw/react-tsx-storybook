import { Button } from "@mui/material";
import styled from "styled-components";

export interface StyledButtonProps {
  buttonType: string;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  // when you have to override default material styled follow the below approach
  && {
    background-color: ${(props) =>
      props.buttonType === "primary"
        ? "blue"
        : props.buttonType === "secondary"
        ? "green"
        : "red"};
  }
`;
