# Banco de Dados - Calindra

- Desafio Calindra, Desenvolver uma API que receba dois ou mais endereços. ✔️
- Resolva a geolocalização entre os endereços utilizando a API do Google. ❌
- Após isso, com a latitude e longitude em mãos dos endereços, implementar o algoritmo de
cálculo de distância Euclidiana e aplicar em todas as combinações de endereços. ❌
- Retorne as distâncias calculadas entre os todos os endereços e indique os endereços
mais próximos e também os endereços mais distantes. ❌

# Ferramentas Utilizadas:

- VScode
- Insomnia
- Docker
- MongoDBCompass

# Bibliotecas utilizadas:

- EXPRESS (criar server)
- mongoose (auxiliar na conecção e criação com o mongodb)
- dotenv (configurações globais)
- node-geocoder (auxilio na parte dos códigos e geolocalização)

# Bibliotecas utilizadas na parte dev:

- nodemon (auxílio server)

# POST - enviar dados
```http
  localhost:5000/api/V1/Register
```

corpo exemplo:
```js
[{
 "Street": "Av. Rio Branco",
 "Number": 1,
 "District": "Centro",
 "City": "Rio de janeiro",
 "State": "RJ", 
 "CEP": "20090003"
},
{
 "Street": "Praça Mal. Âncora",
 "Number": 122,
 "District": "Centro",
 "City": "Rio de janeiro",
 "State": "RJ", 
 "CEP": "20021200"
}]
```



# Docker - MongoDB
- Criei um container no docker para me auxiliar com o banco de dados, utilizei o seguinte comando: 
`docker run -d -p 27018:27017 -v C:/local_do_arquivo/OndeIreiFazerOBackup:/data/db --name banco_calindra -d mongo`
- Alterei a porta para **27018** para me dar um melhor controle e evitar alguns conflitos.
- **C:/local_do_arquivo/OndeIreiFazerOBackup:/data/db** - Local onde está armazenando um backup do banco de dados do docker/mongodb

# Screenshots - Insomnia
![App Screenshot](/ImageGit/Post-Banco-Calindra.PNG)