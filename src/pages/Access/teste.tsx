import React from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../styles/colors";
import { Button, Div, Paragraph, Image, PlantBox } from "../../components";

const border = require("../../assets/Images/background-base.png")

const Access: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/gameTeam01");
  };

  const handleNavigateResults = () => {
    navigate("/results");
  };

  return (
    <Div
      width={"100vw"}
      height={"100vh"}
      backgroundColor="#5397DF"
      shadow="0px 10px 20px rgba(255, 255, 255, 0.1), 0px 6px 6px rgba(0, 0, 0, 0.5)"
      gap={50}
    >
      <Image
        width={1097 * 0.4}
        height={433 * 0.4}
        src={require("../../assets/Images/logo-vertical.png")}
        alt="Logo"
      />
      <Div
        direction="row"
        width={"50%"}
        gap={25}
      >
        <Button
          margin={0}
          borderRadius={30}
          padding={"30px 50px"}
          onClick={() => handleNavigate()}
          backgroundColor={"#88BA4B"}
          boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
          hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
          hoverScale={1.1}
          animationDuration="0.9s"
        >
          <Paragraph
            fontSize={25}
            fontFamily="Neulis"
            fontWeight={500}
            color="#2C1F26"
          >
            Iniciar partida
          </Paragraph>
        </Button>
        <PlantBox backgroundColor="#D44237" imageURL={require("../../assets/Icons/plants/plant-beige-green.png")} />
        <Button
          margin={0}
          borderRadius={30}
          padding={"30px 50px"}
          onClick={() => handleNavigate()}
          backgroundColor={"#D44237"}
          boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
          hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
          hoverScale={1.1}
          animationDuration="0.9s"
        >
          <Paragraph
            fontSize={25}
            fontFamily="Neulis"
            fontWeight={500}
            color="#FCFFCB"
          >
            Ver placar
          </Paragraph>
        </Button>
      </Div>

    </Div>
  );
};

export default Access;
