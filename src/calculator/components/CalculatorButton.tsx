import React from "react";
import { StyledButton } from "../Calculator.styled";

type ButtonVariant = "default" | "primary" | "secondary";

interface CalculatorButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}
function CalculatorButton({
  children,
  variant = "default",
  ...rest
}: CalculatorButtonProps) {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
}

export { CalculatorButton };
export type { ButtonVariant };
export default CalculatorButton;
