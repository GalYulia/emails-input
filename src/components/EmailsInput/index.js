
//компонент именно инпута
export default class EmailsEditor {
    constructor(container) {
        // The constructor should only contain the boiler plate code for finding or creating the reference.
        if (typeof container.dataset.ref === 'undefined') {
          this.ref = Math.random();
          ExampleComponent.refs[this.ref] = this;
          container.dataset.ref = this.ref;

          console.log('ref = ', this.ref);
        //   this.init(container);
        }
        // } else {
        //   // If this element has already been instantiated, use the existing reference.
        //   return ExampleComponent.refs[container.dataset.ref];
        // }

        this.container = container;
        this.render();
      }

    init(container) {
      this.container = container;
      this.render();
    }
  
    render() {
      this.container.innerHTML = EmailsEditor.markup(this);
    }
  
    static markup({}) {
      return `
        <textarea id=${this.ref}>Hello, World!</textarea>
      `;
    }
}

  EmailsEditor.refs = {};

// document.addEventListener('DOMContentLoaded', () => {
//   new EmailEditor(document.getElementById('example-component'))
// });

