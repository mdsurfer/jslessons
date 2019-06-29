"use strict";

let money = '', message = '', time = '';
const optExpQuestion = 'Введите необязательную статью расходов в этом месяце',
      expValue = 'Во сколько обойдется?',
      expQuestion = 'Введите обязательную статью расходов в этом месяце';
    

function colectData() {
    money = +prompt('Укажите ваш месяный бюджет', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Укажите ваш месяный бюджет', '');
    }

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    appData.dalyBuget = money;
};

let appData = {
        budget: money,
        date: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
        dailyBudgetSum: function() {
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
        },
        checkSavings: function() {
            var savingSum, savingRate;
            appData.savings = confirm('У вас есть сбережения?');
            if ( appData.savings == true ){
                savingSum = +prompt('Введите ссуму сбережений','');

            while(isNaN(savingSum) || savingSum == '' || savingSum == null){
                savingSum = +prompt('Укажите ваш месяный бюджет', '');
            }
            while(isNaN(savingRate) || savingRate == '' || savingRate == null){
                savingRate = +prompt('Укажите процентную ставку (%/год)', '');
            }
            alert('Ваш ежемесячных доход с депозита: ' + monthlySavingIncome(savingSum,savingRate));
            }
        },
        monthlySavingIncome: function(dep,rate) {
            let savingRate = rate;
            let savingDeposit = dep;
            appData.monthIncome = (savingRate/100/12) * savingDeposit;
            return monthIncome;
        },
        Expenses: function(iterations, objectProperty, optQ,optV) {
            let n = iterations;
            for (let i = 0; i < n; i++) {
                let reason = prompt(optQ, '');
                let costs = +prompt(optV,'');
                if( (typeof(costs)) != null && (typeof(reason)) === 'string' && (reason.length < 80) && (typeof(costs) != null )) {
                objectProperty[reason] = costs;
                }
                // console.log(n);
                // console.log(reason);
                // console.log(costs);
                // console.log(objectProperty);  
            }
        },
        chooseIncome: function() {
            let items = prompt('Введите возможные источники дохода через запятую', '');
            //console.log(typeof(items) + ' : ' + items);

                if( (typeof(items)) != null && (typeof(items)) === 'string') {
                    appData.income = items.split(', ');
                }

            
            let moreItems = prompt('Возможно, что-то еще?', '');
            if( (typeof(moreItems)) != null && (typeof(moreItems)) === 'string') {
                appData.income.push(moreItems);
            }
            console.log(appData.income);

            appData.income.forEach(function(item, i) {
                console.log((i+1) + ':' + item);
            });
        }
    };

//colectData();

appData.chooseIncome();

for(let key in appData) {
    console.log('Key: ' + key + '|' + 'Value:' + appData[key]);
}
//appData.Expenses(2, appData.expenses, expQuestion, expValue );

//appData.Expenses(3, appData.optionalExpenses, optExpQuestion, expValue );

let x = 5;
console.log(x++);