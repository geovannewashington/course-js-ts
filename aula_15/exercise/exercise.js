const userNumber = Number(prompt('Insert any number'));
const titleNumber = document.getElementById("title-number");
const text = document.getElementById("text");

titleNumber.innerHTML = userNumber;

text.innerHTML = `<p>Square root: ${userNumber ** 0.5}</p>`;
text.innerHTML += `<p>${userNumber} is an integer: ${Number.isInteger(userNumber)}</p>`;
text.innerHTML += `<p>Is a number NaN: ${Number.isNaN(userNumber)}</p>`;
text.innerHTML += `<p>Rounding up: ${Math.ceil(userNumber)}</p>`;
text.innerHTML += `<p>Rounding down: ${Math.floor(userNumber)}</p>`;
text.innerHTML += `<p>With two decimals: ${userNumber.toFixed(2)}</p>`;