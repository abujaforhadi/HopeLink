function addMoneyNoakhali() {
  var totalAmountNoakhali = findElementValue("totalAmountNoakhali");

  var myBalance = findElementValue("myBalance");
  var amountN = findInputValue("amountN");
  if (isNaN(amountN) || amountN <= 0 || amountN > myBalance) {
    alert("Invalid Input or Insufficient Balance");
    return;
  }
  var ans = addSum(totalAmountNoakhali, amountN, myBalance);
  document.getElementById("totalAmountNoakhali").innerHTML = ans.totalAmount;
  document.getElementById("myBalance").innerHTML = ans.myBalance;
}

document
  .getElementById("donationNoakhaliBtn")
  .addEventListener("click", addMoneyNoakhali);
