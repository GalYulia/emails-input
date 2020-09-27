var ExampleForm = (function () {
    'use strict';

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
