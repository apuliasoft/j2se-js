import { expect } from 'chai';
import { is } from '../src/is';
import { JObject } from '../../java.lang/src/jobject';
import { Jboolean } from '../../java.lang/src/jboolean_primitive';

describe('Comparison Framework (is)', () => {
    it('obj1 is equal to obj1', () => {
        const obj = new JObject();

        expect(is(obj).eq(obj)).to.be.true;
    });

    it('new Jboolean(true) is equal to new Jboolean(true)', () => {
        const bool1 = new Jboolean(true);
        const bool2 = new Jboolean(true);

        expect(is(bool1).eq(bool2)).to.be.true;
        expect(is(bool1).ne(bool2)).to.be.false;
    });

    it('new Jboolean(true) is not equal to new Jboolean(false)', () => {
        const bool1 = new Jboolean(true);
        const bool2 = new Jboolean(false);

        expect(is(bool1).eq(bool2)).to.be.false;
        expect(is(bool1).ne(bool2)).to.be.true;
    });
});