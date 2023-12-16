import {render, RenderPosition} from './render.js';
import { AccordionComponent } from './component/accordion-component.js';

const bodyContainer = document.querySelector('.accordion');

var mainComponents = [new AccordionComponent()]
render(mainComponents, bodyContainer, RenderPosition.BEFOREEND);

function rerender(newType) {
    pageType = newType;
    bodyContainer.replaceChildren();
    var mainComponents = [new AccordionComponent()];
    render(mainComponents, bodyContainer, RenderPosition.BEFOREEND);
}

export {rerender}