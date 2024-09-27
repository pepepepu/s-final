import React, { ReactNode } from "react";
import styled from "styled-components";

// Definição das props que o componente vai receber
interface ButtonProps {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  color?: string;
  fontSize?: string | number;
  fontWeight?: "normal" | "bold" | "lighter" | number;
  borderRadius?: string | number;
  borderColor?: string;
  borderWidth?: string | number;
  padding?: string | number;
  margin?: string | number;
  boxShadow?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  hoverScale?: number;
  disabled?: boolean;
  animationDuration?: string;
  hoverBoxShadow?: string;
}

// Componente estilizado para o botão
const StyledButton = styled.button<ButtonProps>`
  width: ${(props) => (typeof props.width === "number" ? `${props.width}px` : props.width)};
  height: ${(props) => (typeof props.height === "number" ? `${props.height}px` : props.height)};
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.color || "#fff"};
  font-size: ${(props) => (typeof props.fontSize === "number" ? `${props.fontSize}px` : props.fontSize)};
  font-weight: ${(props) => props.fontWeight};
  border-radius: ${(props) =>
    typeof props.borderRadius === "number" ? `${props.borderRadius}px` : props.borderRadius};
  border: ${(props) =>
    props.borderWidth
      ? `${typeof props.borderWidth === "number" ? `${props.borderWidth}px` : props.borderWidth} solid ${props.borderColor}`
      : "none"};
  padding: ${(props) => (typeof props.padding === "number" ? `${props.padding}px` : props.padding)};
  margin: ${(props) => (typeof props.margin === "number" ? `${props.margin}px` : props.margin)};
  box-shadow: ${(props) => props.boxShadow};

  cursor: pointer;
  transition: 
    background-color ${(props) => props.animationDuration || "0.3s"} ease,
    color ${(props) => props.animationDuration || "0.3s"} ease,
    transform ${(props) => props.animationDuration || "0.3s"} ease,
    box-shadow ${(props) => props.animationDuration || "0.3s"} ease;

  &:not(:disabled):hover {
    background-color: ${(props) => props.hoverBackgroundColor || "#0056b3"};
    color: ${(props) => props.hoverColor || "#fff"};
    transform: ${(props) => (props.hoverScale ? `scale(${props.hoverScale})` : "scale(1)")};
    box-shadow: ${(props) => props.hoverBoxShadow || props.boxShadow};
  }

  &:disabled {
    pointer-events: none;
    background-color: ${(props) => props.backgroundColor};
  }
`;

// Contêiner interno do texto
const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

// Componente funcional para o Button
const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      <ButtonContent>
        {children}
      </ButtonContent>
    </StyledButton>
  );
};

export default Button;
