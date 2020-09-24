import {validateEmail} from '../../utils/index';
import styles from './style.css';

class EmailComponent {
  constructor(value) {
    this.value = value;
    this.isValid = validateEmail(value);
  }

  get template() {
    return `<span class="${styles['container']} 
                ${this.isValid ? styles['container--valid'] : styles['container--invalid']}">
                <span class="${styles['contact']}">${this.value}</span>
                <button type="button" class="${styles['contact-remove-button']}">
            </span>`;
  }
}

export default EmailComponent;
