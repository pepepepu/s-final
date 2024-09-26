import React from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../styles/colors";
import { Button, Div, Paragraph, Image, PlantBox, PlantBoxCarousel } from "../../components";
import getDeviceType from "../../hooks/getDeviceType";

const Access: React.FC = () => {
  const navigate = useNavigate();
  const deviceType = getDeviceType();

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
      backgroundColor={colors.blue}
      justify="space-between"
    >
      <PlantBoxCarousel />
      <Div
        width={"100%"}
        height={"50%"}
        gap={35}
      >
        <Div>
          <Image
            width={deviceType === "smartphone" ? 150 : (deviceType === "tablet" ? 175 : 200)}
            src={require("../../assets/Icons/icone-srgpn.png")}
            alt="Logo"
          />
          <Paragraph
            textShadow="2px 2px 2px rgba(0, 0, 0, 0.149)"
            fontSize={deviceType === "smartphone" ? "40px" : (deviceType === "tablet" ? "55px" : "60px")}
            fontWeight={700}
            color={colors.preto}
          >
            Sergipanês
          </Paragraph>
        </Div>
        <Div
          direction={deviceType === "smartphone" ? "column" : "row"}
          width={"80%"}
          height={"20%"}
          gap={deviceType === "smartphone" ? 10 : 20}
        >
          <Button
            width={deviceType === "smartphone" ? "80%" : (deviceType === "tablet" ? "50%" : "20%")}
            margin={0}
            padding={deviceType === "smartphone" ? "15px 0px" : "20px 0px"}
            borderRadius={30}
            onClick={() => handleNavigate()}
            backgroundColor={colors.green}
            hoverBackgroundColor={"#76ac35"}
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
            hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
            hoverScale={1.1}
            animationDuration="0.9s"
          >
            <Paragraph
              fontSize={deviceType === "smartphone" ? 20 : 25}
              fontFamily="Neulis"
              fontWeight={500}
              color={"#2C1F26"}
            >
              Iniciar partida
            </Paragraph>
          </Button>
          <Button
            width={deviceType === "smartphone" ? "80%" : (deviceType === "tablet" ? "45%" : "20%")}
            margin={0}
            padding={deviceType === "smartphone" ? "15px 0px" : "20px 0px"}
            borderRadius={30}
            onClick={() => handleNavigateResults()}
            backgroundColor={colors.red}
            hoverBackgroundColor={"#bb271c"}
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
            hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
            hoverScale={1.1}
            animationDuration="0.9s"
          >
            <Paragraph
              fontSize={deviceType === "smartphone" ? 20 : 25}
              fontFamily="Neulis"
              fontWeight={500}
              color="#f5f7cd"
            >
              Ver placar
            </Paragraph>
          </Button>
        </Div>
      </Div>
      <PlantBoxCarousel />
    </Div >
  );
};

export default Access;
