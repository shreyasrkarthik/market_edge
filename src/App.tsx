import React from 'react';

const App: React.FC = () => (
  <>
    <header className="hero">
      <h1>StockFlyer Global Equity Analysis</h1>
      <p>Deep-dive insights into global equities right at your fingertips.</p>
      <button className="cta">Join Now</button>
    </header>
    <section className="features">
      <div className="feature-card">
        <h3>Real-Time Screener</h3>
        <p>Filter stocks across world markets using live market data.</p>
      </div>
      <div className="feature-card">
        <h3>AI Market Sentiment</h3>
        <p>Natural-language summaries of macro trends.</p>
      </div>
      <div className="feature-card">
        <h3>Model Portfolios</h3>
        <p>Curated lists built by expert analysts.</p>
      </div>
    </section>
    <section className="pricing">
      <div className="card">
        <h2>Monthly Access</h2>
        <p className="price">$49/mo</p>
        <button className="cta">Get Access</button>
      </div>
    </section>
    <footer className="footer">
      <p>© 2025 StockFlyer. All rights reserved.</p>
    </footer>
  </>
);

export default App;
