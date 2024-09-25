import React, { ReactNode } from "react";
import styled, { keyframes, css } from "styled-components";

// Definição das props que o componente vai receber
interface ImageProps {
  children?: ReactNode;
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  objectFit?: "fill" | "contain" | "cover" | "scale-down" | "none";
  borderRadius?: string | number;
  boxShadow?: string;
  opacity?: number;
  margin?: string | number;
  padding?: string | number;
  display?: "inline" | "block" | "inline-block";
  position?: "relative" | "absolute" | "fixed" | "sticky";
  textAlign?: "left" | "center" | "right";
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  zIndex?: number;
  animate?: boolean;
}

const rotateSideToSideBrusque = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
`;

// Estilização para o contêiner que envolve a imagem
const ImageContainer = styled.div<
  Pick<
    ImageProps,
    "width" | "height" | "margin" | "padding" | "display" | "textAlign"
  >
>`
  position: relative;
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
  margin: ${(props) =>
    typeof props.margin === "number" ? `${props.margin}px` : props.margin};
  padding: ${(props) =>
    typeof props.padding === "number" ? `${props.padding}px` : props.padding};
  display: ${(props) => props.display || "block"};
  text-align: ${(props) => props.textAlign || "left"};
`;

// Estilização para a imagem em si, com a animação opcional
const StyledImage = styled.img<
  Pick<ImageProps, "objectFit" | "borderRadius" | "boxShadow" | "opacity" | "animate">
>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => props.objectFit || "cover"};
  border-radius: ${(props) =>
    typeof props.borderRadius === "number"
      ? `${props.borderRadius}px`
      : props.borderRadius};
  box-shadow: ${(props) => props.boxShadow};
  opacity: ${(props) => (props.opacity !== undefined ? props.opacity : 1)};

  ${(props) =>
    props.animate &&
    css`
      animation: ${rotateSideToSideBrusque} 0.5s steps(1) infinite;
    `}
`;

// Estilização para o conteúdo que será renderizado sobre a imagem
const ContentOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none; /* Isso garante que o texto não interfira nos eventos de clique */
`;

// Componente funcional para a Imagem
const Imagem: React.FC<ImageProps> = ({ src, alt, children, animate, ...props }) => {
  return (
    <ImageContainer {...props}>
      <StyledImage src={src} alt={alt} animate={animate} {...props} />
      {children && <ContentOverlay>{children}</ContentOverlay>}
    </ImageContainer>
  );
};

export default Imagem;
