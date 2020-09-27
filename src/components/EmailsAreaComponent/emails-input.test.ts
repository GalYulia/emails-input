import EmailComponent from '../EmailComponent';
import EmailsAreaComponent from './index';
jest.mock('../EmailComponent/index');

beforeEach(() => {
  //@ts-ignore
  EmailComponent.mockClear();
});

describe('EmailsAreaComponent render without any emails', () => {
  it('email invalid', () => {
    const emailsInput = new EmailsAreaComponent();
    expect(EmailComponent).not.toHaveBeenCalled();
  });

  it('emaild invalid', () => {
    //
    // const containerSpy = jest.spyOn(document, 'getElementById');
    // const mockElement = document.createElement('div');
    // containerSpy.mockReturnValue(mockElement);
    //
    // const emailsInput = new EmailsAreaComponent();
    // let  renderSpy = jest.spyOn(emailsInput, 'render').mockImplementation(jest.fn());
    //
    // const inputSpy = jest.spyOn(emailsInput, 'input');
    // inputSpy.mockReturnValue({});
    // emailsInput.addEmail('test');
    // expect(EmailComponent).toHaveBeenCalledTimes(1);
  });
});
