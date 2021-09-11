import express, { Request, Response } from 'express';
const mongoose =  require ('mongoose');
const cors = require('cors');
const routes = require ('./routes');
const dotenv = require ('dotenv');

dotenv.config();


const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
const uri = process.env.URI


mongoose.connect(`${uri}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, function (err: Error) {
    if(err) {
        console.log(err);
    } else {
        console.log('MongoDB CONECTADO com sucesso!');     
    };
});


app.use(routes);

app.listen(3000, ()=> {
    console.log(`Server runing on port ${port}`);
    
});