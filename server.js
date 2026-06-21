const express = require("express");

const app = express();

app.use(express.json());

// Servir archivos estáticos
app.use(express.static("public"));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});