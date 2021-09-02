import { disabledDel } from "./disabled.js";
export const timeHours = document.getElementById("timeHours");//Часы
export const timeMinutes = document.getElementById("timeMinutes");//Минуты
export const timeSeconds = document.getElementById("timeSecond");//Секунды
export let set;
export let time;
let sound = new Howl({
   src: ['sound.mp3']
});
Howler.volume(0.2);

//--------------Выбранные значения в input--(5)----------------
export function valueInp(timerInput) {
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
         disabledDel(timerInput);
         sound.play();
         
      }
   }
}
