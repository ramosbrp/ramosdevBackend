import express, { Request, Response } from 'express';


const routes = require('./routes');

const app = express();


app.use(routes);
app.listen(3000, ()=> {
    console.log('Servidor Rodando na porta 3000');
    
});