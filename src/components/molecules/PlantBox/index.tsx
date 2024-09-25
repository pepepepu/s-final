import React from "react";
import { Div, Image } from "../../atoms";

interface PlantBoxProps {
  backgroundColor: string,
  imageURL: string;
}

const PlantBox: React.FC<PlantBoxProps> = ({ backgroundColor, imageURL }) => {
  return (
    <Div height={"100%"} width={"10%"} backgroundColor={backgroundColor} >
      <Image height={"45%"} src={imageURL} alt="Plant BG" animate={true} />
    </Div >
  )
}

export default PlantBox;