"use strict";

const optExpQuestion = 'Введите необязательную статью расходов в этом месяце',
      expValue = 'Во сколько обойдется?',
      expQuestion = 'Введите обязательную статью расходов в этом месяце';
    
let money = '', message = '', time = '';
let startCalcButton = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItems = document.getElementsByClassName('expenses-item'),
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeField = document.querySelector('.choose-income'),

    choosePercentField = document.querySelector('.choose-percent'),
    chooseSumField = document.querySelector('.choose-sum'),

    savingsFields = document.querySelector('#savings'),
    yearValueField = document.querySelector('.year-value'),
    dayValueField = document.querySelector('.day-value'),
    monthValueField = document.querySelector('.month-value'),
    applyButton = document.getElementsByTagName('button')[0],
    optExpButton =  document.getElementsByTagName('button')[1],
    calcButton = document.getElementsByTagName('button')[2];

    applyButton.disabled = true;
    optExpButton.disabled = true;
    calcButton.disabled = true;


let appData = {
        budget: money,
        date: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
        dailyBudgetSum: function(exp, optExp) {
        },
        checkSavings: function() {},
        monthlySavingIncome: function(dep,rate) {},
        Expenses: function(){},

        chooseIncome: function() {}
    };

    startCalcButton.addEventListener('click', function() {
        console.log('works');
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
        money = +prompt('Укажите ваш месячный бюджет', '');
    
        while(isNaN(money) || money == '' || money == null) {
            money = +prompt('Укажите ваш месячный бюджет', '');
        }
        
        appData.budget = money;
        appData.date = time;
        budgetValue.textContent = money.toFixed();
        yearValueField.value = new Date(Date.parse(time)).getFullYear();
        monthValueField.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValueField.value = new Date(Date.parse(time)).getDate();
    
        applyButton.disabled = false;
        optExpButton.disabled = false;
        calcButton.disabled = false;
    });
    
    applyButton.addEventListener('click', function() {
        let sum = 0;
        for (let i = 0; i < expensesItems.length; i++) {
            let reason = expensesItems[i].value,
                costs = expensesItems[++i].value;
            if( (typeof(costs)) != null && (typeof(reason)) === 'string' && (reason.length < 80) && (typeof(costs) != null )) {
            appData.expenses[reason] = costs;
            sum += +costs; 
            }
            else {
                i = i - 1;
            }
        }
        console.log(sum);
        expensesValue.textContent = sum;
    });
    
    optExpButton.addEventListener('click', function() {
        let sum = 0;
    
        for (let i = 0; i < optionalexpensesItem.length; i++) {
            let costs = optionalexpensesItem[i].value;
            if( (typeof(costs)) != null && (typeof(costs)) === 'string') {
            appData.optionalExpenses[i] = costs;
            sum += +costs; 
    
            }
            else {
                i = i - 1;
            }
        }
        optionalexpensesValue.textContent = sum;
    });
    
    calcButton.addEventListener('click', function() {
        let expSum = 0;
        for (const key in appData.expenses) {
            console.log(key + ' : ' + appData.expenses[key])
            expSum += +appData.expenses[key];
        }

        appData.dailyBudget = ((appData.budget-expSum)/30).toFixed();
        if (appData.dailyBudget < 100) {
            levelValue.innerHTML = '<span style="color:red">Низкий уровень дохода</span>';
        }
        else if (appData.dailyBudget > 100 && appData.dailyBudget < 200){
            levelValue.innerHTML = '<span style="color:orange">Средний уровень дохода</span>';
        }
        else levelValue.innerHTML = '<span style="color:green">Высокий уровень дохода</span>';
        daybudgetValue.textContent = Math.round(appData.dailyBudget);
     
    });
    
    incomeField.addEventListener('input', function(){
        let items = incomeField.value;
        incomeValue.textContent = incomeField.value;
        appData.income = items.split(', ');
    });
    
    savingsFields.addEventListener('click', function() {
        //alert('checked');
        if(appData.savings == true) {
            appData.savings = false;
            console.log(appData.savings)
        } else {
            appData.savings = true;
            console.log(appData.savings)
        }
    });
    
    chooseSumField.addEventListener('input', function() {
        if (appData.savings == true) {
            let sumValue = chooseSumField.value,
                rateValue = +choosePercentField.value;
                console.log(sumValue);
                appData.monthIncome = (sumValue/100/12) * rateValue;
                appData.yearIncome = (sumValue/100) * rateValue;

                console.log(appData.monthIncome +' / '+appData.yearIncome);

                monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
                yearsavingsValue.textContent = appData.yearIncome.toFixed(1);

        }
    });
    
    choosePercentField.addEventListener('input', function(){
        if (appData.savings == true) {
            let sumValue = +chooseSumField.value,
                rateValue = choosePercentField.value;

                appData.monthIncome = (sumValue/100/12) * rateValue;
                appData.yearIncome = (sumValue/100) * rateValue;

                console.log(appData.monthIncome +' / '+appData.yearIncome);

                monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
                yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

// let i = 0;
// expensesItems.forEach(i, value).addEventListener('onchange', function(){
//     console.log(expensesItems[i].value);
// });
 
