function createTimer(ms) {
    const date = new Date(ms * 1000);
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const clock = document.querySelector('.clock');
let timer;
let seconds = 0;

function startClock() {
    timer = setInterval(() => {
        seconds++;
        clock.innerText = createTimer(seconds);
    }, 1000)
}

document.addEventListener('click', (event) => {
    const element = event.target;

    if (element.classList.contains('start')) {
        clock.classList.remove('paused');
        setInterval(timer);
        startClock();        
    }

    if (element.classList.contains('pause')) {
        clearInterval(timer);
        clock.classList.add('paused');
    }

    if (element.classList.contains('stop')) {
        clearInterval(timer);
        clock.innerText = '00:00:00';
        clock.classList.remove('paused');
        seconds = 0;
    }
});