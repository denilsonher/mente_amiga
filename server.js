const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    console.log("Se recibió una petición en /");
    res.send("Servidor Mente Amiga funcionando 🚀");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});