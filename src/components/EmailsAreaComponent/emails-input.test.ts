import EmailComponent from '../EmailComponent';
import EmailsAreaComponent from './index';

jest.mock('../EmailComponent/index');

beforeEach(() => {
  // @ts-ignore
  EmailComponent.mockClear();
});

describe('Check EmailsAreaComponent', () => {
  it('shouldnt call EmailComponent constructor', () => {
    new EmailsAreaComponent();
    expect(EmailComponent).not.toHaveBeenCalled();
  });

  it('should call EmailComponent constructor twice', () => {
    const emailsInput = new EmailsAreaComponent();
    Object.defineProperty(emailsInput, 'input', {
      value: {},
    });
    Object.defineProperty(emailsInput, 'input.value', {
      value: '',
    });
    emailsInput.addEmail('test@gmail.com');
    emailsInput.addEmail('test1@gmail.com');
    expect(EmailComponent).toHaveBeenCalledTimes(2);
  });

  describe('Check emails count functions', () => {
    beforeAll(() => {
      // @ts-ignore
      EmailComponent.mockImplementation(() => {
        Object.defineProperty(this, 'isValid', {
          value: true,
          writable: true,
        });
        Object.defineProperty(this, 'render', {
          value: jest.fn(),
          writable: true,
        });
        return this;
      });
    });

    it('should return valid emails count', () => {
      const emailsInput = new EmailsAreaComponent();
      jest.spyOn(emailsInput, 'render').mockImplementation(jest.fn());
      Object.defineProperty(emailsInput, 'input', {
        value: {},
      });
      Object.defineProperty(emailsInput, 'input.value', {
        value: '',
      });
      emailsInput.addEmail('test@gmail.com');
      expect(emailsInput.getValidEmailsCount()).toBe(1);
      emailsInput.addEmail('test@gmail.com');
      expect(emailsInput.getValidEmailsCount()).toBe(2);
    });

    it('should return initial emails count', () => {
      const emailsInput = new EmailsAreaComponent();
      expect(emailsInput.getValidEmailsCount()).toBe(0);
    });
  });
});
