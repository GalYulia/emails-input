// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function ExampleForm(emailsInput: any, btn1: any, btn2: any):any {
    btn1.addEventListener('click', ()=> {
        emailsInput.addEmail();
    });

    btn2.addEventListener('click', ()=> {
        emailsInput.getValidEmailsCount();
    });
}

export default ExampleForm;