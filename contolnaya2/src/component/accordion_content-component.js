import { BaseComponent } from "../component/base/baseComponent.js";

function createAccordionContentComponentTemplate(Text) {
    return (
        `<div class="accordion-content">
            <p>${Text}</p>
        </div>`
    );
}


export class AccordionContentComponent extends BaseComponent {
    #Text = "Default text";

    constructor(Text){
        super();
        this.#Text = Text;
    }

    getTemplate() {
        return createAccordionContentComponentTemplate(this.#Text);
    }
}