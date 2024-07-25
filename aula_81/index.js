//XMLHttpsRequest' (often abbreviated as xhr) is a JS object that provides a way to interact with
//servers through HTTP.

//Basic Usage: 

//create a new instace of the XMLHttpsRequest object
const xhr = new XMLHttpRequest();

//define a callback function to be executed when the response is received
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        //parse and use the response data
        console.log(xhr.responseText);
    }
}

//initialize a request
xhr.open('GET', 'https://api.example.com/data', true);

//send the request 
xhr.send();