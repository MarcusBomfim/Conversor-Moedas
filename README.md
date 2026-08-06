# Conversor de Moedas

Aplicação web para conversão de moedas internacionais, desenvolvida com React e TypeScript. Possui uma interface simples, responsiva e focada exclusivamente na conversão de valores.

## Funcionalidades

- Conversão entre diferentes moedas internacionais
- Consulta de cotações atualizadas
- Inversão rápida entre as moedas
- Validação do valor informado
- Cotação simulada caso a API esteja indisponível
- Interface responsiva para computadores e celulares
- Identificação da data e da fonte da cotação

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- CSS
- Fetch API
- Frankfurter API
- ESLint

## Estrutura do projeto

```text
src/
├── components/
│   ├── converter/
│   ├── layout/
│   └── ui/
├── constants/
├── hooks/
├── pages/
├── services/
├── styles/
├── types/
└── utils/
```

## Como executar o projeto

É necessário ter o Node.js instalado.

Clone o repositório:

```bash
git clone URL_DO_SEU_REPOSITORIO
```

Entre na pasta do projeto:

```bash
cd Conversor-Moedas
```

Instale as dependências:

```bash
npm.cmd install
```

Execute o projeto:

```bash
npm.cmd run dev
```

Acesse o endereço exibido no terminal, normalmente:

```text
http://localhost:5173
```

## Gerar versão de produção

```bash
npm.cmd run build
```

Para visualizar a versão de produção:

```bash
npm.cmd run preview
```

## API utilizada

O projeto utiliza a [Frankfurter API](https://frankfurter.dev/) para consultar taxas de câmbio de referência.

Caso a API esteja indisponível, a aplicação utiliza valores simulados e informa isso no resultado.

## Observação

As cotações apresentadas são apenas valores de referência. Bancos, corretoras e outras instituições financeiras podem aplicar tarifas e valores diferentes.
