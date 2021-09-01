
import { switchingModuls } from "./switching-moduls.js";


const btnsForm = document.getElementById("buttons");//див с выбором модулей


btnsForm.addEventListener("click", switchingModuls);


// ТАЙМЕР

const timeHours = document.getElementById("timeHours");//Часы
const timeMinutes = document.getElementById("timeMinutes");//Минуты
const timeSecond = document.getElementById("timeSecond");//Секунды

timeHours.oninput = function() {
   console.log(timeHours.value)
 };
