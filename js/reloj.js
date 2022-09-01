const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoReloj(fecha.getHours());
    let min = formatoReloj(fecha.getMinutes());
    let seg = formatoReloj(fecha.getSeconds());
    const reloj = document.querySelector('#hora');
    reloj.innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

    let diaSemana = dias[fecha.getDay()];
    let dia = formatoReloj(fecha.getDate());
    let mes = fecha.getMonth();
    let fechaTexto = `${diaSemana}, ${dia} ${meses[mes]}`;
    const fechaDiv = document.querySelector('#fecha');
    fechaDiv.innerHTML = fechaTexto;

    const bordeReloj = document.querySelector('#contenedor');
    bordeReloj.classList.toggle('animar');
}

const formatoReloj = (tiempo) => {
    if (tiempo < 10) {
        tiempo = '0' + tiempo;
        return tiempo;
    }else{
        return tiempo = '' + tiempo;
    }
}


setInterval(mostrarReloj, 1000);