type AmountInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function AmountInput({ value, onChange }: AmountInputProps) {
  return (
    <label className="field amount-field">
      <span>Valor para converter</span>
      <div className="amount-control"><span aria-hidden="true">$</span><input value={value} onChange={(event) => onChange(event.target.value)} inputMode="decimal" autoComplete="off" placeholder="0,00" aria-label="Valor para converter" /></div>
    </label>
  );
}
