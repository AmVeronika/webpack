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