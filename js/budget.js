document.getElementById("calculate-btn").addEventListener("click", function () {
  const expencePerPlayer = document.getElementById("expense-calculation");
  const expenseAmountString = expencePerPlayer.value;
  const expenseAmount = parseFloat(expenseAmountString);

  const totalExpense = document.getElementById("expense");

  totalExpense.innerText = expenseAmount;

  const totalExpensePlayer = expenseAmount * 5;
  totalExpense.innerText = totalExpensePlayer;

  expencePerPlayer.value = "";

  document.getElementById("btn-total").addEventListener("click", function () {
    const managerCost = document.getElementById("manager-cost");
    const costManagerString = managerCost.value;
    const costOfManager = parseFloat(costManagerString);

    const coachCost = document.getElementById("coach-cost");
    const costCoachString = coachCost.value;
    const costOfCoach = parseInt(costCoachString);

    const totalAmount = document.getElementById("total-cost");

    const totalCost = costOfManager + costOfCoach + totalExpensePlayer;
    totalAmount.innerText = totalCost;
    managerCost.value = "";
    coachCost.value = "";
  });
});
