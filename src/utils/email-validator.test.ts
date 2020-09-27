import { validateEmail } from './index';

describe('Email validation', () => {
  it('email invalid', () => {
    expect(validateEmail('em@.sdf')).toBeFalsy();
    expect(validateEmail('em@mail.r')).toBeFalsy();
    expect(validateEmail('em@mail d.sdf')).toBeFalsy();
  });

  it('email valid', () => {
    expect(validateEmail('em@dasdasd.sdf')).toBeTruthy();
  });
});
