const path = require("path");
const express = require("express");
const chalk = require("chalk");
const {createTableWithSeed} = require ()


const homeRoutes = require("./routes/home");
const incomeRoutes = require("./routes/incomes");
const summaryRoutes = require("./routes/summary");
const expenseRoutes =require("./routes/expense");

const {createTableWithSeed } = require("./models/database");

const app = express();
const PORT = 3000;
createTableWithSeed();
app.set('view engine', "ejs");
app.set("views", "views");

app.use(express.json()) // utilizes the body-parser package
app.use(express.urlencoded({extended: true })); //Parse URl-encoded bodies
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
app.use(incomeRoutes);
app.use(summaryRoutes);
app.use(expenseRoutes);

app.listen(process.env.PORT || PORT, function(){
    console.log(
        `Income Exprnse Tracker app is running on >>>
     ${chalk.blue("http://localhost:3000"
     )}`);
    
})
