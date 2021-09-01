export const btnsForm = document.getElementById("buttons");//див с выбором модулей
const btnCalc = document.getElementById("btn-calc");//кнопка калькулятор
const btnTimer = document.getElementById("btn-timer");//кнопка Таймер

const modulCalc = document.getElementById("modul-one");//калькулятор
const moduTimer = document.getElementById("modul-two");//Таймер

btnsForm.addEventListener("click", switchingModuls);
export function switchingModuls(ev) {
   ev.preventDefault();
   if (ev.target == btnCalc) {
      modulCalc.style.display = "block"
      moduTimer.style.display = "none"
   } if (ev.target == btnTimer) {
      moduTimer.style.display = "block"
      modulCalc.style.display = "none"
   }
}