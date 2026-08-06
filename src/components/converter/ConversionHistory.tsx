import type { ConversionResult } from "../../types/currency";
import { formatCurrency } from "../../utils/formatCurrency";

type ConversionHistoryProps = {
  history: ConversionResult[];
  onReuse: (item: ConversionResult) => void;
  onClear: () => void;
};

export function ConversionHistory({ history, onReuse, onClear }: ConversionHistoryProps) {
  if (!history.length) return null;
  return (
    <section className="history-section" aria-labelledby="history-title">
      <div className="section-heading"><div><span>SUAS CONSULTAS</span><h2 id="history-title">Conversões recentes</h2></div><button type="button" onClick={onClear}>Limpar histórico</button></div>
      <div className="history-list">{history.map((item) => <button className="history-item" type="button" key={item.id} onClick={() => onReuse(item)}><span><strong>{item.from}</strong><small>{formatCurrency(item.amount, item.from)}</small></span><span className="history-arrow" aria-hidden="true">→</span><span><strong>{item.to}</strong><small>{formatCurrency(item.convertedAmount, item.to)}</small></span><span className="reuse-label">Usar novamente</span></button>)}</div>
    </section>
  );
}
