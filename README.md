# Sergipanês

Bem-vindo ao Sergipanês, um jogo educativo e divertido que testa seu conhecimento sobre palavras e significados relacionadas a frutas e animais típicos de Sergipe! Neste jogo, você e sua equipe vão responder perguntas e ganhar pontos com base nas suas respostas.

## Requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema. Você também precisará do [Git](https://git-scm.com/) para clonar o repositório.

## Clonando o Repositório

Para obter uma cópia local do projeto, clone o repositório do GitHub com o seguinte comando:

```bash
git clone https://github.com/pepepepu/srgpn.git
```

Substitua `usuario` pelo seu nome de usuário do GitHub, se necessário.

## Instalando Dependências

Navegue até o diretório do projeto e instale as dependências necessárias:

```bash
cd sergipanes
npm install
```

## Executando o Jogo

Para iniciar o jogo, execute o comando:

```bash
npm start
```

O jogo será iniciado em `http://localhost:3000` no seu navegador padrão.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- **src/**: Contém todos os arquivos de código fonte do projeto.
  - **components/**: Componentes reutilizáveis do jogo, como `Button`, `Paragraph`, e `Image`.
  - **context/**: Contexto para gerenciar o estado do jogo, como pontuação e lógica do jogo.
  - **data/**: Dados estáticos, como a lista de perguntas e respostas.
  - **styles/**: Estilos e cores usados no projeto.
  - **pages/**: Páginas do jogo, como `GameTeam01`.
  - **App.tsx**: Componente principal que gerencia a navegação e a renderização do jogo.
- **public/**: Arquivos públicos, como imagens e o arquivo `index.html`.
- **package.json**: Gerenciador de dependências e scripts do projeto.

## Lógica do Jogo

### Objetivo

O objetivo do Sergipanês é responder corretamente às perguntas sobre palavras e significados relacionados a frutas e animais típicos de Sergipe. O jogo é jogado em equipes e a equipe com mais pontos no final vence.

### Funcionamento

1. **Tela Inicial**: Apresenta o nome da equipe e a pergunta atual.
2. **Perguntas**: Cada pergunta possui uma palavra e múltiplas respostas possíveis.
3. **Respostas**: O jogador seleciona uma resposta e, se estiver correta, a equipe ganha um ponto.
4. **Pontuação**: A pontuação da equipe é atualizada e exibida.
5. **Nome da Equipe**: Cada vez que a equipe termina uma pergunta, um novo nome é atribuído aleatoriamente de uma lista de nomes típicos.
6. **Finalização**: Quando todas as perguntas são respondidas, o jogo termina e a pontuação final é exibida.

### Componentes Principais

- **`GameTeam01`**: Componente que gerencia a lógica do jogo, exibe a pergunta atual e os botões de resposta.
- **`Button`**: Componente reutilizável para botões de ação.
- **`Paragraph`**: Componente reutilizável para textos.
- **`Image`**: Componente reutilizável para exibir imagens.

## Contribuindo

Se você quiser contribuir para o projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch para suas alterações (`git checkout -b minha-nova-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Envie suas alterações para o repositório remoto (`git push origin minha-nova-feature`).
5. Crie um Pull Request no GitHub.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
