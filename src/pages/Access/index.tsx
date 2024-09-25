import React from "react";
import { useNavigate } from "react-router-dom";
import colors from "../../styles/colors";
import { Button, Div, Paragraph, Image, PlantBox, PlantBoxCarousel } from "../../components";

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
            width={200}
            src={require("../../assets/Icons/icone-srgpn.png")}
            alt="Logo"
          />
          <Paragraph textShadow="2px 2px 2px rgba(0, 0, 0, 0.149)" fontSize={60} fontWeight={700} color={colors.preto}>
            Sergipanês
          </Paragraph>
        </Div>
        <Div
          direction="row"
          width={"50%"}
          gap={40}
        >
          <Button
            margin={0}
            borderRadius={30}
            padding={"30px 50px"}
            onClick={() => handleNavigate()}
            backgroundColor={colors.green}
            hoverBackgroundColor={"#76ac35"}
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
            hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
            hoverScale={1.1}
            animationDuration="0.9s"
          >
            <Paragraph
              fontSize={25}
              fontFamily="Neulis"
              fontWeight={500}
              color={"#2C1F26"}
            >
              Iniciar partida
            </Paragraph>
          </Button>

          <Button
            margin={0}
            borderRadius={30}
            padding={"30px 50px"}
            onClick={() => handleNavigateResults()}
            backgroundColor={colors.red}
            hoverBackgroundColor={"#bb271c"}
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
            hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
            hoverScale={1.1}
            animationDuration="0.9s"
          >
            <Paragraph
              fontSize={25}
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
