export type CurrencyCode =
  | "BRL"
  | "USD"
  | "EUR"
  | "GBP"
  | "JPY"
  | "CAD"
  | "AUD"
  | "CHF"
  | "ARS"
  | "CNY";

export interface Currency {
  code: CurrencyCode;
  name: string;
  symbol: string;
  locale: string;
}

export interface ConversionRequest {
  amount: number;
  from: CurrencyCode;
  to: CurrencyCode;
}

export interface ExchangeRateQuote {
  from: CurrencyCode;
  to: CurrencyCode;
  rate: number;
  date: string;
  source: "api" | "mock";
}

export interface ConversionResult extends ExchangeRateQuote {
  id: string;
  amount: number;
  convertedAmount: number;
  createdAt: string;
}

export interface FrankfurterRateResponse {
  date: string;
  base: string;
  quote: string;
  rate: number;
}
