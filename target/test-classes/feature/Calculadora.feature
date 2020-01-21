# language: pt

Funcionalidade: Calcular diferentes tipos de triângulos
  Eu, como usuário da calculadora de triângulos,
  quero realizar os cálculos dos mais variados 
  tipos de triângulos

Contexto: Acessar aplicação
	Dado que acessei a aplicação

Cenario: Valores inválidos
	Quando eu não informar os valores dos lados
	E calcular os lados do triângulo
	Entao a mensagem "Preencha todos os lados" será exibida

Esquema do Cenario: Cálculo de Triângulos
	Quando eu informar os valores do lado1 <lado1>, lado2 <lado2> e lado3 <lado3>
	E calcular os lados do triângulo
  Entao o <nome> será calculado
  
Exemplos:
| lado1 | lado2 | lado3 | nome                   |
|   1   |   1   |   2   | "Triângulo Isósceles"  |
|   1   |   1   |   1   | "Triângulo Equilátero" |
|   1   |   2   |   3   | "Triângulo Escaleno"   |