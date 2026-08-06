import type { CurrencyCode } from "../types/currency";

// Valores simulados em reais, usados somente quando a API está indisponível.
export const MOCK_VALUES_IN_BRL: Record<CurrencyCode, number> = {
  BRL: 1,
  USD: 5,
  EUR: 5.5,
  GBP: 6.4,
  JPY: 0.034,
  CAD: 3.65,
  AUD: 3.25,
  CHF: 5.75,
  ARS: 0.004,
  CNY: 0.7,
};
