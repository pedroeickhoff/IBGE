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
    pibPerCapita: parseFloat(item.pibPerCapita.replace(",", ".")) / 5.3, // divide por 5.3 para converter para dólar
  }));

  // Descobrir o valor máximo para ajustar o eixo
  const maxPib = Math.max(...data.map((d) => d.pibTotal));

  // Função para formatar valores em milhares (K) ou milhões (M)
  const formatarMoeda = (valor) => {
    if (valor >= 1_000_000) {
      return `$${(valor / 1_000_000).toFixed(1)}M`;
    } else if (valor >= 1_000) {
      return `$${(valor / 1_000).toFixed(0)}K`;
    }
    return `$${valor}`;
  };

  return (
    <div
      className="chart-container"
      style={{
        width: "100%",
        maxWidth: "100vw",
        height: "500px",
        maxHeight: "80vh",
        backgroundColor: "#161b22",
        padding: "1rem",
        borderRadius: "12px",
        boxShadow: "0 0 10px #58a6ff",
        boxSizing: "border-box",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          color: "#58a6ff",
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "clamp(1.2rem, 4vw, 1.8rem)",
        }}
      >
        📊 Evolução do PIB Brasileiro (1996 - 2022)
      </h2>

      {/* Configurações do gráfico recharts*/}

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
          <XAxis dataKey="ano" stroke="#c9d1d9" />
          <YAxis
            stroke="#c9d1d9"
            tickFormatter={formatarMoeda}
            domain={[0, Math.ceil(maxPib / 5000) * 5000]}
            tickCount={8}
          />
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
