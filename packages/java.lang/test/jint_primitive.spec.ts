/* tslint:disable:no-unused-expression */
import {expect} from 'chai';
import {Jint, jint} from '../src/jint_primitive';
import {is} from '../src/jboolean_primitive';

describe('Jint', () => {

  it('should have 0 as default _value', () => {
    const i = jint();

    expect(i.value).to.be.eq(0);
  });

  it('should be initializable with number (positive or negative)', () => {
    const i = jint(26);
    const j = jint(-26);
    const i2 = jint('26');
    const j2 = jint('-26');

    expect(i.value).to.be.eq(26);
    expect(j.value).to.be.eq(-26);
    expect(i2.value).to.be.eq(26);
    expect(j2.value).to.be.eq(-26);
  });

  it('should be initializable with hexadecimal (positive or negative)', () => {
    const i = jint(0x1a);
    const j = jint(-0x1a);
    const i2 = jint('0X1a');
    const j2 = jint('-0x1a');

    expect(i.value).to.be.eq(26);
    expect(j.value).to.be.eq(-26);
    expect(i2.value).to.be.eq(26);
    expect(j2.value).to.be.eq(-26);
  });

  it('should be initializable with binary (positive or negative)', () => {
    const i = jint(0b11010);
    const j = jint(-0b11010);
    const i2 = jint('0B11010');
    const j2 = jint('-0b11010');

    expect(i.value).to.be.eq(26);
    expect(j.value).to.be.eq(-26);
    expect(i2.value).to.be.eq(26);
    expect(j2.value).to.be.eq(-26);
  });

  it('should not be initializable with long (positive or negative)', () => {
    const errorMessage = 'incompatible types: possible lossy conversion from long to int';
    expect(() => jint('26L')).to.throw(errorMessage);
    expect(() => jint('-26l')).to.throw(errorMessage);
  });

  it('should not be initializable with float (positive or negative)', () => {
    const errorMessage = 'incompatible types: possible lossy conversion from float to int';
    expect(() => jint('26F')).to.throw(errorMessage);
    expect(() => jint('-26F')).to.throw(errorMessage);

    expect(() => jint('2.6f')).to.throw(errorMessage);
    expect(() => jint('-2.6f')).to.throw(errorMessage);

    expect(() => jint('.6F')).to.throw(errorMessage);
    expect(() => jint('-.6f')).to.throw(errorMessage);

    expect(() => jint('2.f')).to.throw(errorMessage);
    expect(() => jint('-2.f')).to.throw(errorMessage);
  });

  it('should not be initializable with double (positive or negative)', () => {
    const errorMessage = 'incompatible types: possible lossy conversion from double to int';
    expect(() => jint('26d')).to.throw(errorMessage);
    expect(() => jint('-26D')).to.throw(errorMessage);

    expect(() => jint('2.6D')).to.throw(errorMessage);
    expect(() => jint('-2.6D')).to.throw(errorMessage);

    expect(() => jint('.6d')).to.throw(errorMessage);
    expect(() => jint('-.6d')).to.throw(errorMessage);

    expect(() => jint('2.d')).to.throw(errorMessage);
    expect(() => jint('-2.D')).to.throw(errorMessage);

    expect(() => jint('2.6')).to.throw(errorMessage);
    expect(() => jint('-2.6')).to.throw(errorMessage);

    expect(() => jint('.6')).to.throw(errorMessage);
    expect(() => jint('-.6')).to.throw(errorMessage);

    expect(() => jint('2.')).to.throw(errorMessage);
    expect(() => jint('-2.')).to.throw(errorMessage);
  });

  it('should not be initializable with an invalid string', () => {
    expect(() => jint('hello world')).to.throw('incompatible types: string cannot be converted to int');
    expect(() => jint('3.0.2')).to.throw('incompatible types: string cannot be converted to int');
    expect(() => jint('.f')).to.throw('incompatible types: string cannot be converted to int');
    expect(() => jint('a26')).to.throw('incompatible types: string cannot be converted to int');
  });

  it('should overflow when a number grater then 2^31-1 is set', () => {
    const i = jint(Math.pow(2, 31));

    expect(i.value).to.be.eq(-Math.pow(2, 31));
  });

  it('should overflow when a number lower then -2^31 is set', () => {
    const i = jint(-Math.pow(2, 31) - 1);

    expect(i.value).to.be.eq(Math.pow(2, 31) - 1);
  });

  it('jint(24) should be equal to jint(24)', () => {
    const i1 = jint(24);
    const i2 = jint(24);

    expect(is(i1.eq(i2))).to.be.true;
    expect(is(i1.ne(i2))).to.be.false;
  });

  it('jint(5) should be not equal to jint(6)', () => {
    const i1 = jint(5);
    const i2 = jint(6);

    expect(is(i1.eq(i2))).to.be.false;
    expect(is(i1.ne(i2))).to.be.true;
  });

  it('jint(5) should be lower then jint(6)', () => {
    const i1 = jint(5);
    const i2 = jint(6);

    expect(is(i1.lt(i2))).to.be.true;
    expect(is(i1.ge(i2))).to.be.false;
  });

  it('jint(6) should be greater than jint(5)', () => {
    const i1 = jint(6);
    const i2 = jint(5);

    expect(is(i1.gt(i2))).to.be.true;
    expect(is(i1.le(i2))).to.be.false;
  });

  it('+(jint(-1)) should be equal to jint(-1)', () => {
    const i = jint(-1);

    expect(is(i.plus().eq(i))).to.be.true;
  });

  it('-(jint(-1)) should be equal to jint(1)', () => {
    const i = jint(-1);
    const j = jint(1);

    expect(is(i.minus().eq(j))).to.be.true;
  });

  it('++(jint(-1)) should be equal to jint(0)', () => {
    const i = jint(-1);
    const j = jint(0);

    expect(is(i.inc().eq(j))).to.be.true;
  });

  it('--(jint(-1)) should be equal to jint(-2)', () => {
    const i = jint(-1);
    const j = jint(-2);

    expect(is(i.dec().eq(j))).to.be.true;
  });

  it('jint(6) + jint(5) should be equal to jint(11)', () => {
    const i1 = jint(6);
    const i2 = jint(5);
    const res = jint(11);

    expect(is(i1.add(i2).eq(res))).to.be.true;
  });

  it('jint(6) - jint(5) should be equal to jint(1)', () => {
    const i1 = jint(6);
    const i2 = jint(5);
    const res = jint(1);

    expect(is(i1.sub(i2).eq(res))).to.be.true;
  });

  it('jint(6) * jint(5) should be equal to jint(30)', () => {
    const i1 = jint(6);
    const i2 = jint(5);
    const res = jint(30);

    expect(is(i1.mul(i2).eq(res))).to.be.true;
  });

  it('jint(12) / jint(6) should be equal to jint(2)', () => {
    const i1 = jint(12);
    const i2 = jint(6);
    const res = jint(2);

    expect(is(i1.div(i2).eq(res))).to.be.true;
  });

  it('jint(12) % jint(6) should be equal to jint(0)', () => {
    const i1 = jint(12);
    const i2 = jint(6);
    const res = jint(0);

    expect(is(i1.mod(i2).eq(res))).to.be.true;
  });

  it('toString should convert a Jint in a string for printing', () => {
    const i = jint(5);

    expect(i.toString()).to.be.eq('5');
  });
});
