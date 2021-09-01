//------------Проверка на введение значения в input--(2)--------
//--------------------------------------------------------------

export let valueInput = false;   //-???????????????????????-
export function dataTimeInput(timerInput) {
   timerInput.forEach(inp => {
      inp.oninput = () => {
         inp.setAttribute('value', inp.value);
         if (inp.value > 0) {
            valueInput = true;
         } else {
            valueInput = false;
         };
      };
   })
}