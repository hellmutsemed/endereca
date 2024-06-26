import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorManipulator from "./middlewares/errorManipulator.js";
import manipulator404 from "./middlewares/manipulator404.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());

routes(app);

app.use(manipulator404);

app.use(errorManipulator);

export default app;