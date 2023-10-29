const connToMongo = require("./conn");
const { port } = require("./config");
const express = require("express");
var cors = require("cors");
const mongoose = require('mongoose');
const app = express();
connToMongo();

// to use request.body
app.use(express.json());

mongoose.connect(process.env.MOONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Available routes
app.use("/api/auth", cors(), require("./src/routes/auth"));
app.use("/api/employee", cors(), require("./src/routes/employee"));
app.use("/api/project", cors(), require("./src/routes/project"));
app.use("/api/task", cors(), require("./src/routes/tasks"));

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});