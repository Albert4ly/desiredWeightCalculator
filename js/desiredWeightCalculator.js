const form= document.querySelector(".appCnt__form");

const initialWeightSpan = document.querySelector(".appCnt__initialWeightSpan");
const desiredWeightSpan = document.querySelector(".appCnt__desiredWeightSpan");
const heightSpan = document.querySelector(".appCnt__heightSpan");

const submitBtn = document.querySelector(".appCnt__submitBtn");

export class DesiredWeightCalculator {
   constructor() {
      this.initialWeight = null;
      this.desiredWeight = null;

      this.listenerFunc();
   }

   listenerFunc() {
      form.addEventListener('click', (e) => this.changeRangeInputValue(e))
      submitBtn.addEventListener('click', (e) => this.dataValidation(e));
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

   dataValidation(e) {
      e.preventDefault();
      const errorAlert = document.querySelector(".appCnt__errorAlertSection");
      
      this.initialWeight = initialWeightSpan.innerText;
      this.desiredWeight = desiredWeightSpan.innerText;

      if (this.initialWeight === this.desiredWeight) {

         if (errorAlert.classList.contains("appCnt__errorAlertSection")) {
            errorAlert.classList.remove("appCnt__errorAlertSection");
            errorAlert.classList.add("appCnt__errorAlertSectionDisplay");
         }
      }

      if (this.initialWeight !== this.desiredWeight) {

         const errorAlert = document.querySelector(".appCnt__errorAlertSectionDisplay");

         if (errorAlert.classList.contains("appCnt__errorAlertSectionDisplay")) {
            errorAlert.classList.remove("appCnt__errorAlertSectionDisplay");
            errorAlert.classList.add("appCnt__errorAlertSection");
         }
      }
     
   }

}