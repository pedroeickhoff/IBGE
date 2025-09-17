package IBGE.demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class PibService {

    public List<PibDTO> obterDadosPib() {
        var consumoApi = new ConsumoApi();
        ObjectMapper mapper = new ObjectMapper();
        List<PibDTO> dados = new ArrayList<>();

        for (int ano = 1996; ano < 2023; ano++) {
            try {
                String endBase = "https://servicodados.ibge.gov.br/api/v3/agregados/6784/periodos/";
                String endTotal = "/variaveis/9808?localidades=N1[all]";
                String endPerCapita = "/variaveis/9812?localidades=N1[all]";

                var jsonTotal = consumoApi.obterDados(endBase + ano + endTotal);
                var jsonPerCapita = consumoApi.obterDados(endBase + ano + endPerCapita);

                JsonNode rootTotal = mapper.readTree(jsonTotal);
                JsonNode rootPerCapita = mapper.readTree(jsonPerCapita);

                String pibTotal = rootTotal.get(0)
                        .get("resultados").get(0)
                        .get("series").get(0)
                        .get("serie").get(String.valueOf(ano)).asText();

                String pibPerCapita = rootPerCapita.get(0)
                        .get("resultados").get(0)
                        .get("series").get(0)
                        .get("serie").get(String.valueOf(ano)).asText();

                dados.add(new PibDTO(ano, pibTotal, pibPerCapita));
            } catch (Exception e) {
                System.out.println("Erro ao processar ano " + ano + ": " + e.getMessage());
            }
        }

        return dados;
    }
}

