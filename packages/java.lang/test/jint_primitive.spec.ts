import { expect } from 'chai';
import { is } from '../src/jboolean_primitive';
import { Jint } from '../src/jint_primitive';

describe('Jint', () => {

    it('should have 0 as default value.', () => {
        const i = new Jint();

        expect(i.value).to.be.eq(0);
    });

    it('new Jint(24) should be equal to new Jint(24)', () => {
        const i1 = new Jint(24);
        const i2 = new Jint();
        i2.value = 24;

        expect(is(i1.eq(i2))).to.be.true;
        expect(is(i1.ne(i2))).to.be.false;
    });

    it('new Jint(5) should be not equal to new Jint(6)', () => {
        const i1 = new Jint(5);
        const i2 = new Jint();
        i2.value = 6;

        expect(is(i1.eq(i2))).to.be.false;
        expect(is(i1.ne(i2))).to.be.true;
    });
});
