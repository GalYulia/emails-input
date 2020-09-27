import EmailsAreaComponent from './components/EmailsAreaComponent';
import { getRandomEmail } from './utils';
import './styles/main.css';

function EmailsInput(container: Element | null) {
  const emailsAreaComponent = new EmailsAreaComponent();
  emailsAreaComponent.render(container);

  const observer = new MutationObserver((mutations: Array<MutationRecord>) => {
    mutations.forEach((mutation: MutationRecord) => {
      if (mutation.removedNodes[0]) {
        //todo
        emailsAreaComponent.cleanupListeners();
      }
    });
  });

  observer.observe(container, {
    childList: true,
  });

  return {
    inputRef: emailsAreaComponent.ref,
    getValidEmailsCount: function () {
      return emailsAreaComponent.getValidEmailsCount();
    },
    addEmail: function (value?: string) {
      emailsAreaComponent.addEmail(value ? value : getRandomEmail());
    },
  };
}

export default EmailsInput;
