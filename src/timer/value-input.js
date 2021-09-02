export const timeHours = document.getElementById("timeHours");//Часы
export const timeMinutes = document.getElementById("timeMinutes");//Минуты
export const timeSeconds = document.getElementById("timeSecond");//Секунды
export let set; 
export let time;
export let intervalSec;
export let intervalMin;
export let intervalHour;

//--------------Выбранные значения в input--(5)----------------
export function valueInp() {
   // timerInput.forEach(inp => {
   time = (+timeHours.value * 3600) + (+timeMinutes.value * 60) + (+timeSeconds.value);

   set = setTimeout(setTime,
      1000);
   function setTime() {
      time--;
      timeHours.value = Math.floor(time / 3600);
      // timeHours.setAttribute('value', timeHours.value);
      timeMinutes.value = Math.floor((time - timeHours.value * 3600) / 60);
      // timeMinutes.setAttribute('value', timeMinutes.value);
      timeSeconds.value = time % 60;
      // timeSeconds.setAttribute('value', timeSeconds.value);
      console.log(timeHours.value + ' - timeHours, ' + timeMinutes.value + ' - timeMinutes, ' + timeSeconds.value + ' - timeSeconds, ' + time + ' - time');
      if (time > 0) {
         set = setTimeout(setTime,
            1000);
      } else {
         clearTimeout(set);
         
      }
   }











   // if (inp == timeSeconds) {

   // intervalSec =  setInterval(() => {
   //       if (inp.value <= 60 && inp.value > 0) {
   //          --inp.value;
   //          sec = inp.value;
   //       }
   //    }, 1000);
   //    return intervalSec;
   // }
   // else if (inp == timeMinutes) {

   //    intervalMin =   setInterval(() => {
   //       console.log(sec + ' ' + 'sec');
   //       if (sec == 0) {
   //          sec = 60;
   //          if (inp.value <= 60 && inp.value > 0) {
   //             --inp.value;
   //             min = inp.value;
   //             console.log(min + ' ' + 'min');
   //          }
   //       }

   //    }, 3000);
   //    return intervalMin;
   // }
   // else if (inp == timeHours) {
   //    setInterval(() => {
   //       if (min == 0) {
   //          inp.value -= 1;
   //          hour = inp.value;
   //       }
   //    }, 6000);
   // }
   // });
}
