type EmailInputType = {
  inputRef: string | null;
  getValidEmailsCount: () => boolean;
  addEmail: (value?: string) => void;
};

const initExampleForm = (
  emailsInput: EmailInputType,
  addEmailBtn: HTMLElement,
  getEmailsCountBtn: HTMLElement,
) => {
  addEmailBtn.addEventListener('click', () => {
    emailsInput.addEmail();
  });

  getEmailsCountBtn.addEventListener('click', () => {
    alert(`Valid emails count: ${emailsInput.getValidEmailsCount()}`);
  });
};

export default initExampleForm;
