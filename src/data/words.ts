type Question = {
  word: string;
  answers: string[];
  correctAnswer: string;
};

const questions: Question[] = [
  {
    word: "GRAVIANA",
    answers: ["a) Saída de praia", "b) Pessoa séria", "c) Frio forte"],
    correctAnswer: "c) Frio forte",
  },
  {
    word: "CALIFON",
    answers: ["a) Pessoa cafona", "b) Sutiã", "c) Óculos"],
    correctAnswer: "b) Sutiã",
  },
  // {
  //   word: "CAMBOEIRO",
  //   answers: ["a) Chuva fraca", "b) Fruta do sertão", "c) Poço artesiano"],
  //   correctAnswer: "a) Chuva fraca",
  // },
  // {
  //   word: "VEIA D'ÁGUA",
  //   answers: ["a) Queda d'água natural", "b) Forte correnteza", "c) Lenda Urbana"],
  //   correctAnswer: "b) Forte correnteza",
  // },
  // {
  //   word: "GINGE",
  //   answers: ["a) Gastura", "b) Gengibre", "c) Animal roedor"],
  //   correctAnswer: "a) Gastura",
  // },
  // {
  //   word: "BANZEIRO",
  //   answers: ["a) Onda forte", "b) Rezador", "c) Banho de chuva"],
  //   correctAnswer: "a) Onda forte",
  // },
  // {
  //   word: "MUSSUCA",
  //   answers: ["a) Inseto", "b) Monte de terra para plantação", "c) Dança de festa junina"],
  //   correctAnswer: "b) Monte de terra para plantação",
  // },
  // {
  //   word: "CAPUCO",
  //   answers: ["a) Sabugo de milho", "b) Tipo de xingamento", "c) Comida típica do interior"],
  //   correctAnswer: "a) Sabugo de milho",
  // },
  // {
  //   word: "MANAÍBA",
  //   answers: ["a) Tribo indígena", "b) Comida à base de mandioca", "c) Muda de mandioca"],
  //   correctAnswer: "c) Muda de mandioca",
  // },
  // {
  //   word: "AGUADOR",
  //   answers: ["a) Aguardente de cana, cachaça", "b) Regador de plantas", "c) Chuveiro"],
  //   correctAnswer: "b) Regador de plantas",
  // },
  // {
  //   word: "PAISANO",
  //   answers: ["a) Cigarro feito à mão", "b) Vigilante", "c) Roupa de frio"],
  //   correctAnswer: "a) Cigarro feito à mão",
  // },
  // {
  //   word: "DENTIQUEIRO",
  //   answers: ["a) Pessoa fofoqueira", "b) Dente do siso", "c) Dentista"],
  //   correctAnswer: "b) Dente do siso",
  // },
  // {
  //   word: "CABELOURO",
  //   answers: ["a) Esponja", "b) Nuca", "c) Papagaio"],
  //   correctAnswer: "b) Nuca",
  // },
  // {
  //   word: "QUISSUNGO",
  //   answers: ["a) Mochila", "b) Lesma", "c) Axila"],
  //   correctAnswer: "c) Axila",
  // },
  // {
  //   word: "MONDONGO",
  //   answers: ["a) Rato", "b) Tornozelo", "c) Útero"],
  //   correctAnswer: "b) Tornozelo",
  // },
  // {
  //   word: "BISNOQUE",
  //   answers: ["a) Arranjo de flores", "b) Motocicleta", "c) Óculos"],
  //   correctAnswer: "c) Óculos",
  // },
  // {
  //   word: "CONTA",
  //   answers: ["a) Calculadora", "b) Pérola", "c) Caderno"],
  //   correctAnswer: "b) Pérola",
  // },
  // {
  //   word: "TAIM",
  //   answers: ["a) Calcinha", "b) Cicatriz", "c) Peixe"],
  //   correctAnswer: "b) Cicatriz",
  // },
  // {
  //   word: "OPILADO",
  //   answers: ["a) Pessoa anêmica", "b) Pessoa que não enxerga", "c) Pessoa feia"],
  //   correctAnswer: "a) Pessoa anêmica",
  // },
  // {
  //   word: "SAMBOQUEIRO",
  //   answers: ["a) Dança folclórica", "b) Pessoa desajeitada", "c) Pequena plantação"],
  //   correctAnswer: "b) Pessoa desajeitada",
  // },
  // {
  //   word: "SARARÁ",
  //   answers: ["a) Mestiço de pele branca", "b) Cabelo crespo", "c) Tipo de pássaro"],
  //   correctAnswer: "a) Mestiço de pele branca",
  // },
  // {
  //   word: "PAQUETE",
  //   answers: ["a) Brinquedo infantil", "b) Tipo de pão", "c) Menstruação"],
  //   correctAnswer: "c) Menstruação",
  // },
  // {
  //   word: "DORDÓI",
  //   answers: ["a) Dor de barriga", "b) Remédio caseiro", "c) Conjutivite"],
  //   correctAnswer: "c) Conjutivite",
  // },
  // {
  //   word: "LAMBEDOR",
  //   answers: ["a) Inseto", "b) Xarope caseiro", "c) Minante"],
  //   correctAnswer: "b) Xarope caseiro",
  // },
  // {
  //   word: "CALOMBREZEIRO",
  //   answers: ["a) Pessoa que faz feitiço", "b) Pessoa muito calorenta", "c) Pessoa velhaca"],
  //   correctAnswer: "a) Pessoa que faz feitiço",
  // },
  // {
  //   word: "MANGUÁ",
  //   answers: ["a) Fruta típica do sertão", "b) Açoite para animais", "c) Tecido para vestido"],
  //   correctAnswer: "b) Açoite para animais",
  // },
  // {
  //   word: "BAÉ",
  //   answers: ["a) Peixe de água salgada", "b) Tipo de porco", "c) Prato típico do interior"],
  //   correctAnswer: "b) Tipo de porco",
  // },
  // {
  //   word: "MUNDÉ",
  //   answers: ["a) Roupa para banho", "b) Armadilha para caça", "c) Fogão à lenha"],
  //   correctAnswer: "b) Armadilha para caça",
  // },
  // {
  //   word: "CANGAMBÁ",
  //   answers: ["a) Gambá", "b) Rede de descanso", "c) Cesto de cipó"],
  //   correctAnswer: "a) Gambá",
  // },
  // {
  //   word: "PUCUMÃ",
  //   answers: ["a) Aranha", "b) Fuligem", "c) Fruta adocicada"],
  //   correctAnswer: "b) Fuligem",
  // },
  // {
  //   word: "CATENGUE",
  //   answers: ["a) Criança desnutrida", "b) Lagartixa", "c) Ave silvestre"],
  //   correctAnswer: "b) Lagartixa",
  // },
  // {
  //   word: "ESCRAMUÇADA",
  //   answers: ["a) Comida sem gosto", "b) Onda forte", "c) Rede de dormir"],
  //   correctAnswer: "a) Comida sem gosto",
  // },
  // {
  //   word: "ARAPUÁ",
  //   answers: ["a) Armadilha para caça", "b) Planta medicinal", "c) Tipo de abelha"],
  //   correctAnswer: "c) Tipo de abelha",
  // },
  // {
  //   word: "MARISCOMBONA",
  //   answers: ["a) Cambalhota", "b) Mariposa", "c) Colmeia"],
  //   correctAnswer: "a) Cambalhota",
  // },
  // {
  //   word: "CASQUINHA",
  //   answers: ["a) Pessoa avarenta", "b) Casa de jogos", "c) Máquina de costura"],
  //   correctAnswer: "a) Pessoa avarenta",
  // },
  // {
  //   word: "CUTÃO",
  //   answers: ["a) Pessoa que deve dinheiro", "b) Tipo de passarinho", "c) Roupa muito velha"],
  //   correctAnswer: "c) Roupa muito velha",
  // },
  // {
  //   word: "TITELA",
  //   answers: ["a) Estômago", "b) Perna", "c) Máquina de costura"],
  //   correctAnswer: "a) Estômago",
  // },
];


export default questions;
