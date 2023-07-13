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

}
