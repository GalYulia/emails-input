import EmailComponent from '../EmailComponent';
import ElementCreator from '../ElementCreator';
import {getUniqueName} from '../../utils';
// @ts-ignore
import styles from './style.css';

const COMMA_KEY = ',';
const ENTER_KEY = 'Enter';

export default class EmailsAreaComponent extends ElementCreator{
  private readonly ref: string;
  private readonly DELETE_BUTTON_TAG = 'BUTTON';
  private validEmailsCount: number;
  private element: HTMLElement;

  constructor() {
    super();
    this.ref = getUniqueName();
    this.validEmailsCount = 0;
  }

  private init = () => {
    this.element = document.getElementById(this.ref);
    this.addEventListeners();
  }

  private addEventListeners() {
    this.element.addEventListener('focusout', this.onBlurHandle);
    this.element.addEventListener('keydown', this.onKeyupHandle);
    this.element.addEventListener('paste', this.onPasteHandle);
    this.element.addEventListener('click', this.onClickHandle);
  }

  private onKeyupHandle = (e: any) => {
    if (e.key === ENTER_KEY) {
      return this.addEmail(e.target.value);
    }

    if (e.key === COMMA_KEY) {
      e.preventDefault();
      return this.addEmail(e.target.value.split(',')[0]);
    }
  }

  private onBlurHandle = (e: any) => {
    this.addEmail(e.target.value);
  }

  private onPasteHandle = (e: any) => {
    e.preventDefault();

    const pastedData= e.clipboardData.getData('text'); //todo window

    if (pastedData.includes(COMMA_KEY)) {
      return pastedData.split(COMMA_KEY).forEach((email: string) => this.addEmail(email));
    }

    this.addEmail(e.target.value);
  }

  private onClickHandle = (e: any) => {
    this.deleteEmail(e.target);
  }

  private addEmail = (value: string) => {
    if (!value) {
      return;
    }
    const emailInput = this.element.lastElementChild;
    // @ts-ignore:
    emailInput.value = '';

    const emailComponent = new EmailComponent(value);
    emailComponent.render(emailInput, 'beforebegin');
    emailComponent.isValid && this.validEmailsCount++ ;
  }

  private deleteEmail = (targetElement: any) => {
    if (targetElement && targetElement.nodeName == this.DELETE_BUTTON_TAG) {
      targetElement.parentNode.getAttribute('valid') !== 'true' && this.validEmailsCount--;
      targetElement.parentNode.remove();
    }
  }

  public getValidEmailsCount = (): number => this.validEmailsCount;

  public get template(): string {
    return`<div class="${styles['emails-editor-container']}" id=${this.ref}>
        <input class="${styles['emails-input']}" placeholder="add more people...">
    </div>`;
  }

  render = (container: HTMLElement): void => {
    super.render(container, 'beforeend');
    this.init();
  }

}


