import { handleCalcDates } from "./calc/calc-moduls.js"; //функция работы калькулятора
import { checkTimer } from "./timer/alarmclock.js" //функция отсчета времени

const btnCalc = document.getElementById("btn-calc");//кнопка калькулятор
const btnTimer = document.getElementById("btn-timer");//кнопка Таймер

const modulCalc = document.getElementById("modul-one");//калькулятор
const moduTimer = document.getElementById("modul-two");//Таймер

const dateCalcForm = document.getElementById("datecalc");// форма калькулятора



export function switchingModuls(ev) {
   ev.preventDefault();
   if (ev.target == btnCalc) {
      modulCalc.style.display = "block";
      moduTimer.style.display = "none";
      dateCalcForm.addEventListener("submit", handleCalcDates);

   } if (ev.target == btnTimer) {
      moduTimer.style.display = "block";
      modulCalc.style.display = "none";
      checkTimer();
   }
}
