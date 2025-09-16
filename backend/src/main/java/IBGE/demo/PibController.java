package IBGE.demo;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PibController {

    private final PibService pibService;

    public PibController(PibService pibService) {
        this.pibService = pibService;
    }

    @GetMapping("api/pib")
    public List<PibDTO> getDadosPib() {
        return pibService.obterDadosPib();
    }
}