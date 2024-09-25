import React from "react";
import styled from "styled-components";

// Definição das props que o componente vai receber
interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "text" | "password" | "email" | "number";
  width?: string | number;
  height?: string | number;
  borderColor?: string;
  borderRadius?: string | number;
  padding?: string | number;
  margin?: string | number;
  fontSize?: string | number;
  color?: string;
  backgroundColor?: string;
  boxShadow?: string;
  disabled?: boolean;
}

// Componente estilizado para o input de texto
const StyledInput = styled.input<TextInputProps>`
  width: ${(props) => (typeof props.width === "number" ? `${props.width}px` : props.width)};
  height: ${(props) => (typeof props.height === "number" ? `${props.height}px` : props.height)};
  border: 1px solid ${(props) => props.borderColor || "#ccc"};
  border-radius: ${(props) =>
    typeof props.borderRadius === "number" ? `${props.borderRadius}px` : props.borderRadius};
  padding: ${(props) => (typeof props.padding === "number" ? `${props.padding}px` : props.padding)};
  margin: ${(props) => (typeof props.margin === "number" ? `${props.margin}px` : props.margin)};
  font-size: ${(props) => (typeof props.fontSize === "number" ? `${props.fontSize}px` : props.fontSize)};
  color: ${(props) => props.color || "#000"};
  background-color: ${(props) => props.backgroundColor || "#fff"};
  box-shadow: ${(props) => props.boxShadow};
  outline: none;

  &:disabled {
    background-color: #f2f2f2;
    cursor: not-allowed;
  }
`;

// Componente funcional para o TextInput
const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  ...props
}) => {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default TextInput;
