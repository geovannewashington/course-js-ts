function myScope() {
    //const btn = document.querySelector("#btn");
    const form = document.querySelector("#formulario");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const peso = Number(document.querySelector("#peso").value);
        const altura = Number(document.querySelector("#altura").value);

        const IMC = peso / (altura ** 2);
        alert(`Seu IMC = ${IMC.toFixed(2)}`);
        // result.innerHTML = `<p>O peso do usuário é: ${peso}kg e altura é: ${altura}cm</p>`;
    });
}

myScope();