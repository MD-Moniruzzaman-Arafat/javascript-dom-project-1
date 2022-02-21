// login-btn
const login = document.getElementById('login-btn').addEventListener('click', function () {
    const email = document.getElementById('input-email');
    const password = document.getElementById('input-password');

    if (email.value == 'arafat@gmail.com' && password.value == 'arafat') {
        const loginForm = document.getElementById('login-form');
        loginForm.style.display = 'none';
        const accountSection = document.getElementById('account-section');
        accountSection.style.display = 'block';
    } else {
        const loginForm = document.getElementById('login-form');
        loginForm.style.display = 'block';
    }
    email.value = '';
    password.value = '';
});

// account section
// function
function account(deposit) {
    // input deposit id
    const inputAmount = document.getElementById('input-' + deposit);
    const inputAmountNumber = parseInt(inputAmount.value);

    // Deposit amount id
    const depositAmount = document.getElementById(deposit + '-amount');
    const depositAmountNumber = parseInt(depositAmount.innerText);

    // Balance amount id
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountNumber = parseInt(balanceAmount.innerText);

    if (deposit == 'deposit' && inputAmount.value > 0) {
        // new Deposit amount
        const newDepositAmount = inputAmountNumber + depositAmountNumber;
        depositAmount.innerText = newDepositAmount;
        // new balance amount
        const newBalanceAmount = balanceAmountNumber + inputAmountNumber;
        balanceAmount.innerText = newBalanceAmount;
        // input fild clear
        inputAmount.value = '';
    }
    if (deposit == 'withdrow' && inputAmount.value > 0) {
        // new Deposit amount
        const newDepositAmount = inputAmountNumber + depositAmountNumber;
        depositAmount.innerText = newDepositAmount;
        // new balance amount
        const newBalanceAmount = balanceAmountNumber - inputAmountNumber;
        balanceAmount.innerText = newBalanceAmount;
        // input fild clear
        inputAmount.value = '';
    }
}



