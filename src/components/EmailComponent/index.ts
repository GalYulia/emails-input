import {validateEmail} from '../../utils';
// @ts-ignore
import styles from './style.css';
import ElementCreator from '../ElementCreator';

class EmailComponent extends ElementCreator{
  public readonly isValid: boolean;
  private readonly value: string;

  constructor(value: string) {
    super();
    this.value = value;
    this.isValid = validateEmail(value);
  }

  get template(): string {
    return `<span valid=${this.isValid}
                class="${styles['container']} 
                ${this.isValid ? styles['container--valid'] : styles['container--invalid']}">
                <span class="${styles['contact']}">${this.value}</span>
                <button type="button" class="${styles['contact-remove-button']}">
            </span>`;
  }
}

export default EmailComponent;
