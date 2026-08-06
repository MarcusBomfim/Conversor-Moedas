export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Conversor de Moedas — início">
        <span className="brand-mark">C</span>
        <span><strong>Câmbio Claro</strong><small>Conversor de moedas</small></span>
      </a>
      <div className="api-status"><span aria-hidden="true" />Taxas de referência</div>
    </header>
  );
}
