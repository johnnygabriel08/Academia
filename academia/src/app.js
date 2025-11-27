import express from "express";
import path from "path";

// Rotas
import alunosRoutes from "./routes/alunos.js";
import matriculaRoutes from "./routes/matricula.js";
import planosRoutes from "./routes/planos.js";

const app = express();
const PORT = 8080;

app.use(express.json());

// Corrige caminhos
const __dirname = path.resolve();

// Libera a pasta public
app.use(express.static(path.join(__dirname, "Academia/academia/public")));

// Usa as rotas da API
app.use("/api/alunos", alunosRoutes);
app.use("/api/matricula", matriculaRoutes);
app.use("/api/planos", planosRoutes);

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
