# 📊 IBGE - Consumo de API  

Este projeto consiste em um **backend em Spring Boot** e um **frontend em React** para consumir e exibir dados da API do IBGE.  

---

## 🚀 Passo a passo para executar a aplicação  

### 1. Clone o repositório  
Escolha uma pasta de preferência e rode o comando:  
git clone https://github.com/pedroeickhoff/IBGE/tree/main  

---

### 2. Inicie o **backend**  
Abra um terminal na pasta criada e navegue até a pasta **backend**:  
cd backend  

#### 🔹 (Opcional) Rodar teste unitário de consumo da API  
./mvnw -Dtest=PibServiceTest test  

#### 🔹 Rodar a aplicação backend  
./mvnw spring-boot:run  

---

### 3. Inicie o **frontend**  
Abra outro terminal na pasta criada e navegue até a pasta **frontend**:  
cd frontend  

Inicie o programa:  
npm start  

A aplicação será iniciada em:  
👉 http://localhost:3000  

---

### 4. 🌐 Acessando via dispositivo móvel (opcional)  
Caso queira acessar em outro dispositivo conectado à mesma rede:  

1. Abra um novo terminal e rode:  
   ipconfig  
2. Procure por:  
   Adaptador de Rede sem Fio Wi-Fi  
   Endereço IPv4. . . . . . . . . . . . . . . . : SEU ENDEREÇO  
3. No dispositivo móvel, acesse:  
   SEUENDEREÇOIPV4:3000  
