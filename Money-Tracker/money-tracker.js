class UI {
    constructor(){
        this.saveFileBtn = document.querySelector(".save__file-btn");
    }
    
    
}

let message = "Is not available yet";

function eventListeners (){
    const saveingForm = document.querySelector(".saveing__form");
    const expensesForm = document.querySelector(".expenses__form");
    const incomeForm = document.querySelector(".income__Form");
} 

document.addEventListener('DOMCOntentLoaded', function (){
    eventListeners();
});
