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
