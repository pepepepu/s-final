import React, { forwardRef, ReactNode } from "react";
import styled from "styled-components";

// Definição das props que o componente vai receber
interface StyledProps {
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  backgroundGradient?: string;
  direction?: "row" | "column";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  margin?: string | number;
  padding?: string | number;
  gap?: string | number;
  radius?: string | number;
  borderWidth?: string | number;
  borderColor?: string;
  zIndex?: number;
  shadow?: string;
  children?: ReactNode;
  position?: string;
  overflow?: string;
  whiteSpace?: string;
  scrollBehavior?: string;
  ref?: React.Ref<HTMLDivElement>;
}

// Componente estilizado para uma div
const StyledDiv = styled.div<StyledProps>`
  width: ${(props) => (typeof props.width === "number" ? `${props.width}px` : props.width)};
  height: ${(props) => (typeof props.height === "number" ? `${props.height}px` : props.height)};
  background: ${(props) => props.backgroundGradient || props.backgroundColor}; // Seleciona o gradiente ou cor sólida

  display: flex;
  flex-direction: ${(props) => (props.direction !== undefined ? props.direction : "column")};
  justify-content: ${(props) => (props.justify !== undefined ? props.justify : "center")};
  align-items: ${(props) => (props.align !== undefined ? props.align : "center")};
  flex-wrap: ${(props) => (props.wrap !== undefined ? props.wrap : "nowrap")};

  margin: ${(props) => (props.margin ? (typeof props.margin === "number" ? `${props.margin}px` : props.margin) : "0")};
  padding: ${(props) => (props.padding ? (typeof props.padding === "number" ? `${props.padding}px` : props.padding) : "0")};
  gap: ${(props) => (typeof props.gap === "number" ? `${props.gap}px` : props.gap)};

  border-radius: ${(props) =>
    typeof props.radius === "number" ? `${props.radius}px` : props.radius || "0px"};
  border-style: solid; 
  border-width: ${(props) => (props.borderWidth !== undefined ? props.borderWidth : 0)};
  border-color: ${(props) => props.borderColor || "transparent"};

  z-index: ${(props) => (props.zIndex !== undefined ? props.zIndex : 0)};

  box-shadow: ${(props) => props.shadow || "none"};

  overflow: ${(props) => props.overflow || "visible"};
  white-space: ${(props) => props.whiteSpace || "normal"};
  scroll-behavior: ${(props) => props.scrollBehavior || "auto"};

  transition: background-color 0.3s ease-in-out, width 0.3s ease-in-out;
`;

const Div = forwardRef<HTMLDivElement, StyledProps>(({ children, ...props }, ref) => {
  return (
    <StyledDiv {...props} ref={ref}>
      {children}
    </StyledDiv>
  );
});

export default Div;
