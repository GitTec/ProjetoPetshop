import express from "express"
import "reflect-metadata"
import { CriarConexao } from "./src/db/conexao"
import { rotaMedicamento } from "./src/modulos/medicamentos/rotas/medicamento"
import { rotaVeterinario } from "./src/modulos/veterinarios/rotas/veterinario"

const app = express()

CriarConexao()

app.use(express.json())
app.get('/', (req, res) => {
    res.send("<h1>Rodando</h1>")
})

app.use('/veterinarios', rotaVeterinario)
app.use('/medicamentos', rotaMedicamento)

app.listen(3333, () => {
    console.log("executando")
})