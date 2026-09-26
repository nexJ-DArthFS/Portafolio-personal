const http = require("http");
const fs = require("fs");

const servidor = http.createServer((req, res) => {

    let archivo = "";

    if (req.url === "/" || req.url === "/portafolio.html") {
        archivo = "portafolio.html";
    } else if (req.url === "/portafolio.css") {
        archivo = "portafolio.css";
    } else if (req.url === "/portafolio.js") {
        archivo = "portafolio.js";
    } else {
        res.writeHead(404);
        res.end("No encontrado");
        return;
    }

    fs.readFile(archivo, (error, contenido) => {

        if (error) {
            res.writeHead(500);
            res.end("Error al cargar el archivo");
            return;
        }

        let tipo = "text/plain";

        if (archivo.endsWith(".html")) tipo = "text/html";
        if (archivo.endsWith(".css")) tipo = "text/css";
        if (archivo.endsWith(".js")) tipo = "text/javascript";

        res.writeHead(200, {
            "Content-Type": `${tipo}; charset=utf-8`
        });

        res.end(contenido);
    });
});

servidor.listen(3000, () => {
    console.log("Servidor: http://localhost:3000");
});


if (red.url === "/herramientas") {
    res.writeHead(200, {
        "Content-type": "text/html" })
        res.end("<h1>Herramientas</h1>");
}