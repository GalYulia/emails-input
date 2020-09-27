var EmailsInput = (function () {
    'use strict';

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
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var getUniquesString = function (prefix) {
        var res = "" + Math.random().toString(36).substr(2, 9);
        return prefix ? prefix + "_" + res : res;
    };
    var validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    var getRandomEmail = function () {
        var topLevelDomains = ['com', 'ru', 'net', 'org'];
        var randomDomain = topLevelDomains[Math.floor(Math.random() * topLevelDomains.length)];
        return getUniquesString() + "@" + getUniquesString() + "." + randomDomain;
    };

    var ElementCreator = (function () {
        function ElementCreator() {
        }
        Object.defineProperty(ElementCreator.prototype, "template", {
            get: function () {
                return this._template;
            },
            enumerable: false,
            configurable: true
        });
        ElementCreator.prototype.render = function (container, mod) {
            if (mod === void 0) { mod = 'beforebegin'; }
            container.insertAdjacentHTML(mod, this.template);
        };
        return ElementCreator;
    }());

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

    var css_248z = ".style_container__1xvWy {\n    height: 24px;\n    min-width: 0;\n    display: flex;\n    align-items: center;\n    margin: 0 8px 4px 0;\n}\n\n.style_container_valid__AjpQ_ {\n    border-radius: 100px;\n    padding: 0 8px 0 10px;\n    background: rgba(102, 153, 255, 0.2);\n}\n\n.style_container_invalid__1w_5v {\n    border-bottom: 1px dashed #d92929;\n    box-sizing:border-box;\n    transform: translateZ(0);\n}\n\n.style_contact__2FGSj {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.style_contact-remove-button__yLia_ {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 width%3D%228%22 height%3D%228%22%3E%3Cimage width%3D%228%22 height%3D%228%22 xlink%3Ahref%3D%22data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAABGdBTUEAALGPC%2FxhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAFVBMVEUAAAAFADgFADgFADgF ADgFADj%2F%2F%2F9NfUdvAAAABXRSTlMAn19goPODVoEAAAABYktHRAZhZrh9AAAACXBIWXMAAAsTAAAL EwEAmpwYAAAAB3RJTUUH5AkbCDMzjqEURQAAAC9JREFUCNcFwTERACEMALAcOHgFMHRnoAreQevf C4mPLddos%2BKQjShG5xJnlp%2F7AFFFBFIZZWr2AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTA5LTI3 VDA4OjUxOjUxKzAzOjAww64tsgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wOS0yN1QwODo1MTo1 MSswMzowMLLzlQ4AAAAASUVORK5CYII%3D%22%2F%3E%3C%2Fsvg%3E\");\n    background-color: transparent;\n    border: none;\n    height: 8px;\n    min-width: 8px;\n    margin-left: 8px;\n}\n\n.style_contact-remove-button__yLia_:focus {\n    outline: 0 solid;;\n}\n\n";
    var styles = {"container":"style_container__1xvWy","container_valid":"style_container_valid__AjpQ_","container_invalid":"style_container_invalid__1w_5v","contact":"style_contact__2FGSj","contact-remove-button":"style_contact-remove-button__yLia_"};
    styleInject(css_248z);

    var EmailComponent = (function (_super) {
        __extends(EmailComponent, _super);
        function EmailComponent(value) {
            var _this = _super.call(this) || this;
            _this.value = value;
            _this.isValid = validateEmail(value);
            return _this;
        }
        Object.defineProperty(EmailComponent.prototype, "template", {
            get: function () {
                return "<span valid=" + this.isValid + "\n              class=\"" + styles['container'] + " \n              " + (this.isValid ? styles['container_valid'] : styles['container_invalid']) + "\">\n              <span class=\"" + styles['contact'] + "\">" + this.value + "</span>\n              <button type=\"button\" class=\"" + styles['contact-remove-button'] + "\">\n          </span>";
            },
            enumerable: false,
            configurable: true
        });
        return EmailComponent;
    }(ElementCreator));

    var css_248z$1 = ".style_emails-editor-container__2zuNF {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n\n    height: 100%;\n    box-sizing: border-box;\n    display: flex;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    background: #ffffff;\n    border: 1px solid #C3C2CF;\n    border-radius: 4px;\n    padding: 8px;\n    overflow-y: auto;\n    cursor: text;\n}\n.style_emails-input__2gLac {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n\n    height: 24px;\n    flex: 1 0 auto;\n    margin: 0 8px 4px 0;\n    outline: 0 solid;;\n    border: 0;\n}\n.style_emails-input__2gLac::-ms-clear {\n    display: none;\n    height: 0;\n    width: 0;\n}";
    var styles$1 = {"emails-editor-container":"style_emails-editor-container__2zuNF","emails-input":"style_emails-input__2gLac"};
    styleInject(css_248z$1);

    var COMMA_KEY = ',';
    var ENTER_KEY = 'Enter';
    var DELETE_BUTTON_TAG = 'BUTTON';
    var REF_PREFIX = 'ref';
    var EmailsAreaComponent = (function (_super) {
        __extends(EmailsAreaComponent, _super);
        function EmailsAreaComponent() {
            var _this = _super.call(this) || this;
            _this.render = function (container) {
                _super.prototype.render.call(_this, container, 'beforeend');
                _this.init();
            };
            _this.cleanupListeners = function () { return _this.removeEventListeners(); };
            _this.init = function () {
                _this.element = document.getElementById(_this.ref);
                _this.input = _this.element.lastElementChild;
                _this.addEventListeners();
            };
            _this.onKeyupHandle = function (e) {
                if (e.key === ENTER_KEY) {
                    return _this.addEmail(e.target.value);
                }
                if (e.key === COMMA_KEY) {
                    e.preventDefault();
                    return _this.addEmail(e.target.value.split(',')[0]);
                }
            };
            _this.onBlurHandle = function (e) {
                _this.addEmail(e.target.value);
            };
            _this.onPasteHandle = function (e) {
                e.preventDefault();
                var pastedData = (e.clipboardData || (window === null || window === void 0 ? void 0 : window.clipboardData)).getData('text');
                if (pastedData.includes(COMMA_KEY)) {
                    return pastedData.split(COMMA_KEY).forEach(function (email) { return _this.addEmail(email); });
                }
                _this.addEmail(pastedData);
            };
            _this.onClickHandle = function (e) {
                if (e.target.nodeName === DELETE_BUTTON_TAG) {
                    _this.deleteEmail(e.target.parentNode);
                }
                if (e) {
                    var clickedEl = e.target.childNodes[_this.element.children.length];
                    clickedEl && clickedEl.focus();
                }
            };
            _this.addEmail = function (value) {
                if (!value) {
                    return;
                }
                _this.input.value = '';
                var emailComponent = new EmailComponent(value);
                emailComponent.render(_this.input, 'beforebegin');
                emailComponent.isValid && _this.validEmailsCount++;
            };
            _this.deleteEmail = function (targetElement) {
                targetElement.getAttribute('valid') === 'true' && _this.validEmailsCount--;
                _this.element.removeChild(targetElement);
            };
            _this.getValidEmailsCount = function () { return _this.validEmailsCount; };
            _this.ref = getUniquesString(REF_PREFIX);
            _this.validEmailsCount = 0;
            return _this;
        }
        EmailsAreaComponent.prototype.addEventListeners = function () {
            this.element.addEventListener('focusout', this.onBlurHandle);
            this.element.addEventListener('keydown', this.onKeyupHandle);
            this.element.addEventListener('paste', this.onPasteHandle);
            this.element.addEventListener('click', this.onClickHandle);
        };
        EmailsAreaComponent.prototype.removeEventListeners = function () {
            this.element.removeEventListener('focusout', this.onBlurHandle);
            this.element.removeEventListener('keydown', this.onKeyupHandle);
            this.element.removeEventListener('paste', this.onPasteHandle);
            this.element.removeEventListener('click', this.onClickHandle);
        };
        Object.defineProperty(EmailsAreaComponent.prototype, "template", {
            get: function () {
                return "<div class=\"" + styles$1['emails-editor-container'] + "\" id=" + this.ref + ">\n                <input class=\"" + styles$1['emails-input'] + "\" placeholder=\"add more people...\">\n           </div>";
            },
            enumerable: false,
            configurable: true
        });
        return EmailsAreaComponent;
    }(ElementCreator));

    var css_248z$2 = "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\n\ninput {\n    padding: 0;\n}\n\nbutton {\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n}";
    styleInject(css_248z$2);

    function EmailsInput(container) {
        var emailsAreaComponent = new EmailsAreaComponent();
        emailsAreaComponent.render(container);
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.removedNodes[0]) {
                    emailsAreaComponent.cleanupListeners();
                }
            });
        });
        observer.observe(container, {
            childList: true
        });
        return {
            inputRef: emailsAreaComponent.ref,
            getValidEmailsCount: function () {
                alert("Valid emails count: " + emailsAreaComponent.getValidEmailsCount());
            },
            addEmail: function (value) {
                emailsAreaComponent.addEmail(value ? value : getRandomEmail());
            }
        };
    }

    return EmailsInput;

}());
