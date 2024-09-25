import { createGlobalStyle } from "styled-components";

// Importações das fontes
import BlackFont from "../assets/Fonts/Neulis/Neulis-Black.ttf";
import BlackItalicFont from "../assets/Fonts/Neulis/Neulis-BlackItalic.ttf";
import BoldFont from "../assets/Fonts/Neulis/Neulis-Bold.ttf";
import BoldItalicFont from "../assets/Fonts/Neulis/Neulis-BoldItalic.ttf";
import ExtraBoldFont from "../assets/Fonts/Neulis/Neulis-ExtraBold.ttf";
import ExtraBoldItalicFont from "../assets/Fonts/Neulis/Neulis-ExtraBoldItalic.ttf";
import ExtraLightFont from "../assets/Fonts/Neulis/Neulis-ExtraLight.ttf";
import ExtraLightItalicFont from "../assets/Fonts/Neulis/Neulis-ExtraLightItalic.ttf";
import LightFont from "../assets/Fonts/Neulis/Neulis-Light.ttf";
import LightItalicFont from "../assets/Fonts/Neulis/Neulis-LightItalic.ttf";
import MediumFont from "../assets/Fonts/Neulis/Neulis-Medium.ttf";
import MediumItalicFont from "../assets/Fonts/Neulis/Neulis-MediumItalic.ttf";
import RegularFont from "../assets/Fonts/Neulis/Neulis-Regular.ttf";
import SemiBoldFont from "../assets/Fonts/Neulis/Neulis-SemiBold.ttf";
import SemiBoldItalicFont from "../assets/Fonts/Neulis/Neulis-SemiBoldItalic.ttf";
import ThinFont from "../assets/Fonts/Neulis/Neulis-Thin.ttf";
import ThinItalicFont from "../assets/Fonts/Neulis/Neulis-ThinItalic.ttf";

// Definição das fontes com @font-face
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Neulis";
    src: url(${BlackFont}) format("truetype");
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${BlackItalicFont}) format("truetype");
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${BoldFont}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${BoldItalicFont}) format("truetype");
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${ExtraBoldFont}) format("truetype");
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${ExtraBoldItalicFont}) format("truetype");
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${ExtraLightFont}) format("truetype");
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${ExtraLightItalicFont}) format("truetype");
    font-weight: 200;
    font-style: italic;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${LightFont}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${LightItalicFont}) format("truetype");
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${MediumFont}) format("truetype");
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${MediumItalicFont}) format("truetype");
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${RegularFont}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${SemiBoldFont}) format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${SemiBoldItalicFont}) format("truetype");
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${ThinFont}) format("truetype");
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: "Neulis";
    src: url(${ThinItalicFont}) format("truetype");
    font-weight: 100;
    font-style: italic;
  }
`;

