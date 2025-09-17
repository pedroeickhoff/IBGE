import React, { useEffect, useState } from "react";
import PibChart from "../components/PibChart";
function PibPage() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/pib")
      .then((res) => res.json())
      .then((data) => setDados(data))
      .catch((err) => console.error("Erro ao buscar dados do PIB:", err));
  }, []);
  return (
    <div className="p-6">
      {" "}
      <h2 className="text-2xl font-semibold text-center mb-4"></h2>{" "}
      {dados.length > 0 ? (
        <PibChart dados={dados} />
      ) : (
        <p className="text-center">Carregando dados...</p>
      )}{" "}
    </div>
  );
}
export default PibPage;
