import React, { useState, useEffect } from "react";
import { Div } from "../../atoms";
import colors from "../../../styles/colors";
import { PlantBox } from "../../molecules";
import getDeviceType from "../../../hooks/getDeviceType";

const P_Beige_Green = require("../../../assets/Icons/plants/plant-beige-green.png");
const P_Blue_Green = require("../../../assets/Icons/plants/plant-blue-beige.png");
const P_Orange_Red = require("../../../assets/Icons/plants/plant-orange-red.png");
const P_Red_Yellow = require("../../../assets/Icons/plants/plant-red-yellow.png");
const P_Red = require("../../../assets/Icons/plants/plant-red.png");
const P_Yellow = require("../../../assets/Icons/plants/plant-yellow.png");

// Interface para definir o tipo de planta
interface Plant {
  backgroundColor: string;
  imageURL: string;
}

// Função para embaralhar o array
function shuffleArray(array: Plant[]): Plant[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Função para evitar repetição de plantas adjacentes com o mesmo backgroundColor e imageURL
function ensureNoAdjacentDuplicates(plants: Plant[]): Plant[] {
  let isValid = false;

  while (!isValid) {
    shuffleArray(plants);

    isValid = plants.every((plant, index) => {
      if (index === 0) return true;
      const prevPlant = plants[index - 1];
      return (
        plant.backgroundColor !== prevPlant.backgroundColor ||
        plant.imageURL !== prevPlant.imageURL
      );
    });
  }

  return plants;
}

const PlantBoxCarousel = () => {
  const [numPlants, setNumPlants] = useState(10);
  const [shuffledPlants, setShuffledPlants] = useState<Plant[]>([]);

  useEffect(() => {
    const deviceType = getDeviceType();

    if (deviceType === 'smartphone') {
      setNumPlants(4);
    } else if (deviceType === 'tablet') {
      setNumPlants(8);
    } else {
      setNumPlants(10);
    }
  }, []);

  const plants: Plant[] = [
    { backgroundColor: colors.yellow, imageURL: P_Red_Yellow },
    { backgroundColor: colors.orange, imageURL: P_Red },
    { backgroundColor: colors.red, imageURL: P_Orange_Red },
    { backgroundColor: colors.blue, imageURL: P_Blue_Green },
    { backgroundColor: colors.lightBlue, imageURL: P_Yellow },
    { backgroundColor: colors.green, imageURL: P_Beige_Green },
    { backgroundColor: colors.yellow, imageURL: P_Red_Yellow },
    { backgroundColor: colors.orange, imageURL: P_Red },
    { backgroundColor: colors.red, imageURL: P_Orange_Red },
    { backgroundColor: colors.blue, imageURL: P_Blue_Green },
  ];

  useEffect(() => {
    // Embaralha as plantas e garante que não haverá plantas adjacentes repetidas
    const shuffled = ensureNoAdjacentDuplicates([...plants]);
    setShuffledPlants(shuffled.slice(0, numPlants));
  }, [numPlants]);

  return (
    <Div
      width={"100%"}
      height={"12%"}
      backgroundColor={colors.green}
      direction="row"
    >
      {shuffledPlants.map((plant, index) => (
        <PlantBox
          key={index}
          backgroundColor={plant.backgroundColor}
          imageURL={plant.imageURL}
          totalPlants={numPlants}
        />
      ))}
    </Div>
  );
};

export default PlantBoxCarousel;
