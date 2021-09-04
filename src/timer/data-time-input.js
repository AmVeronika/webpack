//------------Проверка на введение значения в input--(2)--------
//--------------------------------------------------------------



export function dataTimeInput(timerInput) {

   if (timerInput[0].value > 0 && timerInput[0].value < 60 || timerInput[1].value > 0 && timerInput[1].value < 60 || timerInput[2].value > 0 && timerInput[2].value < 60) {
      return true;
   }
   else {
      alert('Некорректные данные')
      return false
   }

}
