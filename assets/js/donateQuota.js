function addMoneyQuota() {
    var totalAmountQuota = findElementValue("totalAmountQuota");
  
    var myBalance = findElementValue("myBalance");
    var amountQ = findInputValue("amountQ");
    if (isNaN(amountQ) || amountQ <= 0 || amountQ > myBalance) {
      alert("Invalid Input or Insufficient Balance");
      return;
    }
    document.getElementById("cityName").innerHTML="Quota";  
    document.getElementById("my_modal_1").showModal();

    var ans = addSum(totalAmountQuota, amountQ, myBalance);
    document.getElementById("totalAmountQuota").innerHTML = ans.totalAmount;
    document.getElementById("myBalance").innerHTML = ans.myBalance;
    var textadd = `${amountQ} Aid for Injured in the Quota Movement`;
  history(textadd);
  }
  
  document
    .getElementById("donationQuotaBtn")
    .addEventListener("click", addMoneyQuota);
  