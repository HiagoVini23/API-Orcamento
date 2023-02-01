import express from 'express';
import routes from './routes';

const PORT = 3333;

const app = express();

app.use(express.json());
app.use(routes);

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Aplicação executando na porta ${PORT}`);
});