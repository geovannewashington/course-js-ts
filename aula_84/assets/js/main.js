// fetch('pessoas.json')
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         appendToTable(data);
//     })
//     .catch(e => {
//         console.error('An error has occurred 🤒️:', e);
//     });

//using axios:

// axios('wrong.json')
//     .then(response => appendToTable(response.data))
//     .catch(error => {
//         console.error('An error has occurred 🤒️:', error.message);
//     });

async function fetchData() {
    try {
        const response = await axios('pessoas.json');
        appendToTable(response.data);
        
    } catch (error) {
        console.error('An error has occurred 🤒️:', error.message);
    }
} 

function appendToTable(allUsers) {
    const table = document.createElement('table');

    for (let user of allUsers) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = user.nome;
        tr.appendChild(td);

        let td2 = document.createElement('td');
        td2.innerHTML = user.idade;
        tr.appendChild(td2);

        table.appendChild(tr);
    }

    const result = document.querySelector('.result');
    result.appendChild(table);
}

fetchData();