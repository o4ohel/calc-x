import styled from "styled-components";

import type { ButtonVariant } from "./components/CalculatorButton";

const StyledCalculator = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  max-width: 375px;
  margin: auto;
`;

const StyledButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(80px, auto);
  padding: 10px;
`;

const StyledButton = styled.button.attrs({
  type: "button",
})<{ variant: ButtonVariant }>`
  background: ${({ theme, variant }) => theme.button.background[variant]};
  border: none;
  border-radius: 50%;
  color: ${({ theme }) => theme.button.color};
  cursor: pointer;
  font-size: 2rem;

  &.span2 {
    border-radius: 4rem;
    grid-column: span 2;
  }
`;

const StyledInput = styled.input.attrs({
  type: "text",
})`
  background: rgb(0, 0, 0);
  border: none;
  box-shadow: none;
  color: ${({ theme }) => theme.color};
  flex-grow: 1;
  width: 100%;
  font-size: 2.5rem;
  text-align: right;
  line-height: 3.5rem;
  padding: 0 30px;
`;

export { StyledButton, StyledButtons, StyledCalculator, StyledInput };
