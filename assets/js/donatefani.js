function addMoneyFani() {
  var totalAmountFani = findElementValue("totalAmountFani");
  var myBalance = findElementValue("myBalance");
  var amountF = findInputValue("amountF");

  if (isNaN(amountF) || amountF <= 0 || amountF > myBalance) {
    alert("Invalid Input or Insufficient Balance");
    return;  
  }
  document.getElementById("cityName").innerHTML="Fani";


  document.getElementById("my_modal_1").showModal();

  var ans = addSum(totalAmountFani, amountF, myBalance);
  document.getElementById("totalAmountFani").innerHTML = ans.totalAmount;
  document.getElementById("myBalance").innerHTML = ans.myBalance;
  var titleF=findElementText("titleF");
  var textadd = `${amountF} Taka is ${titleF} `; //amountF +" Taka is "+ titleF  same as this
  history(textadd);
}

document.getElementById("donationFaniBtn").addEventListener("click", addMoneyFani);
