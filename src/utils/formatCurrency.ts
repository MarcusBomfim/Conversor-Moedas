import { findCurrency } from "../constants/currencies";
import type { CurrencyCode } from "../types/currency";

export function formatCurrency(value: number, currencyCode: CurrencyCode): string {
  const currency = findCurrency(currencyCode);
  return new Intl.NumberFormat(currency.locale, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: currencyCode === "JPY" ? 0 : 2,
    maximumFractionDigits: currencyCode === "JPY" ? 0 : 2,
  }).format(value);
}

export function formatRate(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 6,
  }).format(value);
}
