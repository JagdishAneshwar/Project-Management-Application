const mongo = require("mongoose");


const mongoURI = "mongodb+srv://aneshwarjagdish:FbhOWfhjTmQMeDe6@trendy.m4fetu3.mongodb.net/?retryWrites=true&w=majority";

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