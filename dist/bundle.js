var EmailsEditor = (function () {
  'use strict';

  const getUniqueName = () => `ref_${Math.random().toString(20).substr(2, 6)}`;
  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ":root {\n    --color-background--transparent: rgba(102, 153, 255, 0.2);\n    --color-background--light: #ffffff;\n    --color-text: #050038;\n    --color-border--error: #d92929;\n    --color-border--regular: #C3C2CF;\n}\n:root {\n    --fontFamily: 'Open Sans', serif;\n\n    --regular: {\n        font-family: var(--fontFamily);\n        font-size: 14px;\n        line-height: 24px;\n    };\n}\n.style_container__1xvWy {\n    display: inline-flex;\n    align-items: baseline;\n    height: 24px;\n    margin-right: 8px;\n}\n.style_container--valid__r2_7X {\n    border-radius: 100px;\n    padding-left: 10px;\n    padding-right: 8px;\n    background: var(--color-background--transparent);\n}\n.style_container--invalid__i5KSO {\n    border-bottom: 1px dashed var(--color-border--error);\n    margin-right: 8px;\n}\n.style_contact__2FGSj {\n    /*@apply --regular;*/\n    font-family: 'Open Sans', serif;\n    font-size: 14px;\n    line-height: 24px;\n}\n.style_contact-remove-button__yLia_ {\n    background-image: url(_icons/remove.png);\n    background-color: transparent;\n    background-repeat: no-repeat;\n    border: none;\n    height: 8px;\n    margin-left: 8px;\n}\n\n";
  var styles = {"container":"style_container__1xvWy","container--valid":"style_container--valid__r2_7X","container--invalid":"style_container--invalid__i5KSO","contact":"style_contact__2FGSj","contact-remove-button":"style_contact-remove-button__yLia_"};
  styleInject(css_248z);

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

  var css_248z$1 = ":root {\n    --color-background--transparent: rgba(102, 153, 255, 0.2);\n    --color-background--light: #ffffff;\n    --color-text: #050038;\n    --color-border--error: #d92929;\n    --color-border--regular: #C3C2CF;\n}\n:root {\n    --fontFamily: 'Open Sans', serif;\n\n    --regular: {\n        font-family: var(--fontFamily);\n        font-size: 14px;\n        line-height: 24px;\n    };\n}\n.style_emails-editor-container__2zuNF {\n    display: flex;\n    flex-wrap: wrap;\n    align-content:flex-start;\n    /*временно*/\n    height: 96px;\n    background: var(--color-background--light);\n    border: 1px solid var(--color-border--regular);\n    border-radius: 4px;\n    padding: 8px;\n}\n.style_emails-input__2gLac {\n    /*@apply --regular;*/\n\n    font-family: 'Open Sans', serif;\n    font-size: 14px;\n    line-height: 24px;\n    outline: none;\n    border: 0;\n}";
  var styles$1 = {"emails-editor-container":"style_emails-editor-container__2zuNF","emails-input":"style_emails-input__2gLac"};
  styleInject(css_248z$1);

  class EmailsAreaComponent {
    constructor(container) {
      this.container = container;
      this.ref = getUniqueName();
      this.render();
      this.element = document.getElementById(this.ref);
      this.addEventListeners();
    }

    addEventListeners() {
      this.element.addEventListener('focusout', e => this.onBlurHandle(e));
      this.element.addEventListener('keydown', e => this.onKeyupHandle(e));
    }

    onKeyupHandle(e) {
      if (e.key === 'Enter') {
        return this.addEmail(e.target.value);
      }

      if (e.key === ',') {
        e.preventDefault();
        return this.addEmail(e.target.value.split(',')[0]);
      }
    }

    onBlurHandle(e) {
      this.addEmail(e.target.value);
    }

    addEmail(value) {
      if (!value) {
        return;
      }

      this.element.lastElementChild.value = '';
      const emailComponent = new EmailComponent(value);
      this.element.lastElementChild.insertAdjacentHTML('beforebegin', emailComponent.template);
    }

    get template() {
      return `<div class="${styles$1['emails-editor-container']}" id=${this.ref}>
        <input class="${styles$1['emails-input']}" placeholder="add more people...">
    </div>`;
    } // get template() {
    //   return`
    //   <div>
    //       <input aria-hidden="true" id=${this.ref}>
    //       <textarea placeholder="add more people..." class="${styles['emails-editor-container']}"></textarea>
    //   </div>`;
    // }


    render() {
      this.container.insertAdjacentHTML('beforeend', this.template);
    }

  }

  function EmailsEditor(container) {
    new EmailsAreaComponent(container); // container.insertAdjacentHTML('beforeend', emailsAreaComponent.template);
  }

  return EmailsEditor;

}());
