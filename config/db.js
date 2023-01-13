import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
// const db = new Sequelize("railway", "root", "0wxWtWnoS85kAqHj3kG8", {
//   host: "containers-us-west-121.railway.app",
//   dialect: "mysql",
// });

const db = new Sequelize(process.env.MY_SQL_URL);

export default db;
