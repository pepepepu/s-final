import React from "react";
import { Div, Image } from "../../atoms";

interface PlantBoxProps {
  backgroundColor: string;
  imageURL: string;
  totalPlants: number;
}

const PlantBox: React.FC<PlantBoxProps> = ({ backgroundColor, imageURL, totalPlants }) => {
  const width = `${100 / totalPlants}%`;

  return (
    <Div height={"100%"} width={width} backgroundColor={backgroundColor}>
      <Image height={"45%"} src={imageURL} alt="Plant BG" animate={true} />
    </Div>
  );
}

export default PlantBox;
