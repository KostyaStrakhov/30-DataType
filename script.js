let sum = 0.1 + 0.2;
alert(`0.1 + 0.2 = ${sum.toFixed(1)}`);

let a = "1";
let b = 2;
alert(`1 + 2 = ${+a+b}`);

let flashSize = prompt('Вкажіть розмір флешки');

alert(`На флешку можна записати ${Math.floor(flashSize / 820)} файли розміром 820 mb`);

let money = prompt('Скільки у вас грошей?');
let price = prompt('Скільки коштує шоколад?');

let qty = Math.floor(money/price);

alert(`Ви зможете купити ${qty} шоколадки і у вас залишиться ${money - (price*qty)} грн.`);


let num = prompt('Введіть тризначне число');

let num3 = num % 10;

let num2 = (Math.floor(num/10)) % 10

let num1 = (Math.floor(num/100))

alert(`Результат = ${num3}${num2}${num1}`)
