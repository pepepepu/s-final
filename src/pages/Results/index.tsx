import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Div, Paragraph, Button } from "../../components";
import { useGame } from "../../context/GameContext";
import colors from "../../styles/colors";

// Animação de queda ajustada para terminar em 100vh
const fallAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  10% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translateY(calc(100vh - 50px)); // 50px é a altura da imagem
    opacity: 0;
  }
`;

// Componente de imagem animada
const FallingImage = styled.img<{ delay: number }>` 
  position: absolute; 
  top: 0; 
  left: ${(props) => `clamp(0vw, ${Math.random() * 100}vw, 90vw)`}; // Limita entre 0vw e 100vw
  width: 50px; 
  height: 50px; 
  animation: ${fallAnimation} 10s ease-in-out infinite; 
  animation-delay: ${(props) => props.delay}s; 
  opacity: 0;
`;

const Results: React.FC = () => {
  const { teamScores, resetScores } = useGame();
  const navigate = useNavigate();
  const [fallingImages, setFallingImages] = useState<number[]>([]);
  const images = [
    require("../../assets/Icons/plants/plant-beige-green.png"),
    require("../../assets/Icons/plants/plant-blue-beige.png"),
    require("../../assets/Icons/plants/plant-red-yellow.png"),
    require("../../assets/Icons/plants/plant-red.png"),
    require("../../assets/Icons/plants/plant-yellow.png"),
  ];

  const handleNavigate = () => {
    navigate("/s-final");
  };

  const handleResetScores = () => {
    resetScores();
  };

  useEffect(() => {
    setFallingImages(Array.from({ length: 25 }, (_, i) => i));
  }, []);

  return (
    <Div
      width={"100vw"}
      height={"100vh"}
      backgroundColor={colors.yellow}
      direction="column"
      justify="center"
      gap={40}
      position="relative"
    >
      {fallingImages.map((_, index) => {
        // Seleciona uma imagem aleatória
        const randomImage = images[Math.floor(Math.random() * images.length)];
        return (
          <FallingImage
            key={index}
            src={randomImage}
            delay={index * 0.5} // Delay para cada imagem
          />
        );
      })}
      <Div width={"50%"} height={"20%"} backgroundColor="#18171771" radius={20}>
        <Paragraph fontSize={60} fontWeight={700}>Resultados</Paragraph>
      </Div>
      <Div width={"50%"} gap={15}>
        {teamScores.length === 0 ? (
          <Div width={"95%"} padding={"20px 20px"} direction="row" backgroundColor={"#18171740"} radius={20}>
            <Paragraph fontSize={25} fontWeight={700} color={colors.preto}>
              Placar vazio
            </Paragraph>
          </Div>
        ) : (
          teamScores
            .sort((a, b) => b.points - a.points)
            .map((teamScore, index) => (
              <Div key={index} width={"95%"} padding={"20px 20px"} direction="row" justify="flex-start" backgroundColor={"#18171740"} radius={20}>
                <Paragraph
                  fontWeight={700}
                  fontSize={20}
                  color={colors.preto}
                  textAlign="left"
                  margin={5}
                >
                  Equipe {teamScore.teamName}:
                </Paragraph>
                <Paragraph
                  fontWeight={400}
                  fontSize={20}
                  color={colors.preto}
                  textAlign="left"
                  margin={5}
                >
                  {teamScore.points} pontos
                </Paragraph>
              </Div>
            ))
        )}
      </Div>
      <Div  width={"70%"} direction="row" gap={25}>
        <Button
          margin={0}
          borderRadius={30}
          padding={"1.5% 4%"}
          onClick={() => handleNavigate()}
          backgroundColor={"#18171790"}
          hoverBackgroundColor="#4d3d1e"
          boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
          hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
          hoverScale={1.1}
          animationDuration="0.4s"
        >
          <Paragraph fontWeight={700} fontSize={25}>
            Voltar para início
          </Paragraph>
        </Button>
        <Button
          margin={0}
          borderRadius={30}
          padding={"1.5% 4%"}
          onClick={() => handleResetScores()}
          backgroundColor={"#18171790"}
          hoverBackgroundColor="#4d3d1e"
          boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
          hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
          hoverScale={1.1}
          animationDuration="0.4s"
          disabled={teamScores.length === 0}
        >
          <Paragraph fontWeight={700} fontSize={25}>
            Zerar placar
          </Paragraph>
        </Button>
      </Div>
    </Div>
  );
};

export default Results;
