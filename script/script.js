let hora = 0, minuto = 0, segundo = 0, milesimo = 0, contador;

$('#btn_play').on('click', () => start());
$('#btn_pause').on('click', () => pause());
$('#btn_stop').on('click', () => reset());

const start = () => contador = setInterval(() => timer(), 10);
const pause = () => clearInterval(contador);

function reset() {
  pause();
  hora, minuto, segundo, milesimo = 0;

  $('#mostrador_hora').text('00');
  $('#mostrador_minuto').text('00');
  $('#mostrador_segundo').text('00');
  $('#mostrador_milesimo').text('000');

}

function timer() {
  milesimo < 10 && $('#mostrador_milesimo').text(returnData100(milesimo));

  if (milesimo < 10 && milesimo > 100) {
    $('#mostrador_milesimo').text(returnData(milesimo));
  }

  if ((milesimo += 10) == 1000) {
    milesimo = 0;
    segundo++;
    $('#mostrador_segundo').text(returnData(segundo));
  }

  if (segundo == 60) {
    segundo = 0;
    minuto++;
    $('#mostrador_minuto').text(returnData(minuto));
  }

  if (minuto == 60) {
    minuto = 0;
    hora++;
    $('#mostrador_hora').text(returnData(hora));
  }

  $('#mostrador_milesimo').text(returnData100(milesimo));

}

const returnData = (e) => e > 10 ? e : `0${e}`

const returnData100 = (e) => {
  if (e < 10)  { return `00${e}` };

  if (e < 100) {
    return `0${e}`;
  } else {
    return `${e}`;
  }
};
