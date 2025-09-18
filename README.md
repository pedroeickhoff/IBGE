# IBGE - Consumo de API

## Pré-requisitos
- É necessário ter o **Docker** instalado no computador.

## Passo a passo para execução

1. Clone este repositório na pasta desejada:
   git clone "https://github.com/pedroeickhoff/IBGE"
   ou baixe o arquivo .zip direto do github

3. Entre na pasta criada e execute o comando:
   docker compose up --build

   Na primeira execução, a criação do container pode demorar um pouco.
   Note que o teste unitário já é realizado automaticamente durante o build do container.

4. Após a conclusão, a aplicação estará disponível em:
   http://localhost:3000

## Acesso em outros dispositivos (desktop ou móvel)

1. Abra o Prompt de Comando no computador que está rodando o container e execute:
   ipconfig

2. Localize a seção Adaptador de Rede sem Fio Wi-Fi e copie o valor do campo:
   Endereço IPv4. . . . . . . . . . . . . : SEUIP

3. Substitua "localhost" por este IP nos seguintes arquivos:
   - frontend/src/pages/PibPage.jsx
   - frontend/src/pages/TabelaPage.jsx

   Dentro desses arquivos já existe uma explicação sobre onde realizar a alteração.

4. Após salvar as alterações, é necessário parar e subir novamente os containers para que a aplicação seja acessível em outros dispositivos. Para isso, execute:
   
   docker compose down
   
   docker compose up --build

6. Agora, em outro dispositivo conectado à mesma rede, acesse:
   http://SEUIP:3000

---

## Decisões de Design e Tecnologias Utilizadas

1. **Backend em Java com Spring Boot**
   - Escolhido por fornecer uma estrutura robusta e produtiva para criação de APIs REST.
   - O uso de **Spring Web** simplifica a criação de controllers e a exposição dos dados em JSON.
   - O padrão **Camadas (Controller → Service → DTO)** foi adotado para separar responsabilidades, tornando o código mais organizado e fácil de manter.

2. **Frontend em React**
   - Escolhido por sua flexibilidade na construção de interfaces modernas e responsivas.
   - O uso de **React Router** permite navegação entre páginas (gráfico e tabela) sem recarregar a aplicação.
   - O gráfico foi implementado com a biblioteca **Recharts**, que é simples, declarativa e bem integrada ao React.
  
3. **Design**
   - Utilizei um design "dark" que lembra a bolsa de valores pois trabalhei com gráficos sobre variação do PIB em Dólar ao longo dos anos, fazendo essa refência ao mercado financeiro.
