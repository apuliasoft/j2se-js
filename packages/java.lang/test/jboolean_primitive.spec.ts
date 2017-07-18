/* tslint:disable:no-unused-expression */
import { expect } from 'chai';
import { Jboolean, is } from '../src/jboolean_primitive';

describe('Jboolean', () => {
    it('should have only two possible values: true and false.', () => {
        const trueBool = new Jboolean(true);
        const falseBool = new Jboolean(false);

        expect(trueBool.value).to.be.true;
        expect(falseBool.value).to.be.false;
    });

    it('should have false as default value.', () => {
        const bool = new Jboolean();

        expect(bool.value).to.be.false;
    });

    it('new Jboolean(true) should be equal to new Jboolean(true)', () => {
        const bool1 = new Jboolean(true);
        const bool2 = new Jboolean(true);

        expect(is(bool1.eq(bool2))).to.be.true;
        expect(is(bool1.ne(bool2))).to.be.false;
    });

    it('new Jboolean(true) should be not equal to new Jboolean(false)', () => {
        const bool1 = new Jboolean(true);
        const bool2 = new Jboolean(false);

        expect(is(bool1.eq(bool2))).to.be.false;
        expect(is(bool1.ne(bool2))).to.be.true;
    });
});
