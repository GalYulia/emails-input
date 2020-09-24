import EmailComponent from '../EmailComponent';
import {getUniqueName} from '../../utils/index';
import styles from './style.css';

export default class EmailsAreaComponent {
  constructor(container) {
    this.container = container;
    this.ref = getUniqueName();
    this.render();
    this.element = document.getElementById(this.ref);
    this.addEventListeners();
  }

  addEventListeners() {
    this.element.addEventListener('focusout', (e)=>this.onBlurHandle(e));
    this.element.addEventListener('keydown', (e)=>this.onKeyupHandle(e));
  }

  onKeyupHandle(e){
    if (e.key === 'Enter') {
      return this.addEmail(e.target.value);
    }

    if (e.key === ',') {
      e.preventDefault();
      return this.addEmail(e.target.value.split(',')[0]);
    }
  }

  onBlurHandle(e){
    this.addEmail(e.target.value);
  }

  addEmail(value) {
    if (!value) {
      return;
    }

    this.element.lastElementChild.value='';
    const emailComponent = new EmailComponent(value);
    this.element.lastElementChild.insertAdjacentHTML('beforebegin', emailComponent.template);
  }

  get template() {
    return`<div class="${styles['emails-editor-container']}" id=${this.ref}>
        <input class="${styles['emails-input']}" placeholder="add more people...">
    </div>`;
  }

  // get template() {
  //   return`
  //   <div>
  //       <input aria-hidden="true" id=${this.ref}>
  //       <textarea placeholder="add more people..." class="${styles['emails-editor-container']}"></textarea>
  //   </div>`;
  // }

  render() {
    this.container.insertAdjacentHTML('beforeend', this.template);
  }
}


