var EmailsInput=function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};function t(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}var n=function(e){var t=""+Math.random().toString(36).substr(2,9);return e?e+"_"+t:t},i=function(){function e(){}return Object.defineProperty(e.prototype,"template",{get:function(){return this._template},enumerable:!1,configurable:!0}),e.prototype.render=function(e,t){void 0===t&&(t="beforebegin"),e.insertAdjacentHTML(t,this.template)},e}();function a(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var r="style_container__1xvWy",o="style_container_valid__AjpQ_",l="style_container_invalid__1w_5v",s="style_contact__2FGSj",d="style_contact-remove-button__yLia_";a(".style_container__1xvWy{height:24px;min-width:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:0 8px 4px 0}.style_container_valid__AjpQ_{border-radius:100px;padding:0 8px 0 10px;background:rgba(102,153,255,.2)}.style_container_invalid__1w_5v{border-bottom:1px dashed #d92929;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:translateZ(0);transform:translateZ(0)}.style_contact__2FGSj{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.style_contact-remove-button__yLia_{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='8' height='8'%3E%3Cimage width='8' height='8' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAFVBMVEUAAAAFADgFADgFADgF ADgFADj///9NfUdvAAAABXRSTlMAn19goPODVoEAAAABYktHRAZhZrh9AAAACXBIWXMAAAsTAAAL EwEAmpwYAAAAB3RJTUUH5AkbCDMzjqEURQAAAC9JREFUCNcFwTERACEMALAcOHgFMHRnoAreQevf C4mPLddos+KQjShG5xJnlp/7AFFFBFIZZWr2AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTI3 VDA4OjUxOjUxKzAzOjAww64tsgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0yN1QwODo1MTo1 MSswMzowMLLzlQ4AAAAASUVORK5CYII='/%3E%3C/svg%3E\");background-color:transparent;border:none;height:8px;min-width:8px;margin-left:8px}.style_contact-remove-button__yLia_:focus{outline:0 solid}");var u=function(e){function n(t){var n=e.call(this)||this;return n.value=t,n.isValid=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),n}return t(n,e),Object.defineProperty(n.prototype,"template",{get:function(){return"<span valid="+this.isValid+'\n              class="'+r+" \n              "+(this.isValid?o:l)+'">\n              <span class="'+s+'">'+this.value+'</span>\n              <button type="button" class="'+d+'">\n          </span>'},enumerable:!1,configurable:!0}),n}(i),c="style_emails-editor-container__2zuNF",p="style_emails-input__2gLac";a(".style_emails-editor-container__2zuNF{font-family:Open Sans,sans-serif;font-size:14px;line-height:24px;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-line-pack:start;align-content:flex-start;background:#fff;border:1px solid #c3c2cf;border-radius:4px;padding:8px;overflow-y:auto;cursor:text}.style_emails-input__2gLac{font-family:Open Sans,sans-serif;font-size:14px;line-height:24px;height:24px;-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;margin:0 8px 4px 0;outline:0 solid;border:0}.style_emails-input__2gLac::-ms-clear{display:none;height:0;width:0}");var A=function(e){function i(){var t=e.call(this)||this;return t.render=function(n){e.prototype.render.call(t,n,"beforeend"),t.init()},t.cleanupListeners=function(){return t.removeEventListeners()},t.init=function(){t.element=document.getElementById(t.ref),t.input=t.element.lastElementChild,t.addEventListeners()},t.addEventListeners=function(){t.element.addEventListener("focusout",t.onBlurHandle),t.element.addEventListener("keydown",t.onKeyupHandle),t.element.addEventListener("paste",t.onPasteHandle),t.element.addEventListener("click",t.onClickHandle)},t.removeEventListeners=function(){t.element.removeEventListener("focusout",t.onBlurHandle),t.element.removeEventListener("keydown",t.onKeyupHandle),t.element.removeEventListener("paste",t.onPasteHandle),t.element.removeEventListener("click",t.onClickHandle)},t.onKeyupHandle=function(e){return"Enter"===e.key?t.addEmail(e.target.value):","===e.key?(e.preventDefault(),t.addEmail(e.target.value.split(",")[0])):void 0},t.onBlurHandle=function(e){t.addEmail(e.target.value)},t.onPasteHandle=function(e){var n;e.preventDefault();var i=null===(n=e.clipboardData)||void 0===n?void 0:n.getData("text/plain");if(i)return i.includes(",")?i.split(",").forEach((function(e){return t.addEmail(e)})):void t.addEmail(i)},t.onClickHandle=function(e){if("BUTTON"===e.target.nodeName&&t.deleteEmail(e.target.parentElement),e){var n=e.target.childNodes[t.element.children.length];n&&n.focus()}},t.addEmail=function(e){if(e){t.input.value="";var n=new u(e);n.render(t.input,"beforebegin"),n.isValid&&t.validEmailsCount++}},t.deleteEmail=function(e){"true"===e.getAttribute("valid")&&t.validEmailsCount--,t.element.removeChild(e)},t.getValidEmailsCount=function(){return t.validEmailsCount},t.ref=n("ref"),t.validEmailsCount=0,t}return t(i,e),Object.defineProperty(i.prototype,"template",{get:function(){return'<div class="'+c+'" id='+this.ref+'>\n                <input class="'+p+'" placeholder="add more people...">\n           </div>'},enumerable:!1,configurable:!0}),i}(i);return a('@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");button,input{padding:0}button{margin:0;cursor:pointer}'),function(e){var t=new A;return t.render(e),new MutationObserver((function(e){e.forEach((function(e){var n;(null===(n=e.removedNodes[0])||void 0===n?void 0:n.id)===t.ref&&t.cleanupListeners()}))})).observe(e,{childList:!0}),{inputRef:t.ref,getValidEmailsCount:function(){return t.getValidEmailsCount()},addEmail:function(e){var i,a;t.addEmail(e||(a=(i=["com","ru","net","org"])[Math.floor(Math.random()*i.length)],n()+"@"+n()+"."+a))}}}}();
