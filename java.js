let money = prompt("Vash budjet?", "");
let time = prompt("Введите дату в формате ЮЮЮЮ-ММ-ДД", "");
let appData = {};
appData.timeData = time;
appData.money =  money;
let howMeny = prompt("Vvedite obiazatelnu statu rashodov", "");
let howMuch = prompt("Vo skolko oboidetsa", "");
appData.expenses = {howMeny: howMuch};
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;
alert(money / 30);
