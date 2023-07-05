function next() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if(username == 'Brayan2023' && password == '56789') {
        location.href = 'http://127.0.0.1:5500/11.%20Proyecto%20Cajero%20JS/second%20part/index.html'
    } else {
        alert('Datos Incorrectos. Verificar datos e intentar nuevamente.');
    }
}
