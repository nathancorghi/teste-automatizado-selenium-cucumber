# language: pt
Funcionalidade: Calcular diferentes tipos de triangulos
  Eu, como usuario da calculadora de triangulos,
  quero realizar os calculos dos mais variados 
  tipos de triangulos

Contexto: Acessar aplicacao
	Dado que acessei a aplicacao

Esquema do Cenario: Calculo de Triangulos
	Quando eu informar os valores do lado1 <lado1>, lado2 <lado2> e lado3 <lado3>
  Entao o Triangulo <nome> sera calculado
  
Exemplos:
| lado1 | lado2 | lado3 | nome                   |
|   1   |   1   |   2   | "Triângulo Isósceles"  |
|   1   |   1   |   1   | "Triângulo Equilátero" |
|   1   |   2   |   3   | "Triângulo Escaleno"   |