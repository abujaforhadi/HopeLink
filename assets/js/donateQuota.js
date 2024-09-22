function addMoneyQuota() {
    var totalAmountQuota = findElementValue("totalAmountQuota");
  
    var myBalance = findElementValue("myBalance");
    var amountQ = findInputValue("amountQ");
    if (isNaN(amountQ) || amountQ <= 0 || amountQ > myBalance) {
      alert("Invalid Input or Insufficient Balance");
      return;
    }
    var ans = addSum(totalAmountQuota, amountQ, myBalance);
    document.getElementById("totalAmountQuota").innerHTML = ans.totalAmount;
    document.getElementById("myBalance").innerHTML = ans.myBalance;
  }
  
  document
    .getElementById("donationQuotaBtn")
    .addEventListener("click", addMoneyQuota);
  