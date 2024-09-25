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
      backgroundColor={colors.branco}
      direction="column"
      justify="center"
      gap={40}
    >
      <Div width={"100%"} direction="row" justify="space-between">
        <Div padding={"0px 50px"} width={150} />
        <Div gap={10}>
          <Paragraph
            textShadow="2px 2px 4px rgba(0, 0, 0, 0.149)"
            fontSize={60}
            fontWeight={700}
            margin={0}
            color={colors.preto}
          >
            Equipe {teamName}
          </Paragraph>
          <Paragraph
            textShadow="2px 2px 2px rgba(0, 0, 0, 0.149)"
            fontSize={30}
            fontWeight={700}
            margin={0}
            color={colors.preto}
          >
            Vocês sabem o que significa...
          </Paragraph>
        </Div>
        <Div padding={"0px 50px"}>
          <Image
            width={150}
            src={require("../../assets/Images/caju.png")}
            alt="Caju"
          >
            <Paragraph fontWeight={600} fontSize={20}>
              {currentQuestionIndex + 1}/{questions.length}
            </Paragraph>
          </Image>
        </Div>
      </Div>
      <Div
        height={"20%"}
        width={"40%"}
        backgroundColor={colors.cinzaMedio}
        radius={15}
      >
        <Paragraph
          color={colors.preto}
          fontWeight={800}
          fontSize={80}
          margin={0}
          padding={0}
        >
          {currentQuestion.word}?
        </Paragraph>
      </Div>
      <Div width={"40%"} gap={25}>
        {currentQuestion.answers.map((answer, index) => (
          <Button
            key={index}
            width={"100%"}
            margin={0}
            borderRadius={30}
            padding={"40px 30px"}
            onClick={() => handleAnswer(answer)}
            backgroundColor={
              selectedAnswer === answer ? colors.cinzaEscuro : colors.cinza
            }
            hoverBackgroundColor={colors.cinzaEscuro}
            boxShadow="2px 2px 10px rgba(0, 0, 0, 0.1123)"
            hoverBoxShadow="4px 4px 15px rgba(0, 0, 0, 0.5)"
            hoverScale={1.05}
            animationDuration="0.4s"
          >
            <Paragraph
              width={"95%"}
              color={colors.preto}
              textAlign="left"
              fontWeight={700}
              fontSize={25}
            >
              {answer}
            </Paragraph>
          </Button>
        ))}
      </Div>
      <Div>
        <Button
          margin={0}
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
      </Div>
    </Div>
  );
};

export default GameTeam01;
