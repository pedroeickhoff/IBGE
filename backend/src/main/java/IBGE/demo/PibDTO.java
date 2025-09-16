package IBGE.demo;

public class PibDTO {
    private int ano;
    private String pibTotal;
    private String pibPerCapita;

    public PibDTO(int ano, String pibTotal, String pibPerCapita) {
        this.ano = ano;
        this.pibTotal = pibTotal;
        this.pibPerCapita = pibPerCapita;
    }

    public int getAno() {
        return ano;
    }

    public String getPibTotal() {
        return pibTotal;
    }

    public String getPibPerCapita() {
        return pibPerCapita;
    }
}
