import EmailComponent from './index';

describe('EmailComponent constructs with value', () => {
  it('email invalid', () => {
    const emailComponent = new EmailComponent('Lorem');
    expect(emailComponent.isValid).toBeFalsy();
    // Object.defineProperty(emailComponent, 'isValid', {value: false});
  });
});
