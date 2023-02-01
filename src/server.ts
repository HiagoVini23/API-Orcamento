import express from 'express';
const PORT = 3333;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Inicialização do servidor
app.listen(3000, () => {
    console.log(`Aplicação executando na porta ${PORT}`);
});