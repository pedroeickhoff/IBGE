# IBGE - Consumo de API

## Pré-requisitos
- É necessário ter o **Docker** instalado no computador.

## Passo a passo para execução

1. Clone este repositório na pasta desejada:
   git clone "https://github.com/pedroeickhoff/IBGE"

2. Entre na pasta criada e execute o comando:
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

5. Agora, em outro dispositivo conectado à mesma rede, acesse:
   http://SEUIP:3000
