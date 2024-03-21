const form = document.querySelector('.form');
const linha1 = document.querySelector('#linha1');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const horaBr = Number(form.inHoraBr.value);
    let horaFr = horaBr + 5;
    if (horaFr >= 24 ) {
        horaFr = horaFr - 24;
    }
    linha1.innerText = `Hora na França: ${horaFr.toFixed(2)}`;
})