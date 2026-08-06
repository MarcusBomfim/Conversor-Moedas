import type { ConversionResult as Result } from "../../types/currency";
import { formatCurrency, formatRate } from "../../utils/formatCurrency";

export function ConversionResult({ result }: { result: Result }) {
  const formattedDate = new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(`${result.date}T12:00:00`));
  return (
    <section className="conversion-result" aria-live="polite">
      <div className="result-heading"><span>RESULTADO DA CONVERSÃO</span><span className={`source-badge source-${result.source}`}>{result.source === "api" ? "Cotação consultada" : "Cotação simulada"}</span></div>
      <p className="result-origin">{formatCurrency(result.amount, result.from)} equivalem a</p>
      <strong className="result-value">{formatCurrency(result.convertedAmount, result.to)}</strong>
      <div className="result-meta"><span>1 {result.from} = {formatRate(result.rate)} {result.to}</span><span>Referência de {formattedDate}</span></div>
    </section>
  );
}
