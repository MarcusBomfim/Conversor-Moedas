import { CurrencyConverter } from "../components/converter/CurrencyConverter";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";

export function HomePage() {
  const converter = useCurrencyConverter();

  return (
    <div className="converter-page">
      <main className="converter-only" aria-label="Conversor de moedas">
        <CurrencyConverter
          amount={converter.amount}
          from={converter.from}
          to={converter.to}
          result={converter.result}
          loading={converter.loading}
          error={converter.error}
          onAmount={converter.setAmount}
          onFrom={converter.setFrom}
          onTo={converter.setTo}
          onSwap={converter.swapCurrencies}
          onConvert={converter.convert}
        />
      </main>
    </div>
  );
}
