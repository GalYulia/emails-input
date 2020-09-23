import { validateEmail } from "../../utils/index";
import styles from "./style.css";

class EmailComponent {
constructor(value){
        this.value=value;
        this.isValid=validateEmail(value);
    }

    get template(){
        return `<span class="${styles["email-container"]} ${this.isValid && styles["email-container--valid"]}">${this.value}</div>`
    }
}

export default EmailComponent;