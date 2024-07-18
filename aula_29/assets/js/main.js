function myScope() {
    const currentDate = new Date();
    const section = document.querySelector(".container");
    const h1 = section.children[0];

    const day = currentDate.getDay();
    const weekDay = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    function getDayName(day) {
        if (day >= 0 && day <= 6) {
            const daysNames = [
                'domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado' 
            ];
            return daysNames[day];
        }
        return 'invalid day'; 
    }

    function getMonthName(month) {
        if (month >= 0 && month <= 11) {
            const monthNames = [
                'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
            ];
            return monthNames[month];
        }
        return 'invalid month';
    }

    function addZero(time) {
        return time >= 10 ? time : `0${time}`;
    }

    function displayFormatedDate() {
        const formatedDate = `${getDayName(day)}, ${weekDay} de ${getMonthName(month)} de ${year} ${addZero(hours)}:${addZero(minutes)}`;
        h1.innerText = formatedDate;
    }

    displayFormatedDate();
}

myScope();


