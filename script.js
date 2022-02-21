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

// deposit button
document.getElementById('Deposit-btn').addEventListener('click', function () {
    // input deposit id
    const inputDeposit = document.getElementById('input-deposit');
    const inputDepositNumber = parseInt(inputDeposit.value);

    // Deposit amount id
    const depositAmount = document.getElementById('Deposit-amount');
    const depositAmountNumber = parseInt(depositAmount.innerText);

    // new Deposit amount
    const newDepositAmount = inputDepositNumber + depositAmountNumber;
    depositAmount.innerText = newDepositAmount;

    // Balance amount id
    const balanceAmount = document.getElementById('Balance-amount');
    const balanceAmountNumber = parseInt(balanceAmount.innerText);

    // new balance amount
    const newBalanceAmount = balanceAmountNumber + inputDepositNumber;
    balanceAmount.innerText = newBalanceAmount;

    // input fild clear
    inputDeposit.value = '';
});


// withdrow button
document.getElementById('Withdrow-btn').addEventListener('click', function () {
    // input withdrow id
    const inputWithdrow = document.getElementById('input-withdrow');
    const inputWithdrowNumber = parseInt(inputWithdrow.value);

    // Withdrow amount id
    const withdrowAmount = document.getElementById('Withdrow-amount');
    const withdrowAmountNumber = parseInt(withdrowAmount.innerText);

    // new withdrow amount
    const newWithdrowAmount = inputWithdrowNumber + withdrowAmountNumber;
    withdrowAmount.innerText = newWithdrowAmount;

    // Balance amount id
    const balanceAmount = document.getElementById('Balance-amount');
    const balanceAmountNumber = parseInt(balanceAmount.innerText);

    // new balance amount
    const newBalanceAmount = balanceAmountNumber - inputWithdrowNumber;
    balanceAmount.innerText = newBalanceAmount;

    // input fild clear
    inputWithdrow.value = '';
});



