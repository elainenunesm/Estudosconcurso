'use strict';

/**
 * AULA-1.MJS — Aula 1: Aprenda o que é o verbo
 * Gerado pelo Construtor de Aulas (aba "Conteúdo da aula").
 */
window.AULA_DATA = {
  id:     1,
  modulo: "Português",
  titulo: "Aula 1: Aprenda o que é o verbo",

  // Ordem das telas na sequência de estudo — definida em "Estrutura das telas".
  ordem: [
  "antesComecar",
  "exemplo0",
  "exemplo1",
  "exemplo2",
  "exemplo3",
  "exemplo4",
  "exemplo5",
  "checagem0",
  "checagem1",
  "checagem2",
  "resumo",
  "licao"
],

  antesComecar: {
  titulo: "Aprenda o que é o verbo",
  descricao: "Nesta aula você vai dar o primeiro passo para entender a estrutura das frases.",
  aprender: "Nesta aula você aprenderá a identificar o verbo em frases simples.",
  importancia: "Saber identificar o verbo ajuda a compreender a frase e facilita encontrar o sujeito.",
  tituloDestaque: [],
  descricaoDestaque: [],
  tituloNegrito: true,
  aprenderDestaque: [],
  tituloAlinhamento: "esquerda",
  descricaoAlinhamento: "centro",
  importanciaDestaque: []
},

  exemplo: [
  {
    tipo: "pergunta",
    texto: "Verbo é a palavra que expressa ação, estado, mudança de estado ou fenômeno da natureza.",
    conclusao: "",
    obs: "",
    pontos: [],
    textoDestaque: [
      6,
      8,
      10,
      11,
      12,
      14,
      15,
      16
    ],
    textoAlinhamento: "centro",
    textoNegrito: true
  },
  {
    tipo: "busca",
    texto: "Ao ler uma frase ou texto, uma das primeiras coisas que devemos procurar é o verbo, pois é ele quem dá movimento e sentido à oração.",
    conclusao: "",
    obs: "Oração é toda frase que possui um verbo.",
    pontos: [],
    textoDestaque: [
      16
    ],
    obsDestaque: [
      7
    ],
    conclusaoDestaque: [],
    obsNegrito: true
  },
  {
    tipo: "acao",
    texto: "Por exemplo, ao ouvir a palavra correr, imaginamos alguém se movimentando rapidamente de um lugar para outro.",
    conclusao: "",
    obs: "Isso representa uma ação.",
    pontos: [],
    textoDestaque: [
      7
    ],
    obsDestaque: [
      3
    ],
    obsNegrito: true
  },
  {
    tipo: "estado",
    texto: "Ao ouvir a palavra estou, imaginamos alguém que permanece de uma determinada forma e não ouve mudança.",
    conclusao: "",
    obs: "Isso representa um estado.",
    pontos: [],
    textoDestaque: [
      4,
      15,
      16,
      17
    ],
    obsDestaque: [
      3
    ],
    obsNegrito: true
  },
  {
    tipo: "mudanca",
    texto: "Ao ouvir a palavra ficou, imaginamos alguém que alterou o seu estado original.",
    conclusao: "",
    obs: "Isso representa uma mudança de estado.",
    pontos: [],
    textoDestaque: [
      4
    ],
    obsDestaque: [
      3,
      4,
      5
    ],
    obsNegrito: true
  },
  {
    tipo: "fenomeno",
    texto: "Ao ouvir a palavra amanheceu, imaginamos um fenômeno que independe de ação humana, simplesmente acontece.",
    conclusao: "",
    obs: "Isso representa um fenômeno da natureza.",
    pontos: [],
    textoDestaque: [
      4
    ],
    obsDestaque: [
      3,
      4,
      5
    ],
    obsNegrito: true
  }
],

  checagem: [
  {
    titulo: "O que é um verbo?",
    correta: 1,
    feedbackCorreto: "Correto!\n\nVerbo é a palavra que expressa ação, estado, mudança de estado ou fenômeno da natureza — como vimos em \"correr\", \"Estou\", \"Ficou\" e \"Amanheceu\".",
    feedbackErrado: "Incorreto.\n\nVerbo é a palavra que expressa ação, estado, mudança de estado ou fenômeno da natureza — como vimos em \"correr\", \"Estou\", \"Ficou\" e \"Amanheceu\".\nAlternativa B é a correta.",
    opcoes: [
      "A palavra que dá nome as pessoas, lugares ou coisas.",
      "A palavra que expressa ação, estado, mudança de estado ou fenomeno da natureza.",
      "A palavra que qualifica o substantivo, indica uma característica.",
      "A palavra que substitui o substantivo na frase."
    ],
    opcoesNegrito: [
      false,
      false
    ],
    opcoesItalico: [
      false,
      false
    ],
    opcoesDestaque: [
      [],
      [],
      [],
      []
    ],
    dificuldade: "Fácil",
    subtituloDestaque: [],
    tituloDestaque: [],
    tituloNegrito: true,
    subtitulo: "Escolha a definição correta.",
    subtituloNegrito: true,
    invertido: true
  },
  {
    titulo: "\"O cachorro correu pelo jardim.\"",
    correta: 0,
    feedbackCorreto: "Correto!\n\"Correu\" indica uma ação — um movimento realizado pelo cachorro.",
    feedbackErrado: "Incorreto.\n\"Correu\" indica uma ação — um movimento realizado pelo cachorro.\nAlternativa A é a correta.",
    opcoes: [
      "Ação.",
      "Fenomeno da natureza.",
      "Estado.",
      "Mudança de estado."
    ],
    opcoesNegrito: [
      false,
      false
    ],
    opcoesItalico: [
      false,
      false
    ],
    opcoesDestaque: [
      [],
      [],
      [],
      []
    ],
    dificuldade: "Fácil",
    subtitulo: "O verbo em destaque indica:",
    subtituloDestaque: [],
    tituloDestaque: [
      2
    ]
  },
  {
    titulo: "O verbo em destaque indica:",
    correta: 1,
    feedbackCorreto: "Correto!\n\"Está\" indica um estado — uma forma em que Ana permanece, sem mudança.",
    feedbackErrado: "Incorreto.\n\"Está\" indica um estado  — uma forma em que Ana permanece, sem mudança.\nAlternativa B é a correta.",
    opcoes: [
      "Ação.",
      "Estado.",
      "Fenomeno da natureza."
    ],
    opcoesNegrito: [
      false
    ],
    opcoesItalico: [
      false
    ],
    opcoesDestaque: [
      [],
      [],
      []
    ],
    dificuldade: "Fácil",
    tituloDestaque: [],
    subtituloDestaque: [
      1
    ],
    subtitulo: "\"Ana está muito animada com a viagem.\""
  }
],

  resumo: {
  titulo: "",
  itens: []
},

  licao: {
    titulo: "",
    html: ``,
  },

  questoes: [],
};
