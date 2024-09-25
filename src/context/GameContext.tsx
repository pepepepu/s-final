import React, { createContext, useContext, useState } from "react";

type TeamScore = {
  teamName: string;
  points: number;
};

type GameContextType = {
  team1Score: number;
  setTeam1Score: React.Dispatch<React.SetStateAction<number>>;
  teamScores: TeamScore[];
  addTeamScore: (teamName: string, points: number) => void;
  resetTeam1Score: () => void;
  getRandomTeamName: () => string;
  resetScores: () => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [team1Score, setTeam1Score] = useState(0);
  const [teamScores, setTeamScores] = useState<TeamScore[]>([]);
  const [teamNames, setTeamNames] = useState([
    "Mangaba", "Cajueiro", "Pitanga", "Aroeira", "Pau-brasil", "Carnaúba",
    "Juazeiro", "Mandacaru", "Seriguela", "Jenipapo", "Macaúba", "Buriti",
    "Cagaita", "Jacarandá", "Murici", "Cambará", "Umbu", "Ingá"
  ]);

  const getRandomTeamName = () => {
    const randomIndex = Math.floor(Math.random() * teamNames.length);
    const chosenName = teamNames[randomIndex];
    setTeamNames((prevNames) =>
      prevNames.filter((_, index) => index !== randomIndex)
    );
    return chosenName;
  };

  const addTeamScore = (teamName: string, points: number) => {
    setTeamScores((prevScores) => [...prevScores, { teamName, points }]);
  };

  const resetTeam1Score = () => {
    setTeam1Score(0);
  };

  const resetScores = () => {
    setTeamScores([]);
  };

  return (
    <GameContext.Provider
      value={{
        team1Score,
        setTeam1Score,
        teamScores,
        addTeamScore,
        resetScores,
        resetTeam1Score,
        getRandomTeamName,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
