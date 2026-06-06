import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));

app.get("/", (_, res) => {
  res.sendFile(
    path.join(process.cwd(), "public/index.html")
  );
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(
    `Servidor rodando em http://localhost:${PORT}`
  );
});