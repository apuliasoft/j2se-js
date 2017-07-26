/* tslint:disable:no-unused-expression */
import { expect } from 'chai';
import { Jdouble } from '../src/jdouble_primitive';
import { is } from '../src/jboolean_primitive';

describe('Jdouble', () => {

    it('should have 0 as default _value', () => {
        const i = new Jdouble();

        expect(i.value).to.be.eq(0);
    });

    it('should be 1 when set to 1.9', () => {
        const i = new Jdouble(1.9);

        expect(i.value).to.be.eq(1.9);
    });

    it('should be max 1.7976931348623157E308 without overflow', () => {
        const max = 1.7976931348623157E308;
        const i = new Jdouble(max + 1);

        expect(i.value).to.be.eq(max);
    });

    it('should be min 4.9E-324 and the MIN+1 should be 1', () => {
        const i = new Jdouble((4.9E-324) + 1);

        expect(i.value).to.be.eq(1);
    });

    it('new Jdouble(24) should be equal to new Jdouble(24)', () => {
        const i1 = new Jdouble(24);
        const i2 = new Jdouble();
        i2.value = 24;

        expect(is(i1.eq(i2))).to.be.true;
        expect(is(i1.ne(i2))).to.be.false;
    });

    it('new Jdouble(5) should be not equal to new Jdouble(6)', () => {
        const i1 = new Jdouble(5);
        const i2 = new Jdouble();
        i2.value = 6;

        expect(is(i1.eq(i2))).to.be.false;
        expect(is(i1.ne(i2))).to.be.true;
    });

    it('new Jdouble(5) should be lower then new Jdouble(6)', () => {
        const i1 = new Jdouble(5);
        const i2 = new Jdouble(6);

        expect(is(i1.lt(i2))).to.be.true;
        expect(is(i1.ge(i2))).to.be.false;
    });

    it('new Jdouble(6) should be greater than new Jdouble(5)', () => {
        const i1 = new Jdouble(6);
        const i2 = new Jdouble(5);

        expect(is(i1.gt(i2))).to.be.true;
        expect(is(i1.le(i2))).to.be.false;
    });
});
