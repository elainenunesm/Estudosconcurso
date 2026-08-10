'use strict';

/**
 * AULA-2.MJS — Aula 2: Como reconhecer o verbo na oração?
 * Gerado pelo Construtor de Aulas (aba "Conteúdo da aula").
 */
window.AULA_DATA = {
  id:     2,
  modulo: "Português",
  titulo: "Aula 2: Como reconhecer o verbo na oração?",

  // Ordem das telas na sequência de estudo — definida em "Estrutura das telas".
  ordem: [
  "antesComecar",
  "exemplo0",
  "exemplo1",
  "exemplo2",
  "exemplo3",
  "exemplo4",
  "checagem0",
  "checagem1",
  "checagem2",
  "checagem3",
  "checagem4",
  "lista"
],

  antesComecar: {
  titulo: "Como reconhecer o verbo na oração?",
  descricao: "Nesta aula você vai aprender técnicas simples para encontrar o verbo em qualquer frase.",
  aprender: "Nesta aula você aprenderá a reconhecer o verbo colocando a palavra no infinitivo e observando o sentido que ela transmite na oração.",
  importancia: "Encontrar o verbo é o primeiro passo para entender a estrutura da frase e identificar sujeito e predicado.",
  tituloDestaque: [],
  tituloDestaqueNegrito: [],
  descricaoDestaque: [],
  descricaoDestaqueNegrito: [],
  tituloNegrito: true,
  tituloAlinhamento: "esquerda",
  aprenderDestaque: [],
  aprenderDestaqueNegrito: [],
  importanciaDestaque: [],
  importanciaDestaqueNegrito: [],
  descricaoAlinhamento: "esquerda"
},

  exemplo: [
  {
    tipo: "infinito",
    texto: "Uma maneira de identificar o verbo é transformar ele no infinitivo.",
    conclusao: "",
    obs: "",
    pontos: [],
    textoDestaque: [
      5,
      10
    ],
    textoDestaqueNegrito: [
      5,
      10
    ]
  },
  {
    tipo: "conjugar",
    texto: "Exemplo: a palavra cantou.",
    conclusao: "Cantou --> Cant + ar (Terminação ar indica infinitivo) 1º conjugação.",
    obs: "",
    pontos: [],
    textoDestaque: [
      4
    ],
    textoDestaqueNegrito: [
      4
    ],
    conclusaoDestaque: [
      0,
      4,
      6,
      9,
      10
    ],
    conclusaoDestaqueNegrito: [],
    conclusaoNegrito: true
  },
  {
    tipo: "gota",
    texto: "Exemplo: a palavra bebeu.",
    conclusao: "Bebeu --> Beb + er (Terminação er indica infinitivo) 2º conjugação.",
    obs: "",
    pontos: [],
    textoDestaque: [
      4
    ],
    textoDestaqueNegrito: [
      4
    ],
    conclusaoDestaque: [
      0,
      4,
      6,
      9,
      10
    ],
    conclusaoDestaqueNegrito: [],
    textoNegrito: false,
    conclusaoNegrito: true
  },
  {
    tipo: "foguete",
    texto: "Exemplo: a palavra partiu.",
    conclusao: "Partiu --> Part + ir (Terminação ir indica infinitivo) 3º conjugação.",
    obs: "",
    pontos: [],
    textoDestaque: [
      4
    ],
    textoDestaqueNegrito: [
      4
    ],
    conclusaoDestaque: [
      0,
      4,
      6,
      9,
      10
    ],
    conclusaoDestaqueNegrito: [],
    conclusaoNegrito: true
  },
  {
    tipo: "peca",
    texto: "Exemplo: a palavra propôs.",
    conclusao: "Propor --> Prop + or (Terminação or indica infinitivo) 2º conjugação.",
    obs: "Obs: Apesar de ter terminação or, ele faz parte da segunda conjugação porque a palavra sofreu alteração ao longo da história, anteriormente a palavra se escrevia com poer, terminação er.",
    pontos: [],
    textoDestaque: [
      4
    ],
    textoDestaqueNegrito: [
      4
    ],
    conclusaoDestaque: [
      0,
      4,
      6,
      9,
      10
    ],
    conclusaoDestaqueNegrito: [],
    obsDestaque: [
      0,
      6,
      30,
      33
    ],
    obsDestaqueNegrito: [
      33,
      30,
      6,
      0
    ],
    conclusaoNegrito: true
  }
],

  checagem: [
  {
    titulo: "Clique no verbo da frase:",
    correta: 2,
    feedbackCorreto: "Correto!\n\"Cantou\" é o verbo — vem de cantar, infinitivo terminado em -ar (1ª conjugação).",
    feedbackErrado: "Incorreto.\n\"Cantou\" é o verbo — vem de cantar, infinitivo terminado em -ar (1ª conjugação).",
    sentenca: [
      "A",
      "maria",
      "cantou",
      "no",
      "coral",
      "."
    ],
    classes: [
      {
        classe: ""
      },
      {
        classe: ""
      },
      {
        classe: "Verbo"
      },
      {
        classe: ""
      },
      {
        classe: ""
      }
    ],
    tituloDestaque: [],
    tituloDestaqueNegrito: [],
    tituloNegrito: true,
    subtitulo: "",
    subtituloDestaque: [],
    subtituloDestaqueNegrito: []
  },
  {
    titulo: "Clique no verbo da frase:",
    correta: 2,
    feedbackCorreto: "Correto.\n\"Dormiu\" é o verbo — vem de dormir, infinitivo terminado em -ir (3ª conjugação).",
    feedbackErrado: "Incorreto.\n\"Dormiu\" é o verbo — vem de dormir, infinitivo terminado em -ir (3ª conjugação).",
    sentenca: [
      "O",
      "gato",
      "dormiu",
      "na",
      "cama",
      "."
    ],
    classes: [
      {
        classe: ""
      },
      {
        classe: ""
      },
      {
        classe: "Verbo"
      },
      {
        classe: ""
      },
      {
        classe: ""
      }
    ],
    tituloDestaque: [],
    tituloDestaqueNegrito: [],
    tituloNegrito: true
  },
  {
    titulo: "Clique no verbo da frase:",
    correta: 2,
    feedbackCorreto: "Correto!\n\"Comeu\" é o verbo — vem de comer, infinitivo terminado em -er (2ª conjugação).",
    feedbackErrado: "Incorreto!\n\"Comeu\" é o verbo — vem de comer, infinitivo terminado em -er (2ª conjugação).",
    sentenca: [
      "O",
      "Pedro",
      "comeu",
      "o",
      "bolo",
      "."
    ],
    classes: [
      {
        classe: ""
      },
      {
        classe: ""
      },
      {
        classe: "Verbo"
      },
      {
        classe: ""
      },
      {
        classe: ""
      }
    ],
    tituloDestaque: [],
    tituloDestaqueNegrito: [],
    tituloNegrito: true
  },
  {
    titulo: "Clique no verbo da frase:",
    correta: 2,
    feedbackCorreto: "Correto!\n\"Sorriu\" é o verbo — vem de sorrir, infinitivo terminado em -ir (3ª conjugação).",
    feedbackErrado: "Incorreto!\n\"Sorriu\" é o verbo — vem de sorrir, infinitivo terminado em -ir (3ª conjugação).",
    sentenca: [
      "O",
      "menino",
      "sorriu",
      "feliz",
      "."
    ],
    classes: [
      {
        classe: ""
      },
      {
        classe: ""
      },
      {
        classe: "Verbo"
      },
      {
        classe: ""
      }
    ],
    tituloDestaque: [],
    tituloDestaqueNegrito: [],
    tituloNegrito: true
  },
  {
    titulo: "Clique no verbo da frase:",
    correta: 2,
    feedbackCorreto: "Correto!\n\"Pôs\" é o verbo — vem de pôr, um verbo irregular (antigamente escrito \"poer\", por isso é da 2ª conjugação).",
    feedbackErrado: "Incorreto!\n\"Pôs\" é o verbo — vem de pôr, um verbo irregular (antigamente escrito \"poer\", por isso é da 2ª conjugação).",
    sentenca: [
      "A",
      "professora",
      "pôs",
      "o",
      "livro",
      "na",
      "mesa",
      "."
    ],
    classes: [
      {
        classe: ""
      },
      {
        classe: ""
      },
      {
        classe: "Verbo"
      },
      {
        classe: ""
      },
      {
        classe: ""
      },
      {
        classe: ""
      },
      {
        classe: ""
      }
    ],
    tituloDestaque: [],
    tituloDestaqueNegrito: [],
    tituloNegrito: true,
    subtitulo: "",
    subtituloDestaque: [],
    subtituloDestaqueNegrito: []
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

  lista: '',

  questoes: [],
};
