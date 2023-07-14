// Variables to store income and expense data
let incomeData = [];
let expenseData = [];


// Load data from local storage
function loadDataFromLocalStorage() {
    const storedIncomeData = localStorage.getItem('incomeData');
    if (storedIncomeData) {
      incomeData = JSON.parse(storedIncomeData);
    }
  
    const storedExpenseData = localStorage.getItem('expenseData');
    if (storedExpenseData) {
      expenseData = JSON.parse(storedExpenseData);
    }
  }

  // Save data to local storage
function saveDataToLocalStorage() {
    localStorage.setItem('incomeData', JSON.stringify(incomeData));
    localStorage.setItem('expenseData', JSON.stringify(expenseData));
  }

// Add income
function addIncome(event) {
  event.preventDefault();
  
  const description = document.querySelector('#income-description').value;
  const amount = parseFloat(document.querySelector('#income-amount').value);

  if (description && amount) {
    incomeData.push({ description, amount });
    updateBudget();
    updateIncomeList();
    clearInputFields('#income-form');
  }
}

// Add expense
function addExpense(event) {
  event.preventDefault();
  
  const description = document.querySelector('#expense-description').value;
  const amount = parseFloat(document.querySelector('#expense-amount').value);

  if (description && amount) {
    expenseData.push({ description, amount });
    updateBudget();
    updateExpenseList();
    clearInputFields('#expense-form');
  }
}

// Update budget summary
function updateBudget() {
  const totalIncome = calculateTotal(incomeData);
  const totalExpenses = calculateTotal(expenseData);
  const budget = totalIncome - totalExpenses;

  document.querySelector('#total-income').textContent = totalIncome;
  document.querySelector('#total-expenses').textContent = totalExpenses;
  document.querySelector('#budget').textContent = budget;
}

// Update income list
function updateIncomeList() {
  const incomeList = document.querySelector('#income-list');
  incomeList.innerHTML = '';

  incomeData.forEach((income, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${income.description}: $${income.amount}`;
    listItem.addEventListener('click', () => {
      incomeData.splice(index, 1);
      updateBudget();
      updateIncomeList();
    });
    incomeList.appendChild(listItem);
  });
}

// Update expense list
function updateExpenseList() {
  const expenseList = document.querySelector('#expense-list');
  expenseList.innerHTML = '';

  expenseData.forEach((expense, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${expense.description}: $${expense.amount}`;
    listItem.addEventListener('click', () => {
      expenseData.splice(index, 1);
      updateBudget();
      updateExpenseList();
    });
    expenseList.appendChild(listItem);
  });
}

// Calculate total
function calculateTotal(data) {
  return data.reduce((total, item) => total + item.amount, 0);
}

// Clear input fields
function clearInputFields(formId) {
  document.querySelector(`${formId} #income-description`).value = '';
  document.querySelector(`${formId} #income-amount`).value = '';
  document.querySelector(`${formId} #expense-description`).value = '';
  document.querySelector(`${formId} #expense-amount`).value = '';
}

// Event listeners
document.querySelector('#income-form').addEventListener('submit', addIncome);
document.querySelector('#expense-form').addEventListener('submit', addExpense);