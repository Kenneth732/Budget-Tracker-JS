// Variables to store income and expense data
let incomeData = [];
let expenseData = [];

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
