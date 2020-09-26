var EmailsEditor = (function () {
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

    var getUniqueName = function () { return "ref_" + Math.random().toString(20).substr(2, 6); };
    var validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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

    var css_248z = ":root {\n    --color-background--transparent: rgba(102, 153, 255, 0.2);\n    --color-background--light: #ffffff;\n    --color-text: #050038;\n    --color-border--error: #d92929;\n    --color-border--regular: #C3C2CF;\n}\n\n.style_container__1xvWy {\n    height: 24px;\n    min-width: 0;\n    display: flex;\n    align-items: center;\n    margin: 0 8px 4px 0;\n}\n\n.style_container--valid__r2_7X {\n    border-radius: 100px;\n    padding: 0 8px 0 10px;\n    background: var(--color-background--transparent);\n}\n\n.style_container--invalid__i5KSO {\n    border-bottom: 1px dashed var(--color-border--error);\n    box-sizing:border-box;\n    transform: translateZ(0);\n}\n\n.style_contact__2FGSj {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.style_contact-remove-button__yLia_ {\n    background-image: url(assets/remove.png);\n    background-color: transparent;\n    border: none;\n    height: 8px;\n    min-width: 8px;\n    margin-left: 8px;\n}\n\n.style_contact-remove-button__yLia_:focus {\n    outline: 0 solid;;\n}\n\n";
    var styles = {"container":"style_container__1xvWy","container--valid":"style_container--valid__r2_7X","container--invalid":"style_container--invalid__i5KSO","contact":"style_contact__2FGSj","contact-remove-button":"style_contact-remove-button__yLia_"};
    styleInject(css_248z);

    var ElementCreator = /** @class */ (function () {
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

    var EmailComponent = /** @class */ (function (_super) {
        __extends(EmailComponent, _super);
        function EmailComponent(value) {
            var _this = _super.call(this) || this;
            _this.value = value;
            _this.isValid = validateEmail(value);
            return _this;
        }
        Object.defineProperty(EmailComponent.prototype, "template", {
            get: function () {
                return "<span valid=" + this.isValid + "\n                class=\"" + styles['container'] + " \n                " + (this.isValid ? styles['container--valid'] : styles['container--invalid']) + "\">\n                <span class=\"" + styles['contact'] + "\">" + this.value + "</span>\n                <button type=\"button\" class=\"" + styles['contact-remove-button'] + "\">\n            </span>";
            },
            enumerable: false,
            configurable: true
        });
        return EmailComponent;
    }(ElementCreator));

    var css_248z$1 = ":root {\n    --color-background--transparent: rgba(102, 153, 255, 0.2);\n    --color-background--light: #ffffff;\n    --color-text: #050038;\n    --color-border--error: #d92929;\n    --color-border--regular: #C3C2CF;\n}\n.style_emails-editor-container__2zuNF {\n  font-family: 'OpenSans-Regular', sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n\n    display: flex;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    background: var(--color-background--light);\n    border: 1px solid var(--color-border--regular);\n    border-radius: 4px;\n    padding: 8px;\n    overflow: scroll;\n}\n.style_emails-input__2gLac {\n  font-family: 'OpenSans-Regular', sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n\n    height: 24px;\n    flex: 1 0 auto;\n    margin: 0 8px 4px 0;\n    outline: 0 solid;;\n    border: 0;\n}";
    var styles$1 = {"emails-editor-container":"style_emails-editor-container__2zuNF","emails-input":"style_emails-input__2gLac"};
    styleInject(css_248z$1);

    var COMMA_KEY = ',';
    var ENTER_KEY = 'Enter';
    var EmailsAreaComponent = /** @class */ (function (_super) {
        __extends(EmailsAreaComponent, _super);
        function EmailsAreaComponent() {
            var _this = _super.call(this) || this;
            _this.DELETE_BUTTON_TAG = 'BUTTON';
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
                var pastedData = e.clipboardData.getData('text'); //todo window
                if (pastedData.includes(COMMA_KEY)) {
                    return pastedData.split(COMMA_KEY).forEach(function (email) { return _this.addEmail(email); });
                }
                _this.addEmail(pastedData);
            };
            _this.onClickHandle = function (e) {
                if (e.target.nodeName == _this.DELETE_BUTTON_TAG) {
                    _this.deleteEmail(e.target);
                }
                // if (e) {
                //   this.input.focus()
                // }
            };
            _this.addEmail = function (value) {
                if (!value) {
                    return;
                }
                // @ts-ignore:
                _this.input.value = '';
                var emailComponent = new EmailComponent(value);
                emailComponent.render(_this.input, 'beforebegin');
                emailComponent.isValid && _this.validEmailsCount++;
            };
            _this.deleteEmail = function (targetElement) {
                targetElement.parentNode.getAttribute('valid') !== 'true' && _this.validEmailsCount--;
                targetElement.parentNode.remove();
            };
            _this.getValidEmailsCount = function () { return _this.validEmailsCount; };
            _this.render = function (container) {
                _super.prototype.render.call(_this, container, 'beforeend');
                _this.init();
            };
            _this.ref = getUniqueName();
            _this.validEmailsCount = 0;
            return _this;
        }
        EmailsAreaComponent.prototype.addEventListeners = function () {
            this.element.addEventListener('focusout', this.onBlurHandle);
            this.element.addEventListener('keydown', this.onKeyupHandle);
            this.element.addEventListener('paste', this.onPasteHandle);
            this.element.addEventListener('click', this.onClickHandle);
        };
        Object.defineProperty(EmailsAreaComponent.prototype, "template", {
            get: function () {
                return "<div class=\"" + styles$1['emails-editor-container'] + "\" id=" + this.ref + ">\n        <input class=\"" + styles$1['emails-input'] + "\" placeholder=\"add more people...\">\n    </div>";
            },
            enumerable: false,
            configurable: true
        });
        return EmailsAreaComponent;
    }(ElementCreator));

    var css_248z$2 = "@font-face {\n    font-family: 'OpenSans-Regular';\n    src: url('../assets/fonts/OpenSans-Regular.woff') format('woff');\n}\n\ninput {\n    padding: 0;\n}\n\nbutton {\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n}";
    styleInject(css_248z$2);

    function EmailsEditor(container) {
        var emailsAreaComponent = new EmailsAreaComponent();
        emailsAreaComponent.render(container);
    }

    return EmailsEditor;

}());
