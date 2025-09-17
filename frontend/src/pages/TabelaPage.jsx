import React, { useEffect, useState } from "react";

function TabelaPage() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch("http://192.168.15.117:8080/api/pib")
      .then((res) => res.json())
      .then((data) => setDados(data))
      .catch((err) => console.error("Erro ao buscar dados do PIB:", err));
  }, []);

  // Função para formatar como moeda em dólar
  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(valor);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center text-[#58a6ff] mb-6">
        📋 Tabela de PIB por Ano
      </h2>
      <div className="overflow-x-auto">
        <table className="pib-table min-w-full bg-[#161b22] text-[#c9d1d9]">
          <thead>
            <tr>
              <th>Ano</th>
              <th>PIB Total em milhões (US$)</th>
              <th>PIB per Capita (US$)</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr
                key={item.ano}
                className={index % 2 === 0 ? "bg-[#161b22]" : "bg-[#0d1117]"}
              >
                <td className="text-center font-mono">{item.ano}</td>
                <td className="text-right font-mono">
                  {formatarMoeda(
                    parseFloat(item.pibTotal.replace(",", ".")) / 5.3
                  )}
                </td>
                <td className="text-right font-mono">
                  {formatarMoeda(
                    parseFloat(item.pibPerCapita.replace(",", ".")) / 5.3
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TabelaPage;
