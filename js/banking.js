//style start
document.getElementById('diposit-text').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'LightPink';
})
document.getElementById('diposit-text').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'rgba(193, 131, 235, 0.623)';
})
document.getElementById('withdraw-text').addEventListener('focus', function () {
    document.body.style.backgroundColor = 'Silver';
})
document.getElementById('withdraw-text').addEventListener('blur', function () {
    document.body.style.backgroundColor = 'rgba(193, 131, 235, 0.623)';
})
// style End
// matir bank
document.getElementById('diposit-button').addEventListener('click', function () {
    //get diposit input
    const dipositInput = document.getElementById('diposit-text');
    const newDipositText = dipositInput.value;
    const newDipositAmmount = parseFloat(newDipositText)

    //set diposit total
    const dipositText = document.getElementById('total-diposit');
    const previousDeositText = dipositText.innerText;
    const previousDeositAmmount = parseFloat(previousDeositText);
    const newDipositTotal = previousDeositAmmount + newDipositAmmount;
    dipositText.innerText = newDipositTotal;

    //update balance total
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDipositAmmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear diposit input field
    dipositInput.value = '';
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get withdraw input
    const withdrawInput = document.getElementById('withdraw-text');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmmount = parseFloat(newWithdrawText);

    //set withdraw total
    const withdrawText = document.getElementById('total-withdraw');
    const previousWithdrawText = withdrawText.innerText;
    const previousWithdrawAmmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmmount + newWithdrawAmmount;
    withdrawText.innerText = newWithdrawTotal;

    //update balance total
    const balanceTotal = document.getElementById('total-balance');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    balanceTotal.innerText = newBalanceTotal;

    //clear withdraw input field
    withdrawInput.value = '';
})