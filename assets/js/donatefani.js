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
  var textadd = `${amountF} Donate for Flood Relief in Feni,Bangladesh`;
  history(textadd);
}

document.getElementById("donationFaniBtn").addEventListener("click", addMoneyFani);
