/* tslint:disable:no-unused-expression */
import {expect} from 'chai';
import {Jboolean, is, jboolean} from '../src/jboolean_primitive';

describe('Jboolean', () => {
  it('should have false as default value', () => {
    const bool = jboolean();

    expect(bool.value).to.be.false;
  });

  it('should have only two possible values: true and false', () => {
    const trueBool = jboolean(true);
    const falseBool = jboolean(false);
    const trueBool2 = jboolean('true');
    const falseBool2 = jboolean('false');
    const trueBool3 = jboolean('TRUE');
    const falseBool3 = jboolean('FALSE');

    expect(trueBool.value).to.be.true;
    expect(falseBool.value).to.be.false;
    expect(trueBool2.value).to.be.true;
    expect(falseBool2.value).to.be.false;
    expect(trueBool3.value).to.be.true;
    expect(falseBool3.value).to.be.false;
  });

  it('should not be initializable with an invalid string', () => {
    const errorMessage = 'incompatible types: string cannot be converted to boolean';
    expect(() => jboolean('hello world')).to.throw(errorMessage);
    expect(() => jboolean('not true')).to.throw(errorMessage);
  });

  it('jboolean(true) should be equal to jboolean(true)', () => {
    const bool1 = jboolean(true);
    const bool2 = jboolean(true);

    expect(is(bool1.eq(bool2))).to.be.true;
    expect(is(bool1.ne(bool2))).to.be.false;
  });

  it('jboolean(true) should be not equal to jboolean(false)', () => {
    const bool1 = jboolean(true);
    const bool2 = jboolean(false);

    expect(is(bool1.eq(bool2))).to.be.false;
    expect(is(bool1.ne(bool2))).to.be.true;
  });

  it('!jboolean(true) should be equal to jboolean(false)', () => {
    const bool1 = jboolean(true);
    const bool2 = jboolean(false);

    expect(is(bool1.not().eq(bool2))).to.be.true;
  });

  it('toString should convert a Jboolean in a string for printing', () => {
    const bool = jboolean(true);

    expect(bool.toString()).to.be.eq('true');
  });
});
