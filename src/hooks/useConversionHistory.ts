import { useCallback, useState } from "react";
import type { ConversionResult } from "../types/currency";

const STORAGE_KEY = "currency-converter-history";
const HISTORY_LIMIT = 6;

function readHistory(): ConversionResult[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as ConversionResult[]) : [];
  } catch {
    return [];
  }
}

export function useConversionHistory() {
  const [history, setHistory] = useState<ConversionResult[]>(readHistory);

  const addHistory = useCallback((item: ConversionResult) => {
    setHistory((current) => {
      const next = [item, ...current].slice(0, HISTORY_LIMIT);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const clearHistory = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setHistory([]);
  }, []);

  return { history, addHistory, clearHistory };
}
