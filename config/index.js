require('dotenv').config();
const {createPool}  = require ('mysql');
// create the connection to database
let db = createPool({
  host: process.env.dbHost, 
  user: process.env.dbUser,
  password: process.env.dbPwd,
  port:process.env.dbPort,
  database: process.env.dbName,
  multipleStatements:true
});
  
module.export= db;