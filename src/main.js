import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import { btnsForm, switchingModuls } from "./switching-moduls.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

btnsForm.addEventListener("click", switchingModuls);
dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
   dateCalcResult.innerHTML = "";
   event.preventDefault();

   let { firstDate, secondDate } = event.target.elements;
   firstDate = firstDate.value, secondDate = secondDate.value;

   if (firstDate && secondDate) {
      const diff = diffDates(firstDate, secondDate); // 3
      dateCalcResult.innerHTML = diffToHtml(diff); // 4
   }
   else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}


const timeInput = document.getElementById("timeInput");
console.log(timeInput.value)