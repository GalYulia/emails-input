import EmailComponent from '../EmailComponent';
import ElementCreator from '../ElementCreator';
import {getUniquesString} from '../../utils';
// @ts-ignore
import styles from './style.css';

const COMMA_KEY = ',';
const ENTER_KEY = 'Enter';
const DELETE_BUTTON_TAG = 'BUTTON';
const REF_PREFIX = 'ref';

export default class EmailsAreaComponent extends ElementCreator{
  public readonly ref: string;
  private validEmailsCount: number;
  private element: HTMLElement;
  private input: Element;

  constructor() {
    super();
    this.ref = getUniquesString(REF_PREFIX);
    this.validEmailsCount = 0;
  }

  render = (container: Element | null): void => {
    super.render(container, 'beforeend');
    this.init();
  }

  cleanupListeners = () => this.removeEventListeners();

  private init = () => {
    this.element = document.getElementById(this.ref);
    this.input = this.element.lastElementChild;
    this.addEventListeners();
  }

  private addEventListeners() {
    this.element.addEventListener('focusout', this.onBlurHandle);
    this.element.addEventListener('keydown', this.onKeyupHandle);
    this.element.addEventListener('paste', this.onPasteHandle);
    this.element.addEventListener('click', this.onClickHandle);
  }

  private removeEventListeners() {
    this.element.removeEventListener('focusout', this.onBlurHandle);
    this.element.removeEventListener('keydown', this.onKeyupHandle);
    this.element.removeEventListener('paste', this.onPasteHandle);
    this.element.removeEventListener('click', this.onClickHandle);
  }

  private onKeyupHandle = (e: KeyboardEvent) => {
    if (e.key === ENTER_KEY) {
      //@ts-ignore
      return this.addEmail(e.target.value);
    }

    if (e.key === COMMA_KEY) {
      e.preventDefault();
      //@ts-ignore
      return this.addEmail(e.target.value.split(',')[0]);
    }
  }

  private onBlurHandle = (e: FocusEvent) => {
    //@ts-ignore
    this.addEmail(e.target.value);
  }

  private onPasteHandle = (e: ClipboardEvent) => {
    e.preventDefault();
    //@ts-ignore
    const pastedData= (e.clipboardData || window?.clipboardData).getData('text');

    if (pastedData.includes(COMMA_KEY)) {
      return pastedData.split(COMMA_KEY).forEach((email: string) => this.addEmail(email));
    }

    this.addEmail(pastedData);
  }

  private onClickHandle = (e: MouseEvent) => {
    //@ts-ignore
    if (e.target.nodeName === DELETE_BUTTON_TAG) {
      //@ts-ignore
      this.deleteEmail(e.target.parentNode);
    }

    if (e) {
      //@ts-ignore
      const clickedEl = e.target.childNodes[this.element.children.length];
      clickedEl && clickedEl.focus();
    }
  }

  public addEmail = (value: string) => {
    if (!value) {
      return;
    }
    //@ts-ignore
    this.input.value = '';

    const emailComponent = new EmailComponent(value);
    emailComponent.render(this.input, 'beforebegin');
    emailComponent.isValid && this.validEmailsCount++ ;
  }

  private deleteEmail = (targetElement: HTMLElement) => {
    targetElement.getAttribute('valid') === 'true' && this.validEmailsCount--;
    this.element.removeChild(targetElement);
  }

  public getValidEmailsCount = (): number => this.validEmailsCount;

   get template(): string {
    return`<div class="${styles['emails-editor-container']}" id=${this.ref}>
                <input class="${styles['emails-input']}" placeholder="add more people...">
           </div>`;
  }
}


