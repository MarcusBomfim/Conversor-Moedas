import { CurrencyConverter } from "../components/converter/CurrencyConverter";
import { ConversionHistory } from "../components/converter/ConversionHistory";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { useCurrencyConverter } from "../hooks/useCurrencyConverter";

const highlights = [
  { value: "10", label: "moedas disponíveis" },
  { value: "24h", label: "histórico no navegador" },
  { value: "0", label: "cadastros necessários" },
];

export function HomePage() {
  const converter = useCurrencyConverter();

  return (
    <div className="app-shell">
      <Header />
      <main id="inicio">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">COTAÇÕES SEM COMPLICAÇÃO</span>
            <h1 id="hero-title">Converta moedas com <em>clareza.</em></h1>
            <p>
              Compare valores internacionais em poucos segundos. Uma ferramenta direta,
              confiável e feita para o seu dia a dia.
            </p>
            <div className="highlight-list" aria-label="Destaques do conversor">
              {highlights.map((highlight) => (
                <div className="highlight" key={highlight.label}>
                  <strong>{highlight.value}</strong>
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>
            <p className="hero-note">
              <span aria-hidden="true">✓</span>
              Sem taxas escondidas. Sem criação de conta.
            </p>
          </div>

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
        </section>

        <section className="feature-strip" aria-label="Como o conversor funciona">
          <article>
            <span className="feature-number">01</span>
            <div><h2>Escolha as moedas</h2><p>Converta entre as principais moedas internacionais.</p></div>
          </article>
          <article>
            <span className="feature-number">02</span>
            <div><h2>Consulte a cotação</h2><p>Usamos a taxa de referência disponível mais recente.</p></div>
          </article>
          <article>
            <span className="feature-number">03</span>
            <div><h2>Retome quando quiser</h2><p>Suas últimas conversões ficam salvas neste dispositivo.</p></div>
          </article>
        </section>

        <ConversionHistory
          history={converter.history}
          onReuse={converter.reuseConversion}
          onClear={converter.clearHistory}
        />

        <section className="about-card" aria-labelledby="about-title">
          <div>
            <span className="eyebrow">ENTENDA A COTAÇÃO</span>
            <h2 id="about-title">Um valor de referência, não uma oferta comercial.</h2>
          </div>
          <p>
            Bancos e corretoras podem incluir tarifas e margens próprias. Use o resultado para
            comparação e confirme o valor final antes de qualquer operação financeira.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
