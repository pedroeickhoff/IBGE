import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PibChart from "./components/PibChart";
import PibPage from "./pages/PibPage";

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
                </div>
              }
            />
            <Route path="/pib" element={<PibPage />} />
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
