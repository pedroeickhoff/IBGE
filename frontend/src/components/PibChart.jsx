import React from "react";
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

function PibChart({ dados }) {
  const data = dados.map((item) => ({
    ano: item.ano,
    pibTotal: parseFloat(item.pibTotal.replace(",", ".")) / 530,
    pibPerCapita: parseFloat(item.pibPerCapita.replace(",", ".")) / 5.3,
  }));

  // Função para formatar valores como moeda
  const formatarMoeda = (valor) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(valor);

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
      <h2
        style={{ color: "#58a6ff", textAlign: "center", marginBottom: "1rem" }}
      >
        📊 Evolução do PIB Brasileiro (1996 - 2022)
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
          <XAxis dataKey="ano" stroke="#c9d1d9" />
          <YAxis stroke="#c9d1d9" tickFormatter={formatarMoeda} />
          <Tooltip formatter={(value) => formatarMoeda(value)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="pibTotal"
            name="PIB Total (US$)"
            stroke="#2ea043"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="pibPerCapita"
            name="PIB per Capita (US$)"
            stroke="#f85149"
            strokeWidth={3}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PibChart;
