'use strict';

/**
 * AULA-3.MJS — Aula 1: Regime Jurídico Administrativo
 * Gerado pelo Construtor de Aulas (aba "Conteúdo da aula").
 */
window.AULA_DATA = {
  id:     3,
  modulo: "Direito Administrativo",
  titulo: "Aula 1: Regime Jurídico Administrativo",

  // Ordem das telas na sequência de estudo — definida em "Estrutura das telas".
  ordem: [
  "antesComecar",
  "lista0",
  "exemplo0",
  "lista1",
  "exemplo1",
  "exemplo2",
  "checagem0",
  "checagem1"
],

  antesComecar: {
  titulo: "O que é Direito Administrativo?",
  descricao: "Nesta aula você vai entender o que é o Direito Administrativo, qual o seu objetivo e o que é o Regime Jurídico Administrativo.",
  aprender: "O que é Direito Administrativo, seu objetivo, o que é interesse público, por que a Administração tem poderes diferentes, o que é o Regime Jurídico Administrativo, o que são prerrogativas e os princípios da supremacia e da indisponibilidade do interesse público.",
  importancia: "Esses conceitos são a base de todo o Direito Administrativo e aparecem o tempo todo nas provas de concurso.",
  tituloDestaque: [],
  tituloDestaqueNegrito: [],
  descricaoDestaque: [],
  descricaoDestaqueNegrito: [],
  aprenderDestaque: [],
  aprenderDestaqueNegrito: [],
  importanciaDestaque: [],
  importanciaDestaqueNegrito: [],
  tituloNegrito: true,
  tituloAlinhamento: "esquerda"
},

  exemplo: [
  {
    tipo: "dica",
    texto: "Toda atuação da Administração Pública deve buscar o interesse da sociedade.",
    conclusao: "Esse é o objetivo do Direito Administrativo.",
    obs: "",
    pontos: [],
    textoDestaque: [],
    textoDestaqueNegrito: [
      3,
      4
    ],
    conclusaoDestaque: [
      5,
      6
    ],
    conclusaoDestaqueNegrito: [
      5,
      6
    ]
  },
  {
    tipo: "externo",
    texto: "\nImagine um guarda de trânsito.\n\nVocê (cidadão) pode aplicar uma multa?       ❌ Não.\nO guarda de transito (agente público) pode? ✅ Sim.\n\n\nIsso acontece porque a lei concedeu esse poder ao agente público.",
    conclusao: "",
    obs: "",
    pontos: [
      {
        tipo: "dica",
        texto: ""
      }
    ],
    textoDestaque: [
      7,
      21,
      20,
      36,
      37
    ],
    textoDestaqueNegrito: [
      7,
      2,
      3,
      4,
      20,
      21,
      25,
      14,
      37,
      36,
      31,
      32,
      33,
      34
    ],
    conclusaoDestaque: [],
    conclusaoDestaqueNegrito: [],
    iconeUrl: "data:image/jpeg;base64,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"
  },
  {
    tipo: "dica",
    texto: "Esses poderes não existem por acaso — eles fazem parte do Regime Jurídico Administrativo.",
    conclusao: "\nRegime Jurídico Administrativo:\nÉ o conjunto de regras e princípios que estabelece os poderes da Administração Pública e também os limites da sua atuação.\n\n\n",
    obs: "Ou seja, ao mesmo tempo que a Administração recebe poderes, ela também recebe obrigações e limitações.",
    pontos: [],
    textoDestaque: [
      11,
      12,
      13
    ],
    textoDestaqueNegrito: [
      0,
      1,
      11,
      12,
      13
    ],
    conclusaoDestaque: [
      8,
      9,
      10,
      20,
      21,
      22,
      23,
      24
    ],
    conclusaoDestaqueNegrito: [
      0,
      1,
      2,
      8,
      9,
      10,
      20,
      21,
      22,
      23,
      24
    ],
    obsDestaque: [
      9,
      10,
      14,
      15,
      17
    ],
    obsDestaqueNegrito: [
      9,
      10,
      14,
      15,
      17
    ]
  }
],

  checagem: [
  {
    titulo: "Qual é o principal objetivo do Direito Administrativo?",
    correta: 1,
    feedbackCorreto: "Correto.\n\nGabarito: B",
    feedbackErrado: "Incorreto.\n\nGabarito: B",
    opcoes: [
      "Aumentar os poderes dos agentes públicos.",
      "Organizar o funcionamento da Administração Pública e orientar sua atuação em benefício da sociedade.",
      "Criar regras apenas para servidores públicos.",
      "Permitir que o Estado atue sem limitações."
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
    tituloDestaque: [],
    tituloDestaqueNegrito: [],
    tituloNegrito: true,
    subtitulo: "",
    subtituloDestaque: [],
    subtituloDestaqueNegrito: []
  },
  {
    titulo: "Um guarda de trânsito pode aplicar uma multa porque:",
    correta: 0,
    feedbackCorreto: "",
    feedbackErrado: "",
    opcoes: [
      "Todo cidadão possui esse poder.",
      "O guarda pode fazer tudo que considerar necessário.",
      "A lei concede esse poder ao agente público."
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
    subtituloDestaque: [],
    subtituloDestaqueNegrito: [],
    tituloDestaque: [],
    tituloDestaqueNegrito: []
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

  lista: [
  {
    titulo: "O Estado precisa prestar diversos serviços para a população:",
    itens: [
      {
        tipo: "tarefa",
        cor: "#5B2BCB",
        corFundo: "#f0eaff",
        texto: "Construir escolas.",
        textoDestaque: [],
        textoDestaqueNegrito: []
      },
      {
        tipo: "tarefa",
        cor: "#5B2BCB",
        corFundo: "#f0eaff",
        texto: "Manter hospitais.",
        textoDestaque: [],
        textoDestaqueNegrito: []
      },
      {
        tipo: "tarefa",
        cor: "#5B2BCB",
        corFundo: "#f0eaff",
        texto: "Oferecer transporte público.",
        textoDestaque: [],
        textoDestaqueNegrito: []
      },
      {
        tipo: "tarefa",
        cor: "#5B2BCB",
        corFundo: "#f0eaff",
        texto: "Cuidar da segurança.",
        textoDestaque: [],
        textoDestaqueNegrito: []
      }
    ],
    descricao: "Para que tudo isso aconteça, existem regras que orientam como o Estado deve agir.\n\nEm resumo: Direito Administrativo é o conjunto de regras que organiza o funcionamento da Administração Pública.",
    tituloDestaque: [],
    tituloDestaqueNegrito: [],
    tituloNegrito: false,
    descricaoDestaque: [
      19,
      20
    ],
    descricaoDestaqueNegrito: [
      19,
      20
    ]
  },
  {
    titulo: "Esse objetivo é chamado de interesse público. Exemplos:",
    itens: [
      {
        tipo: "tarefa",
        cor: "#5B2BCB",
        corFundo: "#f0eaff",
        texto: "✅ Construir um hospital.",
        textoDestaque: [],
        textoDestaqueNegrito: []
      },
      {
        tipo: "tarefa",
        cor: "#5B2BCB",
        corFundo: "#f0eaff",
        texto: "✅ Reformar uma escola.",
        textoDestaque: [],
        textoDestaqueNegrito: []
      },
      {
        tipo: "tarefa",
        cor: "#5B2BCB",
        corFundo: "#f0eaff",
        texto: "✅ Pavimentar uma rua.",
        textoDestaque: [],
        textoDestaqueNegrito: []
      },
      {
        tipo: "tarefa",
        cor: "#5B2BCB",
        corFundo: "#f0eaff",
        texto: "✅ Manter a coleta de lixo.",
        textoDestaque: [],
        textoDestaqueNegrito: []
      }
    ],
    descricao: "Para realizar essas atividades, a lei concede alguns poderes especiais à Administração Pública.",
    tituloDestaque: [
      5,
      6
    ],
    tituloDestaqueNegrito: [
      5,
      6
    ],
    descricaoDestaque: [
      12,
      13
    ],
    descricaoDestaqueNegrito: [
      12,
      13,
      2,
      3
    ]
  }
],

  questoes: [],
};
