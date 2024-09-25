import React from "react";
import { Div, Image } from "../../atoms";
import colors from "../../../styles/colors";
import { PlantBox } from "../../molecules";

const P_Beige_Green = require("../../../assets/Icons/plants/plant-beige-green.png");
const P_Blue_Green = require("../../../assets/Icons/plants/plant-blue-beige.png");
const P_Orange_Red = require("../../../assets/Icons/plants/plant-orange-red.png");
const P_Red_Yellow = require("../../../assets/Icons/plants/plant-red-yellow.png");
const P_Red = require("../../../assets/Icons/plants/plant-red.png");
const P_Yellow = require("../../../assets/Icons/plants/plant-yellow.png");

const PlantBoxCarousel = () => {
  return (
    <Div
      width={"100%"}
      height={"12%"}
      backgroundColor={colors.green}
      direction="row"
    >
      <PlantBox backgroundColor={colors.yellow} imageURL={P_Red_Yellow} />
      <PlantBox backgroundColor={colors.orange} imageURL={P_Red} />
      <PlantBox backgroundColor={colors.red} imageURL={P_Orange_Red} />
      <PlantBox backgroundColor={colors.blue} imageURL={P_Blue_Green} />
      <PlantBox backgroundColor={colors.lightBlue} imageURL={P_Yellow} />
      <PlantBox backgroundColor={colors.green} imageURL={P_Beige_Green} />
      <PlantBox backgroundColor={colors.yellow} imageURL={P_Red_Yellow} />
      <PlantBox backgroundColor={colors.orange} imageURL={P_Red} />
      <PlantBox backgroundColor={colors.red} imageURL={P_Orange_Red} />
      <PlantBox backgroundColor={colors.blue} imageURL={P_Blue_Green} />
      <PlantBox backgroundColor={colors.lightBlue} imageURL={P_Yellow} />
    </Div>
  )
}

export default PlantBoxCarousel;