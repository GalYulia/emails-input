import { validateEmail } from '../../utils';
import ElementCreator from '../ElementCreator';
import styles from './style.css';

class EmailComponent extends ElementCreator {
  public readonly isValid: boolean;
  private readonly value: string;

  constructor(value: string) {
    super();
    this.value = value;
    this.isValid = validateEmail(value);
  }

  get template() {
    return `<span valid=${this.isValid}
              class="${styles['container']} 
              ${this.isValid ? styles['container_valid'] : styles['container_invalid']}">
              <span class="${styles['contact']}">${this.value}</span>
              <button type="button" class="${styles['contact-remove-button']}">
          </span>`;
  }
}

export default EmailComponent;
