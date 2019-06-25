"use strict";

let money = prompt('Укажите ваш месяный бюджет', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
let appData = {
        budget: money,
        date: time,
        expenses: {
            // costUnitOne: '',
            // costUnitTwo: ''
        },
        optionalExpenses: {},
        income: [],
        savings: false
    };
// console.log(money, time);
// console.log(appdata);
// let qOne = appData.expenses['costUnitOne'];
// let qTwo = appData.expenses['costUnitTwo'];
let qOne = prompt('Введите обязательную статью расходов в этом месяце');
let aOne = prompt('Во сколько обойдется?');
let qTwo = prompt('Введите обязательную статью расходов в этом месяце');
let aTwo = prompt('Во сколько обойдется?');
appData.expenses[qOne] = aOne;
appData.expenses[qTwo] = aTwo;

alert('Ваш дневной бюджет равен ' + dailyBudget());
console.log(appData.expenses);

function dailyBudget() {
    let averageBudget = (aOne + aTwo)/30;
    return averageBudget;
}