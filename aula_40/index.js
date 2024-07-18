const myCallBack = (a, b) => {
    console.log(a);
    console.log(b);
}

const intervalID = setInterval(myCallBack, 500, "Olá", "Mundo!");

