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
   /*  
    const balanceTotalText = balanceTotal.innerText;
    const PreviousebalanceTotal = parseFloat(balanceTotalText)
     */
    const PreviousebalanceTotal = getCurrentBalance();
     if(isAdd == true){
        balanceTotal.innerText = PreviousebalanceTotal + amount;
     }else{
        balanceTotal.innerText = PreviousebalanceTotal - amount;
     }
}

document.getElementById('deposit-button').addEventListener('click', function(){
   /*  const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText); */
   
   
    //update deposit total
    /* const depositTotal = document.getElementById('depositTotal');
    const previouseDepositText= depositTotal.innerText;
    const previouseDepositAmount= parseFloat(previouseDepositText);
    const newDepositTotal = previouseDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal; */

    
 
    // update balance
   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const PreviousebalanceTotal = parseFloat(balanceTotalText); 

    balanceTotal.innerText = PreviousebalanceTotal+ newDepositAmount; */
    const newDepositAmount = getInputValue('deposit-input');

    if(newDepositAmount > 0){
        updateTotalField('depositTotal', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
   

    //clear the deposite input field
    // depositInput.value = '';
})

//handle widthraw event handle
document.getElementById('widthraw-button').addEventListener('click', function(){
  /*   const widthrawInput = document.getElementById('widthraw-input');
    const widthrawInputText = widthrawInput.value;
    const newWidthrawAmount = parseFloat(widthrawInputText); */

   

    //get and update widthraw total

   /*  const widthrawTotal = document.getElementById('widthraw-total');
    const previouseWidthrawText = widthrawTotal.innerText;
    const previouseWidthrawTotal = parseFloat(previouseWidthrawText);
    const newWidthrawTotal = previouseWidthrawTotal + newWidthrawAmount;

    widthrawTotal.innerText = newWidthrawTotal; */
   


// update balance after widthraw

  /*  const balanceTotal = document.getElementById('balance-total');
   const previouseBalanceText = balanceTotal.innerText;
   const previouseBalanceTotal = parseFloat(previouseBalanceText) ;
   const newBalanceTotal = previouseBalanceTotal - newWidthrawAmount;
   balanceTotal.innerText = newBalanceTotal; */

    const newWidthrawAmount = getInputValue('widthraw-input');
    const currentBalance = getCurrentBalance();
   if(newWidthrawAmount > 0  && newWidthrawAmount < currentBalance){
    updateTotalField('widthraw-total', newWidthrawAmount);
    updateBalance(newWidthrawAmount, false);
   }
   if(newWidthrawAmount > currentBalance){
       console.log("You can't withdarw than your amount");
   }

// clear widthraw input
    // widthrawInput.value = '';
})
document.createElement