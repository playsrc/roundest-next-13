import styled from "styled-components";

interface Props {
  variant?: string;
}

export const MyButton = styled.button<Props>`
  padding: 1rem;
  background-color: ${(props) =>
    props.variant === "dark" ? "lightblue" : "darkblue"};
  color: white;
  border-radius: 16px;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    opacity: 0.7;
  }
`;
