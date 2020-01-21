$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Calculadora.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Calcular diferentes tipos de triângulos",
  "description": "Eu, como usuário da calculadora de triângulos,\nquero realizar os cálculos dos mais variados \ntipos de triângulos",
  "id": "calcular-diferentes-tipos-de-triângulos",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 7198986700,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Acessar aplicação",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acessei a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "Step_Definition_Calculadora.Acessei_aplicacao()"
});
formatter.result({
  "duration": 5248352900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Valores inválidos",
  "description": "",
  "id": "calcular-diferentes-tipos-de-triângulos;valores-inválidos",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 12,
  "name": "eu não informar os valores dos lados",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "calcular os lados do triângulo",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "a mensagem \"Preencha todos os lados\" será exibida",
  "keyword": "Entao "
});
formatter.match({
  "location": "Step_Definition_Calculadora.Nao_informar_valores_dos_lados()"
});
formatter.result({
  "duration": 42200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Calculadora.Calcular_lados_triangulo()"
});
formatter.result({
  "duration": 687375900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Calculadora.Mensagem_erro_sera_exibida()"
});
formatter.result({
  "duration": 61897000,
  "status": "passed"
});
formatter.after({
  "duration": 758154600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Cálculo de Triângulos",
  "description": "",
  "id": "calcular-diferentes-tipos-de-triângulos;cálculo-de-triângulos",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 17,
  "name": "eu informar os valores do lado1 \u003clado1\u003e, lado2 \u003clado2\u003e e lado3 \u003clado3\u003e",
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "calcular os lados do triângulo",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o \u003cnome\u003e será calculado",
  "keyword": "Entao "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "calcular-diferentes-tipos-de-triângulos;cálculo-de-triângulos;",
  "rows": [
    {
      "cells": [
        "lado1",
        "lado2",
        "lado3",
        "nome"
      ],
      "line": 22,
      "id": "calcular-diferentes-tipos-de-triângulos;cálculo-de-triângulos;;1"
    },
    {
      "cells": [
        "1",
        "1",
        "2",
        "\"Triângulo Isósceles\""
      ],
      "line": 23,
      "id": "calcular-diferentes-tipos-de-triângulos;cálculo-de-triângulos;;2"
    },
    {
      "cells": [
        "1",
        "1",
        "1",
        "\"Triângulo Equilátero\""
      ],
      "line": 24,
      "id": "calcular-diferentes-tipos-de-triângulos;cálculo-de-triângulos;;3"
    },
    {
      "cells": [
        "1",
        "2",
        "3",
        "\"Triângulo Escaleno\""
      ],
      "line": 25,
      "id": "calcular-diferentes-tipos-de-triângulos;cálculo-de-triângulos;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 5499737600,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Acessar aplicação",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acessei a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "Step_Definition_Calculadora.Acessei_aplicacao()"
});
formatter.result({
  "duration": 5181013700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Cálculo de Triângulos",
  "description": "",
  "id": "calcular-diferentes-tipos-de-triângulos;cálculo-de-triângulos;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 17,
  "name": "eu informar os valores do lado1 1, lado2 1 e lado3 2",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "calcular os lados do triângulo",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o \"Triângulo Isósceles\" será calculado",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    },
    {
      "val": "1",
      "offset": 41
    },
    {
      "val": "2",
      "offset": 51
    }
  ],
  "location": "Step_Definition_Calculadora.Informar_valores_dos_lados(int,int,int)"
});
formatter.result({
  "duration": 292043900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Calculadora.Calcular_lados_triangulo()"
});
formatter.result({
  "duration": 704326800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"Triângulo Isósceles\"",
      "offset": 2
    }
  ],
  "location": "Step_Definition_Calculadora.Triangulo_isosceles_sera_calculado(String)"
});
formatter.result({
  "duration": 59440700,
  "status": "passed"
});
formatter.after({
  "duration": 753085800,
  "status": "passed"
});
formatter.before({
  "duration": 5522064100,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Acessar aplicação",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acessei a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "Step_Definition_Calculadora.Acessei_aplicacao()"
});
formatter.result({
  "duration": 5139469300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Cálculo de Triângulos",
  "description": "",
  "id": "calcular-diferentes-tipos-de-triângulos;cálculo-de-triângulos;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 17,
  "name": "eu informar os valores do lado1 1, lado2 1 e lado3 1",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "calcular os lados do triângulo",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o \"Triângulo Equilátero\" será calculado",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    },
    {
      "val": "1",
      "offset": 41
    },
    {
      "val": "1",
      "offset": 51
    }
  ],
  "location": "Step_Definition_Calculadora.Informar_valores_dos_lados(int,int,int)"
});
formatter.result({
  "duration": 263434600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Calculadora.Calcular_lados_triangulo()"
});
formatter.result({
  "duration": 765714700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"Triângulo Equilátero\"",
      "offset": 2
    }
  ],
  "location": "Step_Definition_Calculadora.Triangulo_isosceles_sera_calculado(String)"
});
formatter.result({
  "duration": 56080200,
  "status": "passed"
});
formatter.after({
  "duration": 746360000,
  "status": "passed"
});
formatter.before({
  "duration": 5497960900,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "Acessar aplicação",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 9,
  "name": "que acessei a aplicação",
  "keyword": "Dado "
});
formatter.match({
  "location": "Step_Definition_Calculadora.Acessei_aplicacao()"
});
formatter.result({
  "duration": 5083524900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Cálculo de Triângulos",
  "description": "",
  "id": "calcular-diferentes-tipos-de-triângulos;cálculo-de-triângulos;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 17,
  "name": "eu informar os valores do lado1 1, lado2 2 e lado3 3",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 18,
  "name": "calcular os lados do triângulo",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "o \"Triângulo Escaleno\" será calculado",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    },
    {
      "val": "2",
      "offset": 41
    },
    {
      "val": "3",
      "offset": 51
    }
  ],
  "location": "Step_Definition_Calculadora.Informar_valores_dos_lados(int,int,int)"
});
formatter.result({
  "duration": 290895500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Calculadora.Calcular_lados_triangulo()"
});
formatter.result({
  "duration": 781338200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\"Triângulo Escaleno\"",
      "offset": 2
    }
  ],
  "location": "Step_Definition_Calculadora.Triangulo_isosceles_sera_calculado(String)"
});
formatter.result({
  "duration": 57467300,
  "status": "passed"
});
formatter.after({
  "duration": 805881100,
  "status": "passed"
});
});