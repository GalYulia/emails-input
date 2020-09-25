import EmailComponent from '../EmailComponent';
import {getUniqueName} from '../../utils/index';
import styles from './style.css';

const COMMA_KEY = ',';
const ENTER_KEY = 'Enter';

export default class EmailsAreaComponent {
  constructor(container) {
    this.container = container;
    this.ref = getUniqueName();
    this.render();
    this.element = document.getElementById(this.ref);
    this.addEventListeners();
  }

  addEventListeners() {
    this.element.addEventListener('focusout', this.onBlurHandle);
    this.element.addEventListener('keydown', this.onKeyupHandle);
    this.element.addEventListener('paste', this.onPasteHandle);
  }

  onKeyupHandle = (e) => {
    if (e.key === ENTER_KEY) {
      return this.addEmail(e.target.value);
    }

    if (e.key === COMMA_KEY) {
      e.preventDefault();
      return this.addEmail(e.target.value.split(',')[0]);
    }
  }

  onBlurHandle = (e) => {
    console.log(e.target.value);
    this.addEmail(e.target.value);
  }

  onPasteHandle = (e) => {
    e.preventDefault();
    const pastedData= (e.clipboardData || window.clipboardData).getData('text'); //todo window

    if (pastedData.includes(COMMA_KEY)) {
      return pastedData.split(COMMA_KEY).forEach(email => this.addEmail(email));
    }

    this.addEmail(e.target.value);
  }

  addEmail = (value) =>{
    if (!value) {
      return;
    }

    this.element.lastElementChild.value = '';
    const emailComponent = new EmailComponent(value);
    this.element.lastElementChild.insertAdjacentHTML('beforebegin', emailComponent.template);
  }

  get template() {
    return`<div class="${styles['emails-editor-container']}" id=${this.ref}>
        <input class="${styles['emails-input']}" placeholder="add more people...">
    </div>`;
  }

  render = () => this.container.insertAdjacentHTML('beforeend', this.template);

}


