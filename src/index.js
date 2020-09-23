import BaseElement from './components/CustomHTMLElement/index';
import EmailComponent from './components/EmailComponent/index';
import { getUniqueName } from './utils/index';
import styles from './components/EmailsInput/style.css';

export default class EmailsEditor {
  constructor(container) {
    if (typeof container.dataset.ref === 'undefined') {
      const ref = getUniqueName();
      EmailsEditor.refs[ref] = this;
      container.dataset.ref = ref;
    } else {
      return EmailsEditor.refs[container.dataset.ref];
    }

    const ref = getUniqueName();

    this.container = container;
    
    this.render(ref);
    this.selectedElement = document.getElementById(ref); //попробовать без реф, проверить что в прототипе обработчики

      //элемент потерял фокус
    selectedElement.addEventListener("blur", (e)=>this.onBlurHandle(e,selectedElement)); //не надо прокидывать
    //	Любая клавиша отпущена
    selectedElement.addEventListener("keydown", (e)=>this.onKeyupHandle(e,selectedElement));
  }
    

  onKeyupHandle(e,selectedElement){
    if (e.key === 'Enter' || e.key === 'Comma') {
      console.log('ENTER');
    }
  }


  onBlurHandle(e,selectedElement){
      const emailComponent = new EmailComponent(e.target.textContent);
      selectedElement.insertAdjacentHTML('beforeend', emailComponent.template);
  }

  render(ref){
    const template = `<div contenteditable="true" class="${styles["emails-editor-container"]}"" id=${ref}>add more people...</div>`;
    this.container.insertAdjacentHTML('beforeend', template);
  }
}

EmailsEditor.refs = {};

