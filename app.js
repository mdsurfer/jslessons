"use strict";

let money = prompt('Укажите ваш месяный бюджет', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
let appData = {
        budget: money,
        date: time,
        expenses: {

        },
        optionalExpenses: {

        },
        income: [

        ],
        savings: false
    };

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

