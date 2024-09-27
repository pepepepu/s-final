import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div, Paragraph, Button, Image } from "../../components";
import colors from "../../styles/colors";
import questions from "../../data/words";
import { useGame } from "../../context/GameContext";
import getDeviceType from "../../hooks/getDeviceType";

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

  const [showAnswerColors, setShowAnswerColors] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);
  const [countdown, setCountdown] = useState(5);

  const navigate = useNavigate();
  const deviceType = getDeviceType();

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const isCorrect = (answer: string) => answer === currentQuestion.correctAnswer;

  const getAnswerSymbol = (answer: string) => {
    if (showAnswerColors) {
      return isCorrect(answer) ? "✔" : selectedAnswer === answer ? "✘" : "";
    }
    return "";
  };

  useEffect(() => {
    const newTeamName = getRandomTeamName();
    setTeamName(newTeamName);
  }, []);

  const handleNextQuestion = () => {
    setShowAnswerColors(true);
    setIsCounting(true);
    setCountdown(5);

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdownInterval);
      setIsCounting(false);

      if (selectedAnswer === currentQuestion.correctAnswer) {
        setTeam1Score((prevScore) => prevScore + 1);
      }

      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentQuestionIndex(nextIndex);
        setCurrentQuestion(questions[nextIndex]);
        setSelectedAnswer(null);
        setShowAnswerColors(false);
        setTimeLeft(30);
      } else {
        addTeamScore(
          teamName,
          team1Score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0)
        );
        resetTeam1Score();
        navigate("/endgame");
      }
    }, 5000);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }

    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <Div
      width={"100vw"}
      height={"100vh"}
      backgroundColor={colors.blue}
      direction="column"
      justify="center"
    >
      <Div
        width={deviceType === "smartphone" ? ("75%") : (deviceType === "tablet" ? ("85%") : ("90%"))}
        height={deviceType === "smartphone" ? ("") : ("85%")}
        backgroundColor={colors.branco}
        radius={20}
        shadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
        justify={deviceType === "smartphone" ? ("center") : ("space-between")}
        gap={deviceType === "smartphone" ? (20) : (0)}
        padding={deviceType === "smartphone" ? ("35px 30px") : ("20px 30px")}
      >
        <Div
          width={"100%"}
          justify={deviceType === "smartphone" ? ("center") : ("space-between")}
          direction="row"
        >
          {deviceType !== "smartphone" &&
            <Image
              width={deviceType === "tablet" ? ("7%") : ("4.5%")}
              src={require("../../assets/Icons/plants/plant-blue-beige.png")}
              alt="Planta azul e bege"
              animate={true}
            />
          }
          <Div direction="row" gap={15}>
            <Paragraph
              color={colors.preto}
              fontWeight={500}
              fontSize={deviceType === "smartphone" ? (30) : (deviceType === "tablet" ? (40) : (50))}
            >
              Equipe:
            </Paragraph>
            <Paragraph
              color={colors.preto}
              fontWeight={800}
              fontSize={deviceType === "smartphone" ? (30) : (deviceType === "tablet" ? (40) : (50))}
            >
              {teamName}
            </Paragraph>
          </Div>
          {deviceType !== "smartphone" &&
            <Div width={deviceType === "tablet" ? ("7%") : ("4.5%")}>
              <Image
                width={deviceType === "tablet" ? "100%" : "85%"}
                src={require("../../assets/Icons/plants/plant-yellow.png")}
                alt="Planta amarela"
                animate={true}
              >
                {deviceType !== "tablet" &&
                  <Div radius={20} padding={"10px"} backgroundColor={timeLeft <= 10 ? colors.red : colors.yellow}>
                    <Paragraph
                      color={colors.preto}
                      fontWeight={800}
                      fontSize={deviceType === "smartphone" ? (25) : (deviceType === "tablet" ? (15) : (15))}
                    >
                      {timeLeft}s
                    </Paragraph>
                  </Div>
                }
              </Image>
              {deviceType !== "tablet" &&
                <Paragraph
                  width={"100%"}
                  textAlign="center"
                  color={colors.preto}
                  fontSize={10}
                >
                  Tempo restante
                </Paragraph>
              }
            </Div>
          }
        </Div>
        <Div gap={15}>
          <Paragraph
            color={colors.preto}
            fontWeight={400}
            fontSize={deviceType === "smartphone" ? (15) : (deviceType === "tablet" ? (20) : (25))}
          >
            Vocês sabem o que significa
          </Paragraph>
          <Div backgroundColor={colors.cinzaMedio} padding={"4.5% 15%"} radius={20}>
            <Paragraph
              color={colors.preto}
              fontWeight={800}
              fontSize={deviceType === "smartphone" ? (40) : (deviceType === "tablet" ? (65) : (90))}
            >
              {currentQuestion.word}?
            </Paragraph>
          </Div>
        </Div>
        <Div
          width={deviceType === "smartphone" ? ("100%") : (deviceType === "tablet" ? ("85%") : ("40%"))}
          gap={20}
        >
          {currentQuestion.answers.map((answer, index) => (
            <Button
              key={index}
              width={"100%"}
              margin={0}
              borderRadius={30}
              padding={"4.5% 5%"}
              onClick={() => handleAnswer(answer)}
              backgroundColor={
                showAnswerColors
                  ? isCorrect(answer)
                    ? colors.cinzaEscuro // resposta correta
                    : selectedAnswer === answer
                      ? colors.cinzaEscuro // resposta selecionada
                      : colors.branco // outras respostas
                  : selectedAnswer === answer
                    ? colors.darkBlue // resposta selecionada mas resultado não revelado
                    : colors.cinza // respostas não selecionadas
              }
              hoverBackgroundColor={colors.cinzaEscuro}
              boxShadow={
                showAnswerColors || selectedAnswer === answer
                  ? "none"
                  : "2px 2px 10px rgba(0, 0, 0, 0.1123)"
              }
              hoverBoxShadow={
                showAnswerColors || selectedAnswer === answer
                  ? "none"
                  : "4px 4px 15px rgba(0, 0, 0, 0.5)"
              }
              hoverScale={1.05}
              animationDuration="0.4s"
              disabled={showAnswerColors}
            >
              <Div justify="space-between" direction="row" width={"100%"}>
                <Paragraph
                  color={selectedAnswer === answer ? colors.branco : colors.preto}
                  fontWeight={500}
                  fontSize={deviceType === "smartphone" ? 15 : deviceType === "tablet" ? 20 : 25}
                >
                  {answer}
                </Paragraph>
                <Paragraph
                  color={colors.preto}
                  fontWeight={500}
                  fontSize={deviceType === "smartphone" ? 15 : deviceType === "tablet" ? 18 : 23}
                >
                  {getAnswerSymbol(answer)}
                </Paragraph>
              </Div>
            </Button>
          ))}
        </Div>
        {deviceType !== 'desktop' &&
          <Div direction="row">
            <Paragraph color={colors.preto}>
              Tempo restante:
            </Paragraph>
            <Paragraph color={timeLeft <= 10 ? colors.red : colors.preto} fontWeight={800}>
              {timeLeft}s
            </Paragraph>
          </Div>
        }
        <Div
          direction="row"
          justify={deviceType === "smartphone" ? ("center") : ("space-between")}
          width={"100%"}
        >
          {deviceType !== "smartphone" &&
            <Image
              width={deviceType === "tablet" ? ("7.5%") : ("5%")}
              src={require("../../assets/Icons/plants/plant-red-yellow.png")}
              alt="Planta vermelha e amarela"
              animate={true}
            />
          }
          <Button
            margin={"0px 0px 15px 0px"}
            borderRadius={30}
            padding={deviceType === "smartphone" ? ("10px 25px") : (deviceType === "tablet" ? ("15px 25px") : ("20px 25px"))}
            onClick={handleNextQuestion}
            backgroundColor={selectedAnswer ? colors.castanha : colors.cinzaEscuro}
            hoverBackgroundColor="#4d3d1e"
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.3)"
            hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
            hoverScale={1.1}
            animationDuration="0.4s"
            disabled={!selectedAnswer || showAnswerColors}
          >
            <Paragraph
              fontWeight={700}
              fontSize={deviceType === "smartphone" ? (20) : (25)}
            >
              {isCounting ? `${countdown}s` : currentQuestionIndex < questions.length - 1 ? "Próxima" : "Finalizar"}
            </Paragraph>
          </Button>
          {deviceType !== "smartphone" &&
            <Image
              width={deviceType === "tablet" ? ("7.5%") : ("5%")}
              src={require("../../assets/Icons/plants/plant-beige-green.png")}
              alt="Planta bege e verde"
              animate={true}
            />
          }
        </Div>
      </Div>
    </Div>
  );
};

export default GameTeam01;
