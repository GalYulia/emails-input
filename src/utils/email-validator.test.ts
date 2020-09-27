import {validateEmail} from './index';
describe('EmailComponent constructs with value', () => {
    it('email invalid', () => {
        const isValid = validateEmail('em@.sdf');

        expect(isValid).toBeFalsy();
    });
});