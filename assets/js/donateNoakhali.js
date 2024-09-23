function addMoneyNoakhali() {
  var totalAmountNoakhali = findElementValue("totalAmountNoakhali");

  var myBalance = findElementValue("myBalance");
  var amountN = findInputValue("amountN");
  if (isNaN(amountN) || amountN <= 0 || amountN > myBalance) {
    alert("Invalid Input or Insufficient Balance");
    return;
  }
  document.getElementById("cityName").innerHTML = "Noakhali";
  document.getElementById("my_modal_1").showModal();

  var ans = addSum(totalAmountNoakhali, amountN, myBalance);
  document.getElementById("totalAmountNoakhali").innerHTML = ans.totalAmount;
  document.getElementById("myBalance").innerHTML = ans.myBalance;
  var titleN=findElementText("titleN");
  var textadd = `${amountN} Taka is ${titleN} `; //amountN+ "Taka is"+ titleN same as this
  history(textadd);
  document.getElementById("amountN").value = "";
}

document
  .getElementById("donationNoakhaliBtn")
  .addEventListener("click", addMoneyNoakhali);
