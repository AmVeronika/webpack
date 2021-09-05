//------------Проверка на введение значения в input--(2)--------
//--------------------------------------------------------------
import { formatError } from "../utils.js";
const timerResult = document.getElementById("timer__result");

export function dataTimeInput(timerInput) {

   if (timerInput[0].value > 0 && timerInput[0].value < 60 || timerInput[1].value > 0 && timerInput[1].value < 60 || timerInput[2].value > 0 && timerInput[2].value < 60) {
      timerResult.innerHTML = '';
      return true;
   }
   else {
      timerResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
      return false
   }

}
