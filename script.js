function verificar() {
    let num = document.getElementById('txtn');
    let res = document.getElementById('res');
    let par = document.getElementById('pares');
    let impar = document.getElementById('impares');

    let n = Number(num.value);
    let p = "par";
    let i = "ímpar";

    if (n % 2 === 0) {
        res.innerHTML = `O número ${n} é ${p}`;
    } else {
        res.innerHTML = `O número ${n} é ${i}`;
    }
}
