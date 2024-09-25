import React, { ReactNode } from "react";
import styled from "styled-components";
import colors from "../../../styles/colors";
import { GlobalStyle } from "../../../styles/GlobalStyles";

// Definição das props que o componente vai receber
interface TextProps {
  width?: string | number;
  fontSize?: string | number;
  fontFamily?: string;
  fontWeight?: "normal" | "bold" | "lighter" | number;
  color?: string;
  hoverColor?: string; // Nova prop para a cor no hover
  hoverFontSize?: string | number; // Nova prop para o tamanho da fonte no hover
  hoverFontWeight?: "normal" | "bold" | "lighter" | number; // Nova prop para o peso da fonte no hover
  textAlign?: "left" | "right" | "center" | "justify";
  lineHeight?: string | number;
  letterSpacing?: string | number;
  textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  textDecoration?: "none" | "underline" | "line-through" | "overline";
  textShadow?: string;  // Nova prop para sombra do texto
  margin?: string | number;
  padding?: string | number;
  children?: ReactNode;
}

// Componente estilizado para um parágrafo
const StyledText = styled.p<TextProps>`
  width: ${(props) => (typeof props.width === "number" ? `${props.width}px` : props.width)};
  font-size: ${(props) => (typeof props.fontSize === "number" ? `${props.fontSize}px` : props.fontSize)};
  font-family: "Neulis";  // Aplica a fonte passada na prop
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color || colors.branco};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => (typeof props.lineHeight === "number" ? `${props.lineHeight}px` : props.lineHeight)};
  letter-spacing: ${(props) => (typeof props.letterSpacing === "number" ? `${props.letterSpacing}px` : props.letterSpacing)};
  text-transform: ${(props) => props.textTransform};
  text-decoration: ${(props) => props.textDecoration};
  text-shadow: ${(props) => props.textShadow};
  margin: ${(props) => (props.margin ? (typeof props.margin === "number" ? `${props.margin}px` : props.margin) : "0")};
  padding: ${(props) => (props.padding ? (typeof props.padding === "number" ? `${props.padding}px` : props.padding) : "0")};

  
  // Efeitos de hover
  transition: color 0.3s ease, font-size 0.3s ease, font-weight 0.3s ease;  // Transição suave para os estilos
  &:hover {
    color: ${(props) => props.hoverColor || props.color};  // Aplica a cor no hover
    font-size: ${(props) =>
    typeof props.hoverFontSize === "number" ? `${props.hoverFontSize}px` : props.hoverFontSize || props.fontSize};  // Aplica o tamanho da fonte no hover
    font-weight: ${(props) => props.hoverFontWeight || props.fontWeight};  // Aplica o peso da fonte no hover
  }
`;

// Componente funcional para o texto
const Text: React.FC<TextProps> = ({ children, ...props }) => {
  return (
    <>
      <GlobalStyle />
      <StyledText {...props}>
        {children}
      </StyledText>
    </>
  );
};

export default Text;
