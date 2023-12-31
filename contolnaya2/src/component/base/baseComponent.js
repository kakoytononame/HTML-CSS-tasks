import {createElement} from '../../render.js';


export class BaseComponent {
  constructor() {
    if (new.target === BaseComponent) {
      throw new Error(`It's AbstractComponent, we dont need to create them!`);
    }

    this.container = this.constructor;
  }


  getTemplate() {
    throw new Error(`It's BaseComponent method, please implement it! `);
  }


  getElement() {
    if (!this.element) {
      this.element = this.createElement(this.getTemplate());
    }

    return this.element;
  }

  getElements(){
    if (!this.element) {
        this.element = this.createElement(this.getTemplate());
    }

    if(this.element.parentElement)
  
      return this.element.parentElement;
  }


  removeElement() {
    this.element = null;
  }

  createElement(template) {
    var newElement = document.createElement('div');
    newElement.innerHTML = template;
  
  
    return newElement.firstElementChild;
  }


}
