import { useState } from "react";
import { DEFAULT_FROM_CURRENCY, DEFAULT_TO_CURRENCY } from "../constants/currencies";
import { convertCurrency } from "../services/exchangeRateApi";
import type { ConversionResult, CurrencyCode } from "../types/currency";
import { parseAmount } from "../utils/validateAmount";
import { useConversionHistory } from "./useConversionHistory";

export function useCurrencyConverter() {
  const [amount, setAmount] = useState("100");
  const [from, setFrom] = useState<CurrencyCode>(DEFAULT_FROM_CURRENCY);
  const [to, setTo] = useState<CurrencyCode>(DEFAULT_TO_CURRENCY);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { history, addHistory, clearHistory } = useConversionHistory();

  const convert = async () => {
    try {
      setLoading(true);
      setError("");
      const conversion = await convertCurrency({ amount: parseAmount(amount), from, to });
      setResult(conversion);
      addHistory(conversion);
    } catch (caught) {
      setResult(null);
      setError(caught instanceof Error ? caught.message : "Não foi possível realizar a conversão.");
    } finally {
      setLoading(false);
    }
  };

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
    setResult(null);
    setError("");
  };

  const reuseConversion = (conversion: ConversionResult) => {
    setAmount(String(conversion.amount));
    setFrom(conversion.from);
    setTo(conversion.to);
    setResult(conversion);
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    amount,
    from,
    to,
    result,
    loading,
    error,
    history,
    setAmount,
    setFrom,
    setTo,
    convert,
    swapCurrencies,
    reuseConversion,
    clearHistory,
  };
}
