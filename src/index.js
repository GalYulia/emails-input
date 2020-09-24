import EmailsAreaComponent from './components/EmailsAreaComponent';

function EmailsEditor(container) {
  new EmailsAreaComponent(container);
  // container.insertAdjacentHTML('beforeend', emailsAreaComponent.template);
}

export default EmailsEditor;


