/* tslint:disable:no-unused-expression */
import {expect} from 'chai';
import {is} from '../src/jboolean_primitive';
import {jchar} from '../src/jchar_primitive';
import {jdouble} from '../src/jdouble_primitive';
import {jint} from '../src/jint_primitive';

describe('Jint', () => {

  it('should have 0 as default value', () => {
    const i = jint();

    expect(i.value).to.be.eq(0);
  });

  it('should be initializable with number (positive or negative)', () => {
    const i = jint('+26');
    const j = jint('-26');

    expect(i.value).to.be.eq(26);
    expect(j.value).to.be.eq(-26);
  });

  it('should be initializable with hexadecimal (positive or negative)', () => {
    const i = jint('+0X1a');
    const j = jint('-0x1a');

    expect(i.value).to.be.eq(26);
    expect(j.value).to.be.eq(-26);
  });

  it('should be initializable with binary (positive or negative)', () => {
    const i = jint('0B11010');
    const j = jint('-0b11010');

    expect(i.value).to.be.eq(26);
    expect(j.value).to.be.eq(-26);
  });

  it('should be initializable with Jchar', () => {
    const i = jint(jchar('a'));

    expect(i.value).to.be.eq(97);
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
    expect(() => jint('-2.6e1f')).to.throw(errorMessage);

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
    expect(() => jint('-.6e1d')).to.throw(errorMessage);

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
    const errorMessage = 'incompatible types: string cannot be converted to int';
    expect(() => jint('hello world')).to.throw(errorMessage);
    expect(() => jint('3.0.2')).to.throw(errorMessage);
    expect(() => jint('.f')).to.throw(errorMessage);
    expect(() => jint('a26')).to.throw(errorMessage);
  });

  it('should overflow when a number grater then 2^31-1 is set', () => {
    const i = jint(Math.pow(2, 31).toString());

    expect(i.value).to.be.eq(-Math.pow(2, 31));
  });

  it('should overflow when a number lower then -2^31 is set', () => {
    const i = jint((-Math.pow(2, 31) - 1).toString());

    expect(i.value).to.be.eq(Math.pow(2, 31) - 1);
  });

  it('jint(\'24\') should be equal to jint(\'24\')', () => {
    const i1 = jint('24');
    const i2 = jint('24');

    expect(is(i1.eq(i2))).to.be.true;
    expect(is(i1.ne(i2))).to.be.false;
  });

  it('jint(\'5\') should be not equal to jint(\'6\')', () => {
    const i1 = jint('5');
    const i2 = jint('6');

    expect(is(i1.eq(i2))).to.be.false;
    expect(is(i1.ne(i2))).to.be.true;
  });

  it('jint(\'5\') should be lower then jint(\'6\')', () => {
    const i1 = jint('5');
    const i2 = jint('6');

    expect(is(i1.lt(i2))).to.be.true;
    expect(is(i1.ge(i2))).to.be.false;
  });

  it('jint(\'6\') should be greater than jint(\'5\')', () => {
    const i1 = jint('6');
    const i2 = jint('5');

    expect(is(i1.gt(i2))).to.be.true;
    expect(is(i1.le(i2))).to.be.false;
  });

  it('jint(\'24\') should be equal to jdouble(\'24.0\')', () => {
    const i1 = jint('24');
    const i2 = jdouble('24.0');

    expect(is(i1.eq(i2))).to.be.true;
    expect(is(i1.ne(i2))).to.be.false;
  });

  it('jint(\'5\') should be not equal to jdouble(\'6.0\')', () => {
    const i1 = jint('5');
    const i2 = jdouble('6.0');

    expect(is(i1.eq(i2))).to.be.false;
    expect(is(i1.ne(i2))).to.be.true;
  });

  it('jint(\'5\') should be lower then jdouble(\'6.0\')', () => {
    const i1 = jint('5');
    const i2 = jdouble('6.0');

    expect(is(i1.lt(i2))).to.be.true;
    expect(is(i1.ge(i2))).to.be.false;
  });

  it('jint(\'6\') should be greater than jdouble(\'5.0\')', () => {
    const i1 = jint('6');
    const i2 = jdouble('5.0');

    expect(is(i1.gt(i2))).to.be.true;
    expect(is(i1.le(i2))).to.be.false;
  });

  it('jint(\'97\') should be equal to jchar(\'a\')', () => {
    const i1 = jint('97');
    const i2 = jchar('a');

    expect(is(i1.eq(i2))).to.be.true;
    expect(is(i1.ne(i2))).to.be.false;
  });

  it('jint(\'5\') should be not equal to jchar(\'a\')', () => {
    const i1 = jint('5');
    const i2 = jchar('a');

    expect(is(i1.eq(i2))).to.be.false;
    expect(is(i1.ne(i2))).to.be.true;
  });

  it('jint(\'96\') should be lower then jchar(\'a\')', () => {
    const i1 = jint('96');
    const i2 = jchar('a');

    expect(is(i1.lt(i2))).to.be.true;
    expect(is(i1.ge(i2))).to.be.false;
  });

  it('jint(\'98\') should be greater than jchar(\'a\')', () => {
    const i1 = jint('98');
    const i2 = jchar('a');

    expect(is(i1.gt(i2))).to.be.true;
    expect(is(i1.le(i2))).to.be.false;
  });

  it('+(jint(\'-1\')) should be equal to jint(\'-1\')', () => {
    const i = jint('-1');

    expect(is(i.plus().eq(i))).to.be.true;
  });

  it('-(jint(\'-1\')) should be equal to jint(\'1\')', () => {
    const i = jint('-1');
    const j = jint('1');

    expect(is(i.minus().eq(j))).to.be.true;
  });

  it('++(jint(\'-1\')) should be equal to jint(\'0\')', () => {
    const i = jint('-1');
    const j = jint('0');

    i.inc();
    expect(is(i.eq(j))).to.be.true;
  });

  it('--(jint(\'-1\')) should be equal to jint(\'-2\')', () => {
    const i = jint('-1');
    const j = jint('-2');

    i.dec();
    expect(is(i.eq(j))).to.be.true;
  });

  it('+(jint(\'-1\')) should be equal to jdouble(\'-1.0\')', () => {
    const i = jint('-1');
    const j = jdouble('-1');

    expect(is(i.plus().eq(j))).to.be.true;
  });

  it('-(jint(\'-1\')) should be equal to jdouble(\'1.0\')', () => {
    const i = jint('-1');
    const j = jdouble('1');

    expect(is(i.minus().eq(j))).to.be.true;
  });

  it('++(jint(\'-1\')) should be equal to jdouble(\'0.0\')', () => {
    const i = jint('-1');
    const j = jdouble('0');

    expect(is(i.inc().eq(j))).to.be.true;
  });

  it('--(jint(\'-1\')) should be equal to jdouble(\'-2.0\')', () => {
    const i = jint('-1');
    const j = jdouble('-2');

    expect(is(i.dec().eq(j))).to.be.true;
  });

  it('+(jint(\'97\')) should be equal to jchar(\'a\')', () => {
    const i = jint('97');
    const aChar = jchar('a');

    expect(is(i.plus().eq(aChar))).to.be.true;
  });

  it('-(jint(\'-97\')) should be equal to jchar(\'a\')', () => {
    const i = jint('-97');
    const aChar = jchar('a');


    expect(is(i.minus().eq(aChar))).to.be.true;
  });

  it('++(jint(\'96\')) should be equal to jchar(\'a\')', () => {
    const i = jint('96');
    const aChar = jchar('a');


    expect(is(i.inc().eq(aChar))).to.be.true;
  });

  it('--(jint(\'98\')) should be equal to jchar(\'a\')', () => {
    const i = jint('98');
    const aChar = jchar('a');


    expect(is(i.dec().eq(aChar))).to.be.true;
  });

  it('jint(\'6\') + jint(\'5\') should be equal to jint(\'11\')', () => {
    const i1 = jint('6');
    const i2 = jint('5');
    const res = jint('11');

    expect(is(i1.add(i2).eq(res))).to.be.true;
  });

  it('jint(\'6\') - jint(\'5\') should be equal to jint(\'1\')', () => {
    const i1 = jint('6');
    const i2 = jint('5');
    const res = jint('1');

    expect(is(i1.sub(i2).eq(res))).to.be.true;
  });

  it('jint(\'6\') * jint(\'5\') should be equal to jint(\'30\')', () => {
    const i1 = jint('6');
    const i2 = jint('5');
    const res = jint('30');

    expect(is(i1.mul(i2).eq(res))).to.be.true;
  });

  it('jint(\'12\') / jint(\'6\') should be equal to jint(\'2\')', () => {
    const i1 = jint('12');
    const i2 = jint('6');
    const res = jint('2');

    expect(is(i1.div(i2).eq(res))).to.be.true;
  });

  it('jint(\'12\') % jint(\'6\') should be equal to jint(\'0\')', () => {
    const i1 = jint('12');
    const i2 = jint('6');
    const res = jint('0');

    expect(is(i1.mod(i2).eq(res))).to.be.true;
  });

  it('jint(\'6\') + jchar(\'a\') should be equal to jint(\'103\')', () => {
    const i1 = jint('6');
    const i2 = jchar('a');
    const res = jint('103');

    expect(is(i1.add(i2).eq(res))).to.be.true;
  });

  it('jint(\'6\') - jchar(\'a\') should be equal to jint(\'-91\')', () => {
    const i1 = jint('6');
    const i2 = jchar('a');
    const res = jint('-91');

    expect(is(i1.sub(i2).eq(res))).to.be.true;
  });

  it('jint(\'6\') * jchar(\'a\') should be equal to jint(\'582\')', () => {
    const i1 = jint('6');
    const i2 = jchar('a');
    const res = jint('582');

    expect(is(i1.mul(i2).eq(res))).to.be.true;
  });

  it('jint(\'12\') / jchar(\'d\') should be equal to jint(\'0\')', () => {
    const i1 = jint('12');
    const i2 = jchar('d');
    const res = jint('0');

    expect(is(i1.div(i2).eq(res))).to.be.true;
  });

  it('jint(\'12\') % jchar(\'a\') should be equal to jint(\'12\')', () => {
    const i1 = jint('12');
    const i2 = jchar('a');
    const res = jint('12');

    expect(is(i1.mod(i2).eq(res))).to.be.true;
  });

  it('jint(\'6\') + jdouble(\'2.5\') should be equal to jdouble(\'8.5\')', () => {
    const i1 = jint('6');
    const i2 = jdouble('2.5');
    const res = jdouble('8.5');

    expect(is(i1.add(i2).eq(res))).to.be.true;
  });

  it('jint(\'6\') - jdouble(\'6.5\') should be equal to jdouble(\'-0.5\')', () => {
    const i1 = jint('6');
    const i2 = jdouble('6.5');
    const res = jdouble('-0.5');

    expect(is(i1.sub(i2).eq(res))).to.be.true;
  });

  it('jint(\'6\') * jdouble(\'5.5\') should be equal to jdouble(\'33.0\')', () => {
    const i1 = jint('6');
    const i2 = jdouble('5.5');
    const res = jdouble('33.0');

    expect(is(i1.mul(i2).eq(res))).to.be.true;
  });

  it('jint(\'12\') / jdouble(\'2.5\') should be equal to jdouble(\'4.8\')', () => {
    const i1 = jint('12');
    const i2 = jdouble('2.5');
    const res = jdouble('4.8');

    expect(is(i1.div(i2).eq(res))).to.be.true;
  });

  it('jint(\'12\') % jdouble(\'1.5\') should be equal to jdouble(\'0.0\')', () => {
    const i1 = jint('12');
    const i2 = jdouble('1.5');
    const res = jdouble('0.0');

    expect(is(i1.mod(i2).eq(res))).to.be.true;
  });

  it('toString should convert a Jint in a string for printing', () => {
    const i = jint('5');

    expect(i.toString()).to.be.eq('5');
  });
});
