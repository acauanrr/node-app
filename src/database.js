// ------------------ MONGODB ---------------------
const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://localhost/notes-app"; // <-- VOCÊ DEVE TER UM MONGODB RODANDO LOCALMENTE!!!!

// const MONGODB_URI = 'mongodb+srv://'+process.env.MONGODB_USER+':'+process.env.MONGODB_PASSWORD+'@'+process.env.MONGODB_HOST+'/'+process.env.MONGODB_DATABASE+'?retryWrites=true&w=majority';

mongoose
  .connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("Mongodb is connected to", db.connection.host))
  .catch((err) => console.log(err));

// ------------------ NEO4J ---------------------
//Configuração neo4j -- https://adamcowley.co.uk/javascript/using-the-neo4j-driver-with-nodejs/
// const neo4j = require("neo4j-driver");
// const driver = new neo4j.driver(
//   "neo4j://localhost:7687",
//   neo4j.auth.basic("neo4j", "node-app")
// ); //("usuario", "senha")
// console.log(`Neo4j Database running at localhost:7687`);
// const session = driver.session({
//   database: "neo4j", // <-- Connect to the database `neo4j`
// });

// const neo = async () => {
//   const results = await session.run("MATCH (n:Pessoa) RETURN n", {});
//   session.close();

//   //console.log("RESULT", !results ? 0 : results.records.length);

//   const pessoas = [];

//   results.records.forEach((res) => {
//     //    console.log(res.get(0).properties)
//     pessoas.push({
//       nome: res.get(0).properties.nome,
//       idade: res.get(0).properties.idade.low,
//     });
//   });

//   console.log(pessoas);
// };

// neo();
