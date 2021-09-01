export let hour;
export let min;
export let sec;
//--------------Выбранные значения в input--(5)----------------
export function valueInp(timeHours, timeMinutes, timeSeconds, timerInput) {
   timerInput.forEach(inp => {
      if (inp == timeSeconds) {

         setInterval(() => {
            if (inp.value < 60 && inp.value > 0) {
               inp.value -= 1;
               sec = inp.value;
            }
         }, 1000);
      }
      else if (inp == timeMinutes) {
         setInterval(() => {
            if (sec == 0) {
               inp.value -= 1;
               min = inp.value;
            }
         }, 3000);
      }
      else if (inp == timeHours) {
         setInterval(() => {
            if ( min == 0) {
               inp.value -= 1;
               hour = inp.value;
            }
         }, 6000);
      }
   });
}
