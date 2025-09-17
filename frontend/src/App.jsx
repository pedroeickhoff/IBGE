import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PibPage from "./pages/PibPage";
import TabelaPage from "./pages/TabelaPage";

function App() {
  return (
    <Router>
      <div className="dashboard">
        <header className="header">
          <h1>📈 IBGE Market Dashboard</h1>
        </header>

        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <div style={{ textAlign: "center" }}>
                  <Link to="/pib">
                    <button className="access-button">
                      Ver Gráfico do PIB
                    </button>
                  </Link>
                  <Link to="/tabela">
                    <button
                      className="access-button"
                      style={{ marginLeft: "1rem" }}
                    >
                      Ver Tabela do PIB
                    </button>
                  </Link>
                </div>
              }
            />
            <Route path="/pib" element={<PibPage />} />
            <Route path="/tabela" element={<TabelaPage />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 IBGE Finance Tracker</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
