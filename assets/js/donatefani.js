function addMoneyFani() {
    var totalAmountFani = findElementValue("totalAmountFani");
  
    var myBalance = findElementValue("myBalance");
    var amountF = findInputValue("amountF");
    if (isNaN(amountF) || amountF <= 0 || amountF > myBalance) {
      alert("Invalid Input or Insufficient Balance");
      return;
    }
    var ans = addSum(totalAmountFani, amountF, myBalance);
    document.getElementById("totalAmountFani").innerHTML = ans.totalAmount;
    document.getElementById("myBalance").innerHTML = ans.myBalance;
  }
  
  document
    .getElementById("donationFaniBtn")
    .addEventListener("click", addMoneyFani);
  