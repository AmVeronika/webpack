// ТАЙМЕР
import { valueInput, dataTimeInput } from "./data-time-input.js";
import { disabledInst, disabledDel } from "./disabled.js";
import { valueInp, sec, min, hour } from "./value-input.js";

const timeHours = document.getElementById("timeHours");//Часы
const timeMinutes = document.getElementById("timeMinutes");//Минуты
const timeSeconds = document.getElementById("timeSecond");//Секунды
const timerInput = document.querySelectorAll('.timer-input')//Массив инпутов со временем

const startTime = document.getElementById("startTime"); //Кнопка старт
const pauseTime = document.getElementById("pauseTime"); //Кнопка пауза
const stopTime = document.getElementById("stopTime"); //Кнопка сброса


const inputBtn = document.querySelectorAll('.input-btn')//Массив кнопок для отсчёта времени(timer)


//-------------Проверка на нажатие кнопки таймера--(1)------------
//----------------------------------------------------------------
export function checkTimer() {
   dataTimeInput(timerInput);//Вызов функции на проверку на введение значения в input
   inputBtn.forEach(btn => {
      btn.addEventListener("click", timeLapse);//Событие на клик
   })
}

//---------Функция на нажатие кнопок старт,пауза,стоп--(3)------
//--------------------------------------------------------------
function timeLapse(btn) {
   if (btn.target == startTime) {  //Если старт
      console.log('start');

      if (valueInput) {
         disabledInst(timerInput);//вызов функции по блокировке ввода инпут
         valueInp(timeHours, timeMinutes, timeSeconds, timerInput);//Вызов функции получение выбранных значений

      }

   } else if (btn.target == pauseTime) { //Если пауза
      console.log('pause')
   } else if (btn.target == stopTime) { //Если сброс
      console.log('stop');
      disabledDel(timerInput);//вызов функция по разблокировке ввода input
      timerInput.forEach(inp => {
         inp.setAttribute('value', '0')
      })
      valueInput = false;
   }
   // console.log (btn.target)
}
