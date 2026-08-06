import type { FormEvent } from "react";
import type { ConversionResult, CurrencyCode } from "../../types/currency";
import { Button } from "../ui/Button";
import { ErrorMessage } from "../ui/ErrorMessage";
import { Loading } from "../ui/Loading";
import { AmountInput } from "./AmountInput";
import { ConversionResult as ResultView } from "./ConversionResult";
import { CurrencySelect } from "./CurrencySelect";
import { SwapButton } from "./SwapButton";

type CurrencyConverterProps = {
  amount: string;
  from: CurrencyCode;
  to: CurrencyCode;
  result: ConversionResult | null;
  loading: boolean;
  error: string;
  onAmount: (value: string) => void;
  onFrom: (value: CurrencyCode) => void;
  onTo: (value: CurrencyCode) => void;
  onSwap: () => void;
  onConvert: () => Promise<void>;
};

export function CurrencyConverter(props: CurrencyConverterProps) {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void props.onConvert();
  };

  return (
    <div className="converter-card">
      <div className="card-heading"><span className="step-label">CONVERSÃO INTERNACIONAL</span><h2>Quanto vale seu dinheiro?</h2><p>Escolha as moedas e consulte a taxa de referência mais recente.</p></div>
      <form onSubmit={submit}>
        <AmountInput value={props.amount} onChange={props.onAmount} />
        <div className="currency-row"><CurrencySelect label="Converter de" value={props.from} onChange={props.onFrom} /><SwapButton onClick={props.onSwap} /><CurrencySelect label="Converter para" value={props.to} onChange={props.onTo} /></div>
        <ErrorMessage message={props.error} />
        <Button className="convert-button" type="submit" disabled={props.loading}>{props.loading ? <Loading /> : "Converter agora"}</Button>
      </form>
      {props.result && <ResultView result={props.result} />}
    </div>
  );
}
