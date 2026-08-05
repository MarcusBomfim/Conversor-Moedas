import type { Currency, CurrencyCode } from "../types/currency";

export const currencies: Currency[] = [
  {
    code: "BRL",
    name: "Real brasileiro",
    symbol: "R$",
    locale: "pt-BR",
  },
  {
    code: "USD",
    name: "Dólar americano",
    symbol: "$",
    locale: "en-US",
  },
  {
    code: "EUR",
    name: "Euro",
    symbol: "€",
    locale: "de-DE",
  },
  {
    code: "GBP",
    name: "Libra esterlina",
    symbol: "£",
    locale: "en-GB",
  },
  {
    code: "JPY",
    name: "Iene japonês",
    symbol: "¥",
    locale: "ja-JP",
  },
  {
    code: "CAD",
    name: "Dólar canadense",
    symbol: "CA$",
    locale: "en-CA",
  },
  {
    code: "AUD",
    name: "Dólar australiano",
    symbol: "A$",
    locale: "en-AU",
  },
  {
    code: "CHF",
    name: "Franco suíço",
    symbol: "CHF",
    locale: "de-CH",
  },
  {
    code: "ARS",
    name: "Peso argentino",
    symbol: "$",
    locale: "es-AR",
  },
  {
    code: "CNY",
    name: "Yuan chinês",
    symbol: "¥",
    locale: "zh-CN",
  },
];

export const DEFAULT_FROM_CURRENCY: CurrencyCode = "BRL";
export const DEFAULT_TO_CURRENCY: CurrencyCode = "USD";

export function findCurrency(code: CurrencyCode): Currency {
  const currency = currencies.find((item) => item.code === code);

  if (!currency) {
    throw new Error(`Moeda ${code} não encontrada.`);
  }

  return currency;
}