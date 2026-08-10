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
  "exemplo1"
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
    texto: "\nImagine um guarda de trânsito.\n\nVocê (cidadão) pode aplicar uma multa? ❌ Não.\nO guarda (agente público) pode? ✅ Sim.\n\n\nIsso acontece porque a lei concedeu esse poder ao agente público.",
    conclusao: "",
    obs: "",
    pontos: [],
    textoDestaque: [
      31,
      32,
      18,
      19,
      7
    ],
    textoDestaqueNegrito: [
      26,
      27,
      32,
      28,
      29,
      7,
      18,
      31,
      19,
      2,
      3,
      4
    ],
    conclusaoDestaque: [],
    conclusaoDestaqueNegrito: [],
    iconeUrl: "data:image/jpeg;base64,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"
  }
],

  checagem: [],

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
