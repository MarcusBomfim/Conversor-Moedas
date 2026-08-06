# Conversor de Moedas

Aplicação web para conversão entre moedas internacionais, desenvolvida com React e TypeScript. O projeto consulta uma cotação de referência, calcula o valor convertido e mantém no navegador um histórico das consultas recentes.

## Funcionalidades

- Conversão entre 10 moedas internacionais
- Consulta de cotações pela Frankfurter API
- Dados simulados de reserva quando a API estiver indisponível
- Inversão rápida das moedas selecionadas
- Histórico das seis conversões mais recentes
- Reutilização e limpeza do histórico
- Validação do valor informado
- Interface responsiva e acessível

## Tecnologias

- React 19
- TypeScript
- Vite
- CSS organizado por responsabilidade
- Fetch API
- LocalStorage
- ESLint

## Estrutura do projeto

```text
src/
├── components/
│   ├── converter/       # Componentes da conversão
│   ├── layout/          # Cabeçalho e rodapé
│   └── ui/              # Componentes de interface reutilizáveis
├── constants/           # Moedas e taxas simuladas
├── hooks/               # Estado da conversão e histórico
├── pages/               # Páginas da aplicação
├── services/            # Comunicação com a API
├── styles/              # Estilos globais, componentes e responsividade
├── types/               # Tipos TypeScript
└── utils/               # Formatação e validação
```

## Como executar

É necessário ter o Node.js instalado.

```bash
npm.cmd install
npm.cmd run dev
```

Abra o endereço exibido no terminal, normalmente `http://localhost:5173`.

## Gerar uma versão de produção

```bash
npm.cmd run build
npm.cmd run preview
```

## Fonte das cotações

O projeto utiliza o endpoint público da [Frankfurter API](https://frankfurter.dev/), que não exige chave. Se a consulta não puder ser concluída, a aplicação exibe uma cotação simulada claramente identificada. Os valores são apenas referências e não representam uma oferta comercial.

## Armazenamento

Este projeto não usa banco de dados. As últimas conversões são salvas somente no `localStorage` do navegador do usuário.
