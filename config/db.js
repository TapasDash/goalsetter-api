import { Sequelize } from "sequelize";

// const db = new Sequelize("railway", "root", "0wxWtWnoS85kAqHj3kG8", {
//   host: "containers-us-west-121.railway.app",
//   dialect: "mysql",
// });

const db = new Sequelize(
  "mysql://root:0wxWtWnoS85kAqHj3kG8@containers-us-west-121.railway.app:7628/railway"
);

export default db;
