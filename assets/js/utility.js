function findInputValue(id){
    var id=document.getElementById(id).value;
    id=parseFloat(id);
    
    return id;

}
function findElementValue(id){
    var id=document.getElementById(id).innerHTML;
    id=parseFloat(id);
    return id;

}
function addSum(totalAmount, inputAmount, myBalance){
    totalAmount= totalAmount + inputAmount;
    myBalance=myBalance-inputAmount;
    return {totalAmount, myBalance};


    
}
