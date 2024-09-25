import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div, Paragraph, Button, Image } from "../../components";
import colors from "../../styles/colors";
import questions from "../../data/words";
import { useGame } from "../../context/GameContext";

type Question = {
  word: string;
  answers: string[];
  correctAnswer: string;
};

const GameTeam01: React.FC = () => {
  const { team1Score, setTeam1Score, addTeamScore, resetTeam1Score, getRandomTeamName } =
    useGame();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    questions[0]
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [teamName, setTeamName] = useState("");

  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  useEffect(() => {
    // Definir o nome da equipe ao iniciar uma nova rodada
    const newTeamName = getRandomTeamName();
    setTeamName(newTeamName);
  }, []);

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setTeam1Score((prevScore) => prevScore + 1);
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setCurrentQuestion(questions[nextIndex]);
      setSelectedAnswer(null);
    } else {
      addTeamScore(
        teamName,
        team1Score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)
      );

      resetTeam1Score();
      navigate("/endgame");
    }
  };

  return (
    <Div
      width={"100vw"}
      height={"100vh"}
      backgroundColor={colors.blue}
      direction="column"
      justify="center"
      gap={40}
    >
      <Div
        width={"90%"}
        height={"85%"}
        backgroundColor={colors.branco}
        radius={20}
        shadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
        justify="space-between"
        padding={"20px 30px"}
      >
        <Div
          width={"100%"}
          justify="space-between"
          direction="row"
        >
          <Image
            width={"4.5%"}
            src={require("../../assets/Icons/plants/plant-blue-beige.png")}
            alt="Planta azul e bege"
            animate={true}
          />
          <Div direction="row" gap={15}>
            <Paragraph color={colors.preto} fontWeight={500} fontSize={50}>
              Equipe:
            </Paragraph>
            <Paragraph color={colors.preto} fontWeight={800} fontSize={50}>
              {teamName}
            </Paragraph>
          </Div>
          <Image
            width={"4.75%"}
            src={require("../../assets/Icons/plants/plant-yellow.png")}
            alt="Planta amarela"
            animate={true}
          />
        </Div>
        <Div gap={15}>
          <Paragraph color={colors.preto} fontWeight={400} fontSize={25}>
            Vocês sabem o que significa
          </Paragraph>
          <Div backgroundColor={colors.cinzaMedio} padding={"20px 100px"} radius={20}>
            <Paragraph color={colors.preto} fontWeight={700} fontSize={80}>
              {currentQuestion.word}?
            </Paragraph>
          </Div>
        </Div>
        <Div width={"40%"} gap={20}>
          {currentQuestion.answers.map((answer, index) => (
            <Button
              key={index}
              width={"100%"}
              margin={0}
              borderRadius={30}
              padding={"30px"}
              onClick={() => handleAnswer(answer)}
              backgroundColor={
                selectedAnswer === answer ? colors.darkBlue : colors.cinza
              }
              hoverBackgroundColor={colors.cinzaEscuro}
              boxShadow="2px 2px 10px rgba(0, 0, 0, 0.1123)"
              hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
              hoverScale={1.05}
              animationDuration="0.4s"
            >
              <Paragraph
                width={"95%"}
                color={selectedAnswer === answer ? colors.branco : colors.preto}
                textAlign="left"
                fontWeight={500}
                fontSize={25}
              >
                {answer}
              </Paragraph>
            </Button>
          ))}
        </Div>
        <Div direction="row" justify="space-between" width={"100%"}>
          <Image
            width={"5%"}
            src={require("../../assets/Icons/plants/plant-red-yellow.png")}
            alt="Planta vermelha e amarela"
            animate={true}
          />
          <Button
            margin={"0px 0px 15px 0px"}
            borderRadius={30}
            padding={"30px 50px"}
            onClick={handleNextQuestion}
            backgroundColor={colors.castanha}
            hoverBackgroundColor="#4d3d1e"
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
            hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
            hoverScale={1.1}
            animationDuration="0.4s"
            disabled={!selectedAnswer}
          >
            <Paragraph fontWeight={700} fontSize={25}>
              {currentQuestionIndex < questions.length - 1
                ? "Próxima"
                : "Finalizar"}
            </Paragraph>
          </Button>
          <Image
            width={"5%"}
            src={require("../../assets/Icons/plants/plant-beige-green.png")}
            alt="Planta bege e verde"
            animate={true}
          />
        </Div>
      </Div>
    </Div>
  );
};

export default GameTeam01;
