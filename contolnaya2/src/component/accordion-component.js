import { BaseComponent } from "../component/base/baseComponent.js";
import { AccordionContentComponent } from "./accordion_content-component.js";
import { getData } from "../../data/buttons.js";

function createAccordionComponentTemplate(buttonName) {
    var innerHtml = InitPage();
    
    document.addEventListener("DOMContentLoaded", function() {
        initHandlers();
      });
    

    return (
        `<div class="accordion-item">
            ${innerHtml}
        </div>`
    );
}

function initHandlers(){
    document.querySelectorAll('.accordion-button').forEach(x =>{
        x.addEventListener('click', openAndCloseButton);
    })

}

function openAndCloseButton(event){
    var button = event.target;

    var buttonContent = button.parentElement.querySelector('.accordion-content');

    if(buttonContent.style.display === 'none' || buttonContent.style.display === ''){
        setVisible(buttonContent);
    }
    else{
        setInvisible(buttonContent);
    }
}

function setVisible(elem){
    
        elem.style.display = 'block';
    
}

function setInvisible(elem){
    
        elem.style.display = 'none';
    
}

function InitPage(){
    var initData = getData();

    var resultInnerHtml = '';

    initData.forEach(button => {
        resultInnerHtml += `<div class= "obertka"><button class="accordion-button">${button.name}</button>` + new AccordionContentComponent(button.text).getTemplate()+ "</div>";
    });

    return resultInnerHtml;
}


export class AccordionComponent extends BaseComponent {
    #buttonName = 'DefaultButtonName';

    constructor(buttonName){
        super();
        this.#buttonName = buttonName;
    }

    getTemplate() {
        return createAccordionComponentTemplate(this.#buttonName);
    }
}