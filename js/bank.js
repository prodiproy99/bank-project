function getInputValue(inputId) {
    debugger;
    const InputField = document.getElementById(inputId);
    const inputAmountText = InputField.value;
    const amountValue = parseFloat(inputAmountText);
    InputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText= totalElement.innerText;
    const previouseTotal= parseFloat(totalText);
    const newDepositTotal = previouseTotal + amount;
    totalElement.innerText = newDepositTotal;
}

function getCurrentBalance(params) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const PreviousebalanceTotal = parseFloat(balanceTotalText);
    return PreviousebalanceTotal;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');
   
    const PreviousebalanceTotal = getCurrentBalance();
     if(isAdd == true){
        balanceTotal.innerText = PreviousebalanceTotal + amount;
     }else{
        balanceTotal.innerText = PreviousebalanceTotal - amount;
     }
}

document.getElementById('deposit-button').addEventListener('click', function(){ 

    const newDepositAmount = getInputValue('deposit-input'); 
    if(newDepositAmount > 0){
        updateTotalField('depositTotal', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
 
})

//handle widthraw event handle
document.getElementById('widthraw-button').addEventListener('click', function(){ 

    const newWidthrawAmount = getInputValue('widthraw-input');
    const currentBalance = getCurrentBalance();
   if(newWidthrawAmount > 0  && newWidthrawAmount < currentBalance){
    updateTotalField('widthraw-total', newWidthrawAmount);
    updateBalance(newWidthrawAmount, false);
   }
   if(newWidthrawAmount > currentBalance){
       console.log("You can't withdarw than your amount");
   } 
})
 