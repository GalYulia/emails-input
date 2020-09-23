import EmailComponent from "../EmailComponent";
import styles from "./style.css";
import {getUniqueName} from "../../utils/index";

export default class EmailsAreaComponent {
    constructor(container) {
        this.container = container;
        this.ref = getUniqueName();
        this.render();
        this.element = document.getElementById(this.ref);
        this.addEventListeners();
    }

    addEventListeners() {
        this.element.addEventListener("blur", (e)=>this.onBlurHandle(e));
        this.element.addEventListener("keydown", (e)=>this.onKeyupHandle(e));
    }

    onKeyupHandle(e){
        if (e.key === 'Enter' || e.key === 'Comma') {
            console.log('ENTER');
        }
    }

    onBlurHandle(e){
        this.addEmail(e.target.textContent);
    }

    addEmail(value) {
        const emailComponent = new EmailComponent(value);
        this.element.insertAdjacentHTML('beforeend', emailComponent.template);
        //надо создать новую текстовую ноду
        this.element.appendChild(document.createTextNode(' '))
    }

    get template() {
        return`<div contenteditable="true" class="${styles["emails-editor-container"]}"" id=${this.ref}>add more people...</div>`
    }

    render() {
        this.container.insertAdjacentHTML('beforeend', this.template);
    }
}


