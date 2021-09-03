// ТАЙМЕР
import { dataTimeInput } from "./data-time-input.js";
import { disabledInst, disabledDel } from "./disabled.js";
import { valueInp, set } from "./value-input.js";


const timerInput = document.querySelectorAll('.timer-input')//Массив инпутов со временем

const startTime = document.getElementById("startTime"); //Кнопка старт
const pauseTime = document.getElementById("pauseTime"); //Кнопка пауза
const stopTime = document.getElementById("stopTime"); //Кнопка сброса


const inputBtn = document.querySelectorAll('.input-btn')//Массив кнопок для отсчёта времени(timer)


//-------------Проверка на нажатие кнопки таймера--(1)------------
//----------------------------------------------------------------
export function checkTimer() {
  
   inputBtn.forEach(btn => {
      btn.addEventListener("click", timeLapse);//Событие на клик
   })
}

//---------Функция на нажатие кнопок старт,пауза,стоп--(3)------
//--------------------------------------------------------------
function timeLapse(btn) {
   
   if (btn.target == startTime) {  //Если старт
      if (dataTimeInput(timerInput)) {
         disabledInst(timerInput);//вызов функции по блокировке ввода инпут
         valueInp(timerInput);//Вызов функции получение выбранных значений, сам таймер
      }
   }
   else if (btn.target == pauseTime) { //Если пауза
      clearTimeout(set);
   } 
   else if (btn.target == stopTime) { //Если сброс
      clearTimeout(set);
      disabledDel(timerInput);      
   }
}
