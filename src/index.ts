import EmailsAreaComponent from './components/EmailsAreaComponent';
import './styles/main.css';

function EmailsEditor(container: any): void {
  const emailsAreaComponent = new EmailsAreaComponent();
  emailsAreaComponent.render(container);

  const getValidEmailsCount = () => {
    alert(`Valid emails count: ${emailsAreaComponent.getValidEmailsCount()}`);
  };

  const addRandomEmails = () => {
   console.log('addRandomEmails');
  };
}

export default EmailsEditor;


