/* tslint:disable:no-unused-expression */
import {expect} from 'chai';
import {Jdouble, jdouble} from '../src/jdouble_primitive';
import {is} from '../src/jboolean_primitive';

describe('Jdouble', () => {

  it('should have 0 as default value', () => {
    const i = jdouble();

    expect(i.value).to.be.eq(0);
  });

  it('should be initializable with number (positive or negative)', () => {
    const i = jdouble(+2.6);
    const j = jdouble(-2.);
    const i2 = jdouble('+2');
    const j2 = jdouble('-2.6');

    expect(i.value).to.be.eq(2.6);
    expect(j.value).to.be.eq(-2.);
    expect(i2.value).to.be.eq(2);
    expect(j2.value).to.be.eq(-2.6);
  });

  it('should be initializable with hexadecimal (positive or negative)', () => {
    const i = jdouble(0x1a);
    const j = jdouble(-0x1a);
    const i2 = jdouble('+0X1a');
    const j2 = jdouble('-0x1a');

    expect(i.value).to.be.eq(26);
    expect(j.value).to.be.eq(-26);
    expect(i2.value).to.be.eq(26);
    expect(j2.value).to.be.eq(-26);
  });

  it('should be initializable with binary (positive or negative)', () => {
    const i = jdouble(+0b11010);
    const j = jdouble(-0b11010);
    const i2 = jdouble('0B11010');
    const j2 = jdouble('-0b11010');

    expect(i.value).to.be.eq(26);
    expect(j.value).to.be.eq(-26);
    expect(i2.value).to.be.eq(26);
    expect(j2.value).to.be.eq(-26);
  });

  it('should be initializable with long (positive or negative)', () => {
    const i = jdouble('26l');
    const j = jdouble('-26l');
    expect(i.value).to.be.eq(26);
    expect(j.value).to.be.eq(-26);
  });

  it('should be initializable with float (positive or negative)', () => {
    const d = jdouble('26F');
    const d2 = jdouble('-26F');
    const d3 = jdouble('2.6F');
    const d4 = jdouble('-2.6e1f');
    const d5 = jdouble('.6F');
    const d6 = jdouble('-.6F');
    const d7 = jdouble('2.F');
    const d8 = jdouble('-2.F');

    expect(d.value).to.be.eq(26.0);
    expect(d2.value).to.be.eq(-26.0);
    expect(d3.value).to.be.eq(2.6);
    expect(d4.value).to.be.eq(-26);
    expect(d5.value).to.be.eq(0.6);
    expect(d6.value).to.be.eq(-0.6);
    expect(d7.value).to.be.eq(2.0);
    expect(d8.value).to.be.eq(-2.0);
  });

  it('should be initializable with double (positive or negative)', () => {
    const d = jdouble('26d');
    const d2 = jdouble('-26D');
    const d3 = jdouble('2.6D');
    const d4 = jdouble('-2.6D');
    const d5 = jdouble('.6d');
    const d6 = jdouble('-.6e1d');
    const d7 = jdouble('2.d');
    const d8 = jdouble('-2.D');

    expect(d.value).to.be.eq(26.0);
    expect(d2.value).to.be.eq(-26.0);
    expect(d3.value).to.be.eq(2.6);
    expect(d4.value).to.be.eq(-2.6);
    expect(d5.value).to.be.eq(0.6);
    expect(d6.value).to.be.eq(-6);
    expect(d7.value).to.be.eq(2.0);
    expect(d8.value).to.be.eq(-2.0);
  });

  it('should not be initializable with an invalid string', () => {
    const errorMessage = 'incompatible types: string cannot be converted to double';
    expect(() => jdouble('hello world')).to.throw(errorMessage);
    expect(() => jdouble('3.0.2')).to.throw(errorMessage);
    expect(() => jdouble('.f')).to.throw(errorMessage);
    expect(() => jdouble('a26')).to.throw(errorMessage);
  });

  it('should be max 1.7976931348623157E308 without overflow', () => {
    const max = 1.7976931348623157E308;
    const i = jdouble(max + 1);

    expect(i.value).to.be.eq(max);
  });

  it('should be min 4.9E-324 and the MIN+1 should be 1', () => {
    const i = jdouble((4.9E-324) + 1);

    expect(i.value).to.be.eq(1);
  });

  it('jdouble(24) should be equal to jdouble(24)', () => {
    const i1 = jdouble(24);
    const i2 = jdouble(24);

    expect(is(i1.eq(i2))).to.be.true;
    expect(is(i1.ne(i2))).to.be.false;
  });

  it('jdouble(5) should be not equal to jdouble(6)', () => {
    const i1 = jdouble(5);
    const i2 = jdouble(6);

    expect(is(i1.eq(i2))).to.be.false;
    expect(is(i1.ne(i2))).to.be.true;
  });

  it('jdouble(5) should be lower then jdouble(6)', () => {
    const i1 = jdouble(5);
    const i2 = jdouble(6);

    expect(is(i1.lt(i2))).to.be.true;
    expect(is(i1.ge(i2))).to.be.false;
  });

  it('jdouble(6) should be greater than jdouble(5)', () => {
    const i1 = jdouble(6);
    const i2 = jdouble(5);

    expect(is(i1.gt(i2))).to.be.true;
    expect(is(i1.le(i2))).to.be.false;
  });


  it('+(jdouble(-1)) should be equal to jdouble(-1)', () => {
    const i = jdouble(-1);

    expect(is(i.plus().eq(i))).to.be.true;
  });

  it('-(jdouble(-1)) should be equal to jdouble(1)', () => {
    const i = jdouble(-1);
    const j = jdouble(1);

    expect(is(i.minus().eq(j))).to.be.true;
  });

  it('++(jdouble(-1)) should be equal to jdouble(0)', () => {
    const i = jdouble(-1);
    const j = jdouble(0);

    expect(is(i.inc().eq(j))).to.be.true;
  });

  it('--(jdouble(-1)) should be equal to jdouble(-2)', () => {
    const i = jdouble(-1);
    const j = jdouble(-2);

    expect(is(i.dec().eq(j))).to.be.true;
  });

  it('jdouble(6) + jdouble(5) should be equal to jdouble(11)', () => {
    const i1 = jdouble(6);
    const i2 = jdouble(5);
    const res = jdouble(11);

    expect(is(i1.add(i2).eq(res))).to.be.true;
  });

  it('jdouble(6) - jdouble(5) should be equal to jdouble(1)', () => {
    const i1 = jdouble(6);
    const i2 = jdouble(5);
    const res = jdouble(1);

    expect(is(i1.sub(i2).eq(res))).to.be.true;
  });

  it('jdouble(6) * jdouble(5) should be equal to jdouble(30)', () => {
    const i1 = jdouble(6);
    const i2 = jdouble(5);
    const res = jdouble(30);

    expect(is(i1.mul(i2).eq(res))).to.be.true;
  });

  it('jdouble(12) / jdouble(6) should be equal to jdouble(2)', () => {
    const i1 = jdouble(12);
    const i2 = jdouble(6);
    const res = jdouble(2);

    expect(is(i1.div(i2).eq(res))).to.be.true;
  });

  it('jdouble(12) % jdouble(6) should be equal to jdouble(0)', () => {
    const i1 = jdouble(12);
    const i2 = jdouble(6);
    const res = jdouble(0);

    expect(is(i1.mod(i2).eq(res))).to.be.true;
  });

  it('toString should convert a Jint in a string for printing', () => {
    const i = jdouble(5.6);

    expect(i.toString()).to.be.eq('5.6');
  });
});
