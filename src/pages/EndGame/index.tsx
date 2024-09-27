import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Div, Paragraph, Button, PlantBoxCarousel } from "../../components";
import { useGame } from "../../context/GameContext";
import colors from "../../styles/colors";
import Confetti from "react-confetti";
import getDeviceType from "../../hooks/getDeviceType";

const EndGameScreen: React.FC = () => {
  const { setTeam1Score, teamScores } = useGame();
  const deviceType = getDeviceType();
  const navigate = useNavigate();

  const { state } = useLocation();
  const teamName = state?.teamName || "Equipe Desconhecida";

  const team1 = teamScores.find((team) => team.teamName === teamName);

  const { innerWidth: width, innerHeight: height } = window;

  const handleNavigateResults = () => {
    navigate("/results");
  };

  const handleNavigateNewGame = () => {
    setTeam1Score(0);
    navigate("/gameTeam01");
  };

  return (
    <Div
      width={"100vw"}
      height={"100vh"}
      backgroundColor={colors.branco}
      direction="column"
      justify="space-between"
      gap={deviceType === "smartphone" ? 30 : 40}
    >
      <Confetti width={width} height={height} />
      <PlantBoxCarousel />
      <Div gap={deviceType === "smartphone" ? 30 : 40} width={"100%"}>
        <Div>
          <Paragraph
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
            fontSize={deviceType === "smartphone" ? 45 : 60}
            fontWeight={700}
            margin={0}
            color={colors.preto}
          >
            Fim de jogo
          </Paragraph>
          <Paragraph
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
            fontSize={deviceType === "smartphone" ? 20 : 30}
            fontWeight={400}
            margin={0}
            color={colors.preto}
          >
            Obrigado por participar!
          </Paragraph>
        </Div>
        <Div gap={10}>
          <Paragraph
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
            fontSize={deviceType === "smartphone" ? 25 : 30}
            fontWeight={700}
            color={colors.preto}
          >
            Pontuação da equipe {team1 ? team1.teamName : "Equipe Desconhecida"}:
          </Paragraph>
          <Paragraph
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
            fontSize={deviceType === "smartphone" ? 25 : 40}
            fontWeight={700}
            color={colors.preto}
          >
            {team1 ? team1.points : "Sem pontuação disponível"}
          </Paragraph>
        </Div>
        <Div
          width={"70%"}
          direction={deviceType === "smartphone" ? "column" : "row"}
          gap={deviceType === "smartphone" ? 10 : 30}
        >
          <Button
            width={deviceType === "smartphone" ? "80%" : (deviceType === "tablet" ? "45%" : "20%")}
            margin={0}
            padding={deviceType === "smartphone" ? "10px 0px" : "20px 0px"}
            borderRadius={30}
            onClick={() => handleNavigateNewGame()}
            backgroundColor={colors.castanha}
            hoverBackgroundColor="#4d3d1e"
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
            hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
            hoverScale={1.1}
            animationDuration="0.4s"
          >
            <Paragraph
              fontWeight={700}
              fontSize={deviceType === "smartphone" ? 20 : 25}
            >
              Novo jogo
            </Paragraph>
          </Button>
          <Button
            width={deviceType === "smartphone" ? "80%" : (deviceType === "tablet" ? "45%" : "20%")}
            margin={0}
            padding={deviceType === "smartphone" ? "10px 0px" : "20px 0px"}
            borderRadius={30}
            onClick={() => handleNavigateResults()}
            backgroundColor={colors.castanha}
            hoverBackgroundColor="#4d3d1e"
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
            hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
            hoverScale={1.1}
            animationDuration="0.4s"
          >
            <Paragraph
              fontWeight={700}
              fontSize={deviceType === "smartphone" ? 20 : 25}
            >
              Ver resultados
            </Paragraph>
          </Button>
        </Div>
      </Div>
      <PlantBoxCarousel />
    </Div>
  );
};

export default EndGameScreen;
