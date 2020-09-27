import EmailsAreaComponent from './components/EmailsAreaComponent';
import {getRandomEmail} from './utils';
import './styles/main.css';

function EmailsInput(container: any) {
  const emailsAreaComponent = new EmailsAreaComponent();
  emailsAreaComponent.render(container);

  return {
    getValidEmailsCount: function (): void {
      alert(`Valid emails count: ${emailsAreaComponent.getValidEmailsCount()}`);
    },
    addEmail: function (value?: string): void {
      emailsAreaComponent.addEmail(value ? value : getRandomEmail());
    }
  };
}
export default EmailsInput;

