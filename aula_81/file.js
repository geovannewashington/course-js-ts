//here's another example:
const xhr = new XMLHttpRequest();
xhr.open("POST", "https://api.example.com/data", true);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
}

const data = JSON.stringify({key: 'value'});
xhr.send(data);