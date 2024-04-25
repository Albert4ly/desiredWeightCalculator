const form= document.querySelector(".appCnt__form");

const initialWeightSpan = document.querySelector(".appCnt__initialWeightSpan");
const desiredWeightSpan = document.querySelector(".appCnt__desiredWeightSpan");
const heightSpan = document.querySelector(".appCnt__heightSpan");

export class DesiredWeightCalculator {
   constructor() {
      this.listenerFunc();
   }

   listenerFunc() {
      form.addEventListener('click', (e) => this.changeRangeInputValue(e))
   }
   
   changeRangeInputValue(e) {
      e.preventDefault();

      if (e.target.classList.contains("appCnt__inputInitialWeight")) {
         initialWeightSpan.innerText = e.target.value;
      }

      if (e.target.classList.contains("appCnt__inputDesiredWeight")) {
         desiredWeightSpan.innerText = e.target.value;
      }

      if (e.target.classList.contains("appCnt__inputHeight")) {
         heightSpan.innerText = e.target.value;
      }
   }

}