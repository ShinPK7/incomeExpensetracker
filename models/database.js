const Database = require("better-sqlite3");
const db = new Database("database.sqlite", { varbose: console.log });

const createTableWithSeed = () => {
    const createTableQuery =
     "CREATE TABLE IF NOT EXISTS incomes ('id' INTEGER PRIMARY KEY AUTOINCREMENT, 'channel' TEXT NOT NULL, 'value' INTEGER NOT NULL)";
    const createSeedDataQuery = 
    "INSERT OR IGNORE INTO incomes ('id','channel', 'value') VALUES (1, 'Salary',65000)"
    const createexpenseTableQuery =
     "CREATE TABLE IF NOT EXISTS expenses ('id' INTEGER PRIMARY KEY AUTOINCREMENT, 'channel' TEXT NOT NULL, 'value' INTEGER NOT NULL)";
    const createexpenseSeedDataQuery = 
    "INSERT OR IGNORE INTO expenses ('id','channel','value') VALUES (1, 'Computer Installment', 5000)";
    db.exec(createTableQuery)
    db.exec(createSeedDataQuery);
    db.exec(createexpenseTableQuery);
    db.exec(createexpenseSeedDataQuery)
    console.log("Table incomes created Successfully!");
};



module.exports = {
    db,
    createTableWithSeed,
};