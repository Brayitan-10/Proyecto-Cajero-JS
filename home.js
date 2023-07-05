const botonRetiro = document.getElementById('btn2');
const botonDeposito = document.getElementById('btn1');
botonRetiro.addEventListener('click', withdraw);
botonDeposito.addEventListener('click', deposit)
// Función para cerrar sesion de la cuenta
function exit() {
    const questionExit = prompt('Deseas cerrar sesión (Si o No)');
    const answer = questionExit === 'Si';
    
    if(answer) {
        location.href = 'http://127.0.0.1:5500/11.%20Proyecto%20Cajero%20JS/index.html'
    } else {
        alert('No has cerrado sesión');
    }
}
// Variable con dinero
let moneyUser = 500000;
// Seleccionar h3 saldo
//let saldoPantalla = document.querySelector('#available')
let moneyAvailable = document.querySelector('#available')
moneyAvailable.textContent = '$ ' + moneyUser;
//document.append('#available', '$' + monyeUser);
console.log('su saldo actual es: $' + moneyUser);
// Función para consignar en la cuenta
function deposit() {
    const money1 = document.getElementById('money-User1');
    const password1 = document.getElementById('password1');

    const valorMonto2 = parseInt(money1.value);
    const valorPassword2 = password1.value;

    if (validarDatos(valorMonto2, valorPassword2)) {
        moneyUser = moneyUser + valorMonto2;
        moneyAvailable.textContent = "";
        moneyAvailable.textContent = '$ ' + moneyUser;
        resetInputs(money1, password1);
        alert('Transacción exitosa!!!')
    }
}
// Función para retirar fondos de la cuenta
function validarDatos(monto, password) {

    
    if(monto <= 5000000 && password == '56789') {
        return true;
    } else {
        alert('Datos Incorrectos. Validar datos e intentar nuevamente.')
    }
}
function withdraw() {
    const money2 = document.getElementById('money-User2');
    const password2 = document.getElementById('password2');
    
    const valorMonto = parseInt(money2.value);
    const valorPassword = password2.value;

    if (validarDatos(valorMonto, valorPassword)) {
        moneyUser = moneyUser - valorMonto;
        moneyAvailable.textContent = "";
        moneyAvailable.textContent = '$ ' + moneyUser;
        resetInputs(money2, password2);
        alert('Transacción exitosa!!!')
    }
}
function resetInputs(monto, password) {
    monto.value = "";
    password.value = "";
}