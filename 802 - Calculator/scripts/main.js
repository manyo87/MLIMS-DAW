let op;
document.querySelector('#multiply').addEventListener('click', () => {
    op = '*';
});

document.querySelector('#divide').addEventListener('click', () => {
    op = '/';
});

document.querySelector('#result').addEventListener('click', () => {
    const n1 = parseInt(document.querySelector('#num1').value);
    const n2 = parseInt(document.querySelector('#num2').value);

    let r;

    if (op == '*') {
        r = n1 * n2;
    } else if (op == '/') {
        r = n1 / n2;
    }
    document.querySelector('#result').innerHTML = r;
});