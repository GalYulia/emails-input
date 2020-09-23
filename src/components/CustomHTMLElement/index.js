class BaseElement {
    _htmlElement;//protected

    constructor(htmlString){
        console.log('constructor');
        this.html = htmlString;
    }

    get html() {   
        console.log('get' ); 
        return this._htmlElement;
      }
    
    set html(value) {   
        console.log('set', value );  
        this._htmlElement = value ? this.createElementFromHTML(value) : '';
    }

    createElementFromHTML(value) {
        // if (window.DOMParser) {
        //     const parser = new DOMParser();
        //     const doc = parser.parseFromString(this.html, 'text/html');
        //     return doc.body;
        // }
    
        const dom = document.createElement('div');
        dom.innerHTML = value.trim();
        return dom;


        // for ie11
        // var mylist = document.getElementById('mylist');
        // mylist.insertAdjacentHTML('beforeend', '<li>third</li>');
        };
}

export default BaseElement;