## Resumo
Desafio para desenvolvedor backend para empresa BovControl.


## Atividade

|Critério| Primeiro semestre - Jan a Jun | Segundo semestre - Jul a Dez |
|---|:---:|---|
|Preço base por litro| R$ 1,80| R$ 1,95|
|Custo por KM até 50KM| R$ 0,05 | |
|Custo por KM acima de 50KM| R$ 0,06 | |
|Bônus p/ produção acima de 10.000 L| |R$ 0,01|

A regra para computar o preço do litro de leite é:

Preço = (Volume do mês * Preço base) - (Custo por KM * distância da fazenda até a fábrica) + (Bônus p/ produção * litros entregues no mês)

Considerando as regras descritas, crie uma API com os seguintes recursos:
- cadastro de fazendeiro e fazenda;
- cadastro da produção de leite diário, em litros;
- consulta do volume de leite entregue para cada dia e a média mensal, dado uma fazenda e um mês de parâmetro;
- consulta do preço do litro de leite pago ao fazendeiro, dado um código de fazenda e um mês de parâmetro. Apresentar o preço no formato numérico brasileiro e inglês;
- consulta do preço do litro de leite pago para cada mês do ano, dado uma fazenda e um ano de parâmetro. Apresentar o preço no formato numérico brasileiro e inglês;

## Obrigatório
1. Necessário ter mongoDB instalado para criação dos documentos automaticamente;

## Instalação

```bash
$ npm install ou yarn install
```

## Documentação API
http://localhost:3008/api

## Executando o app

```bash
# development
$ npm run start ou yarn start

# watch mode
$ npm run start-dev ou yarn start-dev

# test jest
$ npm run start-dev ou yarn start-dev
```
