# API-Orcamento

Desenvolvimento de um middleware que, além de retornar
uma listagem de usuários e produtos, também retorna um orçamento baseado 
na taxa do usuário selecionado e no valor dos produtos escolhidos.

### Endpoints
- /users - retorna a lista de usuários

- /products - retorna a lista de produtos

- /budget - retorna a lista de produtos de acordo com a taxa do usuário
<br><b>*Deve-se passar "idUser" e uma lista de "idProdutos" no body</b>

### Tabela User

| Nome | Tipo |
| --- | --- |
| id | auto-increment |
| name | string |
| tax | number |

### Tabela Product

| Nome | Tipo |
| --- | --- |
| id | auto-increment |
| name | string |
| price | number |

### Tecnologias Usadas:

- Typescript
- NodeJS
- Jest
