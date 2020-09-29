import EmailComponent from '../EmailComponent';
import ElementCreator from '../ElementCreator';
import { getUniquesString } from '../../utils';
import styles from './style.css';

const COMMA_KEY = ',';
const ENTER_KEY = 'Enter';
const DELETE_BUTTON_TAG = 'BUTTON';
const REF_PREFIX = 'ref';

type UserEventType = {
  target: HTMLInputElement;
};

export default class EmailsAreaComponent extends ElementCreator {
  public readonly ref: string;
  private validEmailsCount: number;
  private element: HTMLElement;
  private input: HTMLInputElement;

  constructor() {
    super();
    this.ref = getUniquesString(REF_PREFIX);
    this.validEmailsCount = 0;
  }

  render(container: Element | null) {
    super.render(container, 'beforeend');
    this.init();
  }

  cleanupListeners() {
    this.removeEventListeners();
  }

  private init() {
    this.element = document.getElementById(this.ref);
    this.input = this.element.lastElementChild as HTMLInputElement;
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

  private onKeyupHandle = (e: KeyboardEvent & UserEventType) => {
    if (e.key === ENTER_KEY) {
      this.addEmailAndScroll(e.target.value);
    }

    if (e.key === COMMA_KEY) {
      e.preventDefault();
      return this.addEmailAndScroll(e.target.value.split(',')[0]);
    }
  };

  private onBlurHandle = (e: FocusEvent & UserEventType) => {
    this.addEmail(e.target.value);
  };

  private onPasteHandle = (e: ClipboardEvent) => {
    e.preventDefault();

    //@ts-ignore need to define window
    const pastedData = (e.clipboardData || window?.clipboardData).getData('text');
    if (!pastedData) {
      return;
    }

    if (pastedData.indexOf(COMMA_KEY) !== -1) {
      pastedData.split(COMMA_KEY).forEach((email: string) => this.addEmail(email));
    } else {
      this.addEmail(pastedData);
    }

    this.scrollToInput();
  };

  private onClickHandle = (e: UserEventType & MouseEvent) => {
    if (e.target.nodeName === DELETE_BUTTON_TAG) {
      this.deleteEmail(e.target.parentElement);
    }

    if (e) {
      const clickedEl = e.target.childNodes[this.element.children.length];
      clickedEl && (clickedEl as HTMLElement).focus();
    }
  };

  public addEmailAndScroll(value: string) {
    this.addEmail(value);
    this.scrollToInput();
  }

  private addEmail(value: string) {
    if (!value) {
      return;
    }

    this.input.value = '';

    const emailComponent = new EmailComponent(value);
    emailComponent.render(this.input, 'beforebegin');
    emailComponent.isValid && this.validEmailsCount++;
  }

  private scrollToInput() {
    this.input.scrollIntoView();
  }

  private deleteEmail(targetElement: HTMLElement) {
    targetElement.getAttribute('valid') === 'true' && this.validEmailsCount--;
    this.element.removeChild(targetElement);
  }

  public getValidEmailsCount(): number {
    return this.validEmailsCount;
  }

  get template(): string {
    return `<div class="${styles['emails-editor-container']}" id=${this.ref}>
                <input class="${styles['emails-input']}" placeholder="add more people...">
           </div>`;
  }
}
