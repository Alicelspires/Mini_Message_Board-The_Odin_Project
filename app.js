const express = require("express");
const app = express();
const path = require("node:path");
const postItRouter = require("./routes/postItRouter");

const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: false }));

// Rotas
app.use("/", postItRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
