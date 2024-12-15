const ctx = document.getElementById('incomes-chart');
// console.log(ctx.dataset);
const ctxexpenses = document.getElementById("expenses-chart");
const incomes = JSON.parse(ctx.dataset.incomes);
// console.log("incomes: ", incomes);
const expenses = JSON.parse(ctxexpenses.dataset.expenses)

const labels = incomes.map(function (item) {
  return item.channelName;
});
const expenseLabels = expenses.map(function (item){
  return item.channelName;
})
const values = incomes.map(function (item){
  return item.value;
})
// console.log("values:", values);
const expenseValue = expenses.map(function(item){
  return item.value;
});


const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function getCharacter(index) {
	return hexCharacters[index]
}

function generateNewColor(){
    let hexColorRep = "#"

    for (let position = 0; position < 6; position++){
      const randomPosition = Math.floor(Math.random()* hexCharacters.length);
        hexColorRep += getCharacter(randomPosition );
    }
	
	return hexColorRep

}
console.log( generateNewColor());

const colors = incomes.map(function(){
  return generateNewColor();
});

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [
        {
        label: "My First Dataset",
        data: values,
        backgroundColor: colors,
        borderWidth: 1
      }]
    },
    // options: {
    //   scales: {
    //     y: {
    //       beginAtZero: true
    //     }
    //   }
    // }
  });

  const expenseColors = expenses.map(function(){
    return generateNewColor();
  })

  new Chart(ctxexpenses, {
    type: "doughnut",
    data: {
      labels: expenseLabels,
      datasets: [
        {
          backgroundColor: expenseColors,
          data: expenseValue,
          hoeveroffset: 4,
        },

      ],
    },
  })