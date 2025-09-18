package IBGE.demo;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.Test;

public class PibServiceTest {

    @Test
    void deveProcessarJsonFakeDoIbge() throws Exception {
        // JSON fake parecido com o do IBGE (Total e Per Capita para 1996)
        String jsonTotal = """
                [
                    {
                        "id": "9808",
                        "variavel": "PIB - valores correntes",
                        "unidade": "Milhões de Reais",
                        "resultados": [
                            {
                                "classificacoes": [],
                                "series": [
                                    {
                                        "localidade": {
                                            "id": "1",
                                            "nivel": { "id": "N1", "nome": "Brasil" },
                                            "nome": "Brasil"
                                        },
                                        "serie": { "1996": "854764" }
                                    }
                                ]
                            }
                        ]
                    }
                ]
                """;

        String jsonPerCapita = """
                [
                    {
                        "id": "9812",
                        "variavel": "PIB per capita - valores correntes",
                        "unidade": "Reais",
                        "resultados": [
                            {
                                "classificacoes": [],
                                "series": [
                                    {
                                        "localidade": {
                                            "id": "1",
                                            "nivel": { "id": "N1", "nome": "Brasil" },
                                            "nome": "Brasil"
                                        },
                                        "serie": { "1996": "5219.36" }
                                    }
                                ]
                            }
                        ]
                    }
                ]
                """;

        // Cria uma versão fake de ConsumoApi para devolver os JSONs fixos
        ConsumoApi consumoApiFake = new ConsumoApi() {
            @Override
            public String obterDados(String endereco) {
                if (endereco.contains("9808")) {
                    return jsonTotal;
                } else {
                    return jsonPerCapita;
                }
            }
        };

        // Usa o PibService original, mas trocando o consumoApi por reflexão
        PibService service = new PibService() {
            @Override
            public List<PibDTO> obterDadosPib() {
                this.consumoApi = consumoApiFake; // injeta fake
                return super.obterDadosPib();
            }

            private ConsumoApi consumoApi;
        };

        List<PibDTO> dados = service.obterDadosPib();

        assertNotNull(dados);
        assertFalse(dados.isEmpty());

        // Deve conter o ano 1996 com os valores corretos
        PibDTO primeiro = dados.get(0);
        assertEquals(1996, primeiro.getAno());
        assertEquals("854764", primeiro.getPibTotal());
        assertEquals("5219.36", primeiro.getPibPerCapita());
    }
}
