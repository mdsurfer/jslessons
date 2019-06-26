"use strict";

let money = '', message = '', time = '';
let optExpQuestion = 'Введите необязательную статью расходов в этом месяце',
    expValue = 'Во сколько обойдется?',
    expQuestion = 'Введите обязательную статью расходов в этом месяце';
    
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

colectData();

alert(dailyBudgetSum());

checkSavings();

function colectData() {
    money = +prompt('Укажите ваш месяный бюджет', '');

    while(isNaN(money) || money == '' || money == null){
        money = +prompt('Укажите ваш месяный бюджет', '');
    }
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    Expenses(2, appData.expenses, expQuestion, expValue );

    appData.dalyBuget = money;
};

function dailyBudgetSum() {
    appData.dailyBudget = money/30;

    if (appData.dailyBudget < 100) {
        message = '[Низкий уровень дохода]';
    }
    
    else if (appData.dailyBudget > 100 && appData.dailyBudget < 200){
        message = '[Средний уровень дохода]';
    }
    
    else message = '[Высокий уровень дохода]';

    var messageAlert = 'Ваш дневной бюджет равен ' + Math.round(appData.dailyBudget) + ' ' + message;
    
    return messageAlert;
}

function checkSavings() {
    var savingSum, savingRate;
    appData.savings = confirm('У вас есть сбережения?');
    if ( appData.savings == true ){
        savingSum = +prompt('Введите ссуму сбережений','');

        while(isNaN(savingSum) || savingSum == '' || savingSum == null){
            savingSum = +prompt('Укажите ваш месячный бюджет', '');
        }
        while(isNaN(savingRate) || savingRate == '' || savingRate == null){
            savingRate = +prompt('Укажите процентную ставку (%/год)', '');

        }
    
        alert('Ваш ежемесячных доход с депозита: ' + monthlySavingIncome(savingSum,savingRate));
    }
}

function monthlySavingIncome(dep,rate) {
    let savingRate = rate;
    let savingDeposit = dep;
    appData.monthIncome = (savingRate/100/12) * savingDeposit;
    return appData.monthIncome;
}

Expenses(3, appData.optionalExpenses, optExpQuestion, expValue );

function Expenses(iterations, objectProperty, optQ,optV) {

    let n = iterations;
    for (let i = 0; i < n; i++) {
        let reason = prompt(optQ, '');
        let costs = +prompt(optV,'');
        if( (typeof(costs)) != null && (typeof(reason)) === 'string' && (reason.length < 80) && (typeof(costs) != null )) {
        objectProperty[reason] = costs;
        }
        console.log(n);
        console.log(reason);
        console.log(costs);
        console.log(objectProperty);
    }
    
}