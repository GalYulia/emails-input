import BaseElement from './components/CustomHTMLElement/index';
import EmailComponent from './components/EmailComponent/index';
import { getUniqueName } from './utils/index';
import styles from './components/EmailsAreaComponent/style.css';
import EmailsAreaComponent from "./components/EmailsAreaComponent";

// export const EmailsEditor = (container) => {
//   // this.container=container;
//   const emailsInput = new EmailsAreaComponent(container);
//   // this.container.insertAdjacentHTML('beforeend', emailsInput.template);
//
//   const addEmail = () => {
//
//   }
//
//   const getEmailsCount = () => {
//
//   }
// }

function EmailsEditor(container) {
 const emailsAreaComponent = new EmailsAreaComponent(container);
 // container.insertAdjacentHTML('beforeend', emailsAreaComponent.template);
}

export default EmailsEditor;


