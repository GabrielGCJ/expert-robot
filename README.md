# Desafio Testes Unitarios: Chapter IV

Este é o primeiro desafio do chapter IV da Rocket Ignite, um programa de capacitação intensiva em desenvolvimento de software.

![image](https://user-images.githubusercontent.com/91347602/232902040-1eb12147-f163-4dd8-bf03-0d2cd96cefb7.png)

### Objetivos:

#### Nesse desafio, o objetivo é criar testes unitários para uma aplicação já pronta usando os conceitos ensinados nas aulas.

### Deve ser possivel:



Tudo isso para cada usuário em específico (o `username` será passado pelo header)

---
### Observação: Esta API foi desenvolvida para poder ser utilizada dentro de um container Docker. Para testar suas funções corretamente dentro de um container, é necessário instalar o aplicativo e configurá-lo adequadamente para utilização dentro de um container.


---

### Para rodar o projeto fora de um container Docker:

Clone este repositório em sua máquina:

`git clone https://github.com/GabrielGCJ/rocketseat-chapter-IV-desafioTestesUnitarios
.git`

Entre na pasta do projeto:

`cd rocketseat-chapter-IV-desafioTestesUnitarios
`

Instale o projeto:

`yarn install`

Rode o projeto:

`yarn dev`

Acesse o endereço localhost porta 3333 em seu navegador ou ferramenta de testes para interagir com a API:

http://localhost:3333

---

### Para rodar o projeto em um container Docker:

Clone este repositório em sua máquina:

`git clone https://github.com/GabrielGCJ/rocketseat-chapter-IV-desafioTestesUnitarios
.git`

Entre na pasta do projeto:

`cd rocketseat-chapter-IV-desafioTestesUnitarios`

Crie uma imagem e suba para o docker:

`docker build -t desafioTestesUnitarios .`

Rode a imagem que subiu para o Docker:

`docker run -p 3333:3333 desafioTestesUnitarios`

Acesse o endereço localhost porta 3333 em seu navegador ou ferramenta de testes para interagir com a API:

http://localhost:3333

---

### Para testar as utilidades da API é importante o uso de uma aplicação de API Client como Postman ou Insomnia.

![image](https://user-images.githubusercontent.com/91347602/232907354-81bfa735-8b77-45b0-a624-9964122a11bc.png)

### https://www.postman.com/downloads/

### https://insomnia.rest/download

---

## Rotas da aplicação:

#### Cada endpont é representado deve enviar um conjunto de parametros para funcionar corretamente.
#### Para te ajudar a entender melhor o funcionamento da aplicação como um todo, abaixo você verá uma descrição de cada rota e quais parâmetros recebe.

------

### POST `/api/v1/users`

A rota recebe `name`, `email` e `password` dentro do corpo da requisição, salva o usuário criado no banco e retorna uma resposta vazia com status `201`. 

------

### POST `/api/v1/sessions`

A rota recebe `email` e `password` no corpo da requisição e retorna os dados do usuário autenticado junto à um token JWT. 

<aside>
💡 Essa aplicação não possui refresh token, ou seja, o token criado dura apenas 1 dia e deve ser recriado após o período mencionado.
</aside>

------

### GET `/api/v1/profile`

A rota recebe um token JWT pelo header da requisição e retorna as informações do usuário autenticado.

------

### GET `/api/v1/statements/balance`

A rota recebe um token JWT pelo header da requisição e retorna uma lista com todas as operações de depósito e saque do usuário autenticado e também o saldo total numa propriedade `balance`.

------

### POST `/api/v1/statements/deposit`

A rota recebe um token JWT pelo header e `amount` e `description` no corpo da requisição, registra a operação de depósito do valor e retorna as informações do depósito criado com status `201`.

------

### POST `/api/v1/statements/withdraw`

A rota recebe um token JWT pelo header e `amount` e `description` no corpo da requisição, registra a operação de saque do valor (caso o usuário possua saldo válido) e retorna as informações do saque criado com status `201`. 

------

### GET `/api/v1/statements/:statement_id`

A rota recebe um token JWT pelo header e o id de uma operação registrada (saque ou depósito) na URL da rota e retorna as informações da operação encontrada.

------



# Desafio_Testes_de_Integracao

1- yarn

2- docker build -t nome_do_projeto .

3- docker-compose up

4- yarn typeorm migration:run

5- yarn test
