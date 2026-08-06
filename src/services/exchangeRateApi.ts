import { MOCK_VALUES_IN_BRL } from "../constants/mockRates";
import type {
  ConversionRequest,
  ConversionResult,
  CurrencyCode,
  ExchangeRateQuote,
  FrankfurterRateResponse,
} from "../types/currency";
import { validateAmount } from "../utils/validateAmount";

const API_URL = "https://api.frankfurter.dev/v2/rate";
const REQUEST_TIMEOUT = 8_000;

function mockQuote(from: CurrencyCode, to: CurrencyCode): ExchangeRateQuote {
  return {
    from,
    to,
    rate: from === to ? 1 : MOCK_VALUES_IN_BRL[from] / MOCK_VALUES_IN_BRL[to],
    date: new Date().toISOString().slice(0, 10),
    source: "mock",
  };
}

export async function getExchangeRate(from: CurrencyCode, to: CurrencyCode): Promise<ExchangeRateQuote> {
  if (from === to) return mockQuote(from, to);

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT);

  try {
    const response = await fetch(`${API_URL}/${from}/${to}`, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
    });
    if (!response.ok) throw new Error("A cotação não está disponível no momento.");
    const data = (await response.json()) as FrankfurterRateResponse;
    if (!Number.isFinite(data.rate) || data.rate <= 0) throw new Error("A API retornou uma cotação inválida.");
    return { from, to, rate: data.rate, date: data.date, source: "api" };
  } catch {
    return mockQuote(from, to);
  } finally {
    window.clearTimeout(timeout);
  }
}

export async function convertCurrency(request: ConversionRequest): Promise<ConversionResult> {
  const validation = validateAmount(request.amount);
  if (!validation.valid) throw new Error(validation.message);

  const quote = await getExchangeRate(request.from, request.to);
  return {
    id: crypto.randomUUID(),
    amount: request.amount,
    from: request.from,
    to: request.to,
    rate: quote.rate,
    convertedAmount: request.amount * quote.rate,
    date: quote.date,
    source: quote.source,
    createdAt: new Date().toISOString(),
  };
}
