export function SwapButton({ onClick }: { onClick: () => void }) {
  return <button className="swap-button" type="button" onClick={onClick} aria-label="Inverter moedas" title="Inverter moedas"><span aria-hidden="true">⇄</span></button>;
}
