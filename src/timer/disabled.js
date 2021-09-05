//-----------функция по блокировке ввода input---(4)-----------
export function disabledInst(timerInput) {//Установка атрибуда disabled инпутам
   timerInput.forEach(inp => {
      inp.setAttribute('disabled', 'disabled')
   })
}
//-----------функция по разблокировке ввода input--------------
export function disabledDel(timerInput) {//Удаление атрибуда disabled инпутам
   timerInput.forEach(inp => {
      inp.removeAttribute('disabled');
   })
}