import express from "express";
import dotenv from "dotenv";
import creepypastaRoutes from "./src/routes/creepypastaRoutes.js"

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Servidor funcionando...");
});

app.use("/creepypastas", creepypastaRoutes)

app.listen(serverPort, () => {
    console.log(`Servidor funcionando em http://localhost:${serverPort}.`);
});