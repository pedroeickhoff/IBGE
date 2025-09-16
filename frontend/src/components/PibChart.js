import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PibChart = () => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("/api/pib")
      .then((res) => res.json())
      .then((data) => {
        console.log("Dados recebidos:", data);
        setDados(data);
      })
      .catch((err) => console.error("Erro ao buscar dados do PIB:", err));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        backgroundColor: "#161b22",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 0 10px #58a6ff",
      }}
    >
      <h2 style={{ color: "#58a6ff", textAlign: "center" }}>
        📊 Evolução do PIB Brasileiro
      </h2>
      {Array.isArray(dados) && dados.length > 0 ? (
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={dados}>
            <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
            <XAxis dataKey="ano" stroke="#c9d1d9" />
            <YAxis stroke="#c9d1d9" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pibTotal"
              name="PIB Total (US$)"
              stroke="#2ea043"
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="pibPerCapita"
              name="PIB per Capita (US$)"
              stroke="#f85149"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p style={{ color: "#c9d1d9", textAlign: "center" }}>
          Carregando dados ou nenhum dado disponível.
        </p>
      )}
    </div>
  );
};

export default PibChart;
