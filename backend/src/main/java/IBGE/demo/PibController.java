package IBGE.demo;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class PibController {

    private final PibService pibService;

    public PibController(PibService pibService) {     //Chama o PibService onde serão consumidos os dados da API
        this.pibService = pibService;
    }

    @GetMapping("api/pib")
    public List<PibDTO> getDadosPib() {  // envia as informações para o endereço api/pib que posteriormente será capturado pelo frontend
        return pibService.obterDadosPib();
    }
}