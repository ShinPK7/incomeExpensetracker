const{Income} = require("../models/income");
const {Expense} = require("../models/expense");



async function getHomePage(req,res, next) {
    const incomes = await Income.findAll();
    const expenses = await Expense.findAll();

 const incomesdata = [];
 const expensesData = [];
 let spentSoFar = 0;
 let budget = 0;



    for(let i = 0; i < incomes.length; i++) {
        // console.log("index: ", i)
        // console.log("item: ", incomes[i]);
        incomesdata.push({
            id: incomes[i].dataValues.id,
            channelName: incomes[i].dataValues.channel,
            value: incomes[i].dataValues.value
        });
        budget += incomes[i].dataValues.value
    }
for (let i = 0; i < expenses.length; i++){
    expensesData.push({
        id: expenses[i].dataValues.id,
        channelName: expenses[i].dataValues.channel,
        value: expenses[i].dataValues.value
    })
    spentSoFar += expenses [i].dataValues.value
}
const remaining = budget - spentSoFar;
    res.render("home", {
        incomes: incomesdata,
        expenses: expensesData,
        budget: budget,
        remaining: remaining,
        spentSoFar: spentSoFar,
   });
}

module.exports = { getHomePage }
