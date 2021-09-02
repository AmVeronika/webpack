//------------Проверка на введение значения в input--(2)--------
//--------------------------------------------------------------

export let valueInput = false;   //-???????????????????????-

export function dataTimeInput(timerInput) {
   timerInput.forEach(inp => {
      inp.oninput = () => {
         inp.setAttribute('value', inp.value);
         if (inp.value < 0 && inp.value > 59) {
            inp.value = 0;
            alert('недопустимое значение');
            valueInput = false;
         } else
            valueInput = true;
      };
   })
}

// Почему в файле data-time-input.js переменная valueInput на 4 строчке не перезаписывается в файле alarmclock.js, к примеру на 42 строке, если бы применяла.
// Хотела создать переменную valueInput в файле alarmclock.js, но при передаче вторым параметром valueInput в функции dataTimeInput(timerInput, valueInput) выскакивала ошибка, в которой было сказано, что переменную переписать нельзя, буд-то это константа.