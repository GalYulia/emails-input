var ExampleForm = (function () {
    'use strict';

    function ExampleForm(emailsInput, btn1, btn2) {
        btn1.addEventListener('click', function () {
            emailsInput.addEmail();
        });
        btn2.addEventListener('click', function () {
            emailsInput.getValidEmailsCount();
        });
    }

    return ExampleForm;

}());
