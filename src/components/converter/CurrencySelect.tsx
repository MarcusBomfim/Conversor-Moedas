import { currencies } from "../../constants/currencies";
import type { CurrencyCode } from "../../types/currency";

type CurrencySelectProps = {
  label: string;
  value: CurrencyCode;
  onChange: (value: CurrencyCode) => void;
};

export function CurrencySelect({ label, value, onChange }: CurrencySelectProps) {
  return (
    <label className="field currency-field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value as CurrencyCode)}>
        {currencies.map((currency) => <option key={currency.code} value={currency.code}>{currency.code} — {currency.name}</option>)}
      </select>
    </label>
  );
}
