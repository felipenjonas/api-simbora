# API
Rest-API feita com Node.js usando banco de dados SQLite;
Esta API será consumida por um web scraping em python para que seja inserido os dados no banco de dados, após isso, consumir os dados em uma aplicação web


##Passos do projeto:

- [ ] Iniciar o servidor ;
- [ ] Instalar e configurar libs para ajudar no desenvolvimento;
- [ ] Criar modelos (migrations) Usando Knex.js (Query builder)
- [ ] Criar controllers para inserção (POST) e recuperação (Get) dos dados
- [ ] Criar endpoints.
- [ ] Fazer deploy da aplicação
- [ ] Verificar o banco de dados hospedado;

## Doc API: EndPoints

prod_url = [Deploy_url](https://api-simbora.herokuapp.com/)

- HOME: Not Found 404

> prod_url/ 
- Attractions:

> - prod_url/attractions ||__GET__|| - Return All attractions
> - prod_url/attraction/insert_new - ||__POST__|| Return ID Attraction created

- Data to attractions [__req.body__]:
> {
>	"category":"teste",
    "attraction_name":"teste",
    "link_attraction":"teste",
    "total_assessment": 59,
    "excellent_score":10,
    "great_score":10,
    "fair_score":10,
    "bad_score":10,
    "horrible_score":19,
    "address":"teste",
    "web_site_external":"teste",
    "phone":"teste",
    "source_url":"teste"
>}  

