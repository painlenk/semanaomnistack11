const express = require('express');
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

/*
    Rotas / Recursos

    Métodos HTTP:

    GET: buscar uma informacao no BACK-END
    POST: Cirar uma informação no BACK-END
    PUT Alterar uma informação no BACK-END
    DELETE: Deletar uma informação no BACK-END

    Tipos de Parâmetros:

    Query Params: Parâmetros nomeados enviados na rota  após **?**( filtro,paginação)
    Route params: Parâmetros utilizados para identificar recursos
    Request Body: corpo da requisição, utilizado para criar ou alterar recursos 
    
*/




app.listen(3333);

