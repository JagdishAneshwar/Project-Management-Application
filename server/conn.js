const mongo = require("mongoose");

//mongodb+srv://Jagdish:dF5Y51Bz5dknw7wn@cluster0.jmpfje9.mongodb.net/test
const mongoURI = process.env.MOONGODB_URL;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connToMongo = async () => {
  await mongo.connect(mongoURI, connectionParams).then(() => {
    console.log("Successfully! connected with database");
  });
};

module.exports = connToMongo;