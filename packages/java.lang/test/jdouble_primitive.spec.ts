/* tslint:disable:no-unused-expression */
import {expect} from 'chai';
import {is} from '../src/jboolean_primitive';
import {jchar} from '../src/jchar_primitive';
import {jdouble} from '../src/jdouble_primitive';
import {jint} from '../src/jint_primitive';

describe('Jdouble', () => {

  it('should have 0 as default value', () => {
    const i = jdouble();

    expect(i.value).to.be.eq(0);
  });

  it('should be initializable with number (positive or negative)', () => {
    const i = jdouble('+2');
    const j = jdouble('-2.6');

    expect(i.value).to.be.eq(2);
    expect(j.value).to.be.eq(-2.6);
  });

  it('should be initializable with hexadecimal (positive or negative)', () => {
    const i = jdouble('+0X1a');
    const j = jdouble('-0x1a');

    expect(i.value).to.be.eq(26);
    expect(j.value).to.be.eq(-26);
  });

  it('should be initializable with binary (positive or negative)', () => {
    const i = jdouble('0B11010');
    const j = jdouble('-0b11010');

    expect(i.value).to.be.eq(26);
    expect(j.value).to.be.eq(-26);
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

  it('should be initializable with Jchar', () => {
    const i = jdouble(jchar('a'));

    expect(i.value).to.be.eq(97);
  });

  it('should not be initializable with an invalid string', () => {
    const errorMessage = 'incompatible types: string cannot be converted to double';
    expect(() => jdouble('hello world')).to.throw(errorMessage);
    expect(() => jdouble('3.0.2')).to.throw(errorMessage);
    expect(() => jdouble('.f')).to.throw(errorMessage);
    expect(() => jdouble('a26')).to.throw(errorMessage);
  });

  it('should be largest 1.7976931348623157E308 without overflow', () => {
    const max = 1.7976931348623157E308;
    const i = jdouble((max + 1).toString());

    expect(i.value).to.be.eq(max);
  });

  it('should be smallest 4.9E-324 and the MIN + 1 should be 1', () => {
    const i = jdouble((4.9E-324 + 1).toString());

    expect(i.value).to.be.eq(1);
  });

  it('jdouble(\'1.1\') should be equal to jdouble(\'1.1\')', () => {
    const i1 = jdouble('1.1');
    const i2 = jdouble('1.1');

    expect(is(i1.eq(i2))).to.be.true;
    expect(is(i1.ne(i2))).to.be.false;
  });

  it('jdouble(\'1.1\') should be not equal to jdouble(\'2.2\')', () => {
    const i1 = jdouble('1.1');
    const i2 = jdouble('2.2');

    expect(is(i1.eq(i2))).to.be.false;
    expect(is(i1.ne(i2))).to.be.true;
  });

  it('jdouble(\'1.1\') should be lower then jdouble(\'2.2\')', () => {
    const i1 = jdouble('1.1');
    const i2 = jdouble('2.2');

    expect(is(i1.lt(i2))).to.be.true;
    expect(is(i1.ge(i2))).to.be.false;
  });

  it('jdouble(\'2.2\') should be greater than jdouble(\'1.1\')', () => {
    const i1 = jdouble('2.2');
    const i2 = jdouble('1.1');

    expect(is(i1.gt(i2))).to.be.true;
    expect(is(i1.le(i2))).to.be.false;
  });

  it('jdouble(\'24.0\') should be equal to jint(\'24\')', () => {
    const i1 = jdouble('24.0');
    const i2 = jint('24');

    expect(is(i1.eq(i2))).to.be.true;
    expect(is(i1.ne(i2))).to.be.false;
  });

  it('jdouble(\'5.0\') should be not equal to jint(\'6\')', () => {
    const i1 = jdouble('5.0');
    const i2 = jint('6');

    expect(is(i1.eq(i2))).to.be.false;
    expect(is(i1.ne(i2))).to.be.true;
  });

  it('jdouble(\'5.0\') should be lower then jint(\'6\')', () => {
    const i1 = jdouble('5.0');
    const i2 = jint('6');

    expect(is(i1.lt(i2))).to.be.true;
    expect(is(i1.ge(i2))).to.be.false;
  });

  it('jdouble(\'6.0\') should be greater than jint(\'5\')', () => {
    const i1 = jdouble('6.0');
    const i2 = jint('5');

    expect(is(i1.gt(i2))).to.be.true;
    expect(is(i1.le(i2))).to.be.false;
  });

  it('jdouble(\'97.0\') should be equal to jchar(\'a\')', () => {
    const i1 = jdouble('97.0');
    const i2 = jchar('a');

    expect(is(i1.eq(i2))).to.be.true;
    expect(is(i1.ne(i2))).to.be.false;
  });

  it('jdouble(\'98.0\') should be not equal to jchar(\'a\')', () => {
    const i1 = jdouble('98.0');
    const i2 = jchar('a');

    expect(is(i1.eq(i2))).to.be.false;
    expect(is(i1.ne(i2))).to.be.true;
  });

  it('jdouble(\'96.0\') should be lower then jchar(\'a\')', () => {
    const i1 = jdouble('96.0');
    const i2 = jchar('a');

    expect(is(i1.lt(i2))).to.be.true;
    expect(is(i1.ge(i2))).to.be.false;
  });

  it('jdouble(\'98.0\') should be greater than jchar(\'a\')', () => {
    const i1 = jdouble('98.0');
    const i2 = jchar('a');

    expect(is(i1.gt(i2))).to.be.true;
    expect(is(i1.le(i2))).to.be.false;
  });

  it('+(jdouble(\'-1.1\')) should be equal to jdouble(\'-1.1\')', () => {
    const i = jdouble('-1.1');

    expect(is(i.plus().eq(i))).to.be.true;
  });

  it('-(jdouble(\'-1.1\')) should be equal to jdouble(\'1.1\')', () => {
    const i = jdouble('-1.1');
    const j = jdouble('1.1');

    expect(is(i.minus().eq(j))).to.be.true;
  });

  it('++(jdouble(\'-1.1\')) should be equal to jdouble(\'-0.10000000000000009\')', () => {
    const i = jdouble('-1.1');
    const j = jdouble('-0.10000000000000009');

    i.inc();
    expect(is(i.eq(j))).to.be.true;
  });

  it('--(jdouble(\'-0.1\')) should be equal to jdouble(\'-1.1\')', () => {
    const i = jdouble('-0.1');
    const j = jdouble('-1.1');

    i.dec();
    expect(is(i.eq(j))).to.be.true;
  });


  it('+(jdouble(\'-1.0\')) should be equal to jint(\'-1\')', () => {
    const i = jdouble('-1.0');
    const j = jint('-1');

    expect(is(i.plus().eq(j))).to.be.true;
  });

  it('-(jdouble(\'-1.0\')) should be equal to jint(\'1\')', () => {
    const i = jdouble('-1.0');
    const j = jint('1');

    expect(is(i.minus().eq(j))).to.be.true;
  });

  it('++(jdouble(\'-1.0\')) should be equal to jint(\'0\')', () => {
    const i = jdouble('-1.0');
    const j = jint('0');

    expect(is(i.inc().eq(j))).to.be.true;
  });

  it('--(jdouble(\'-1.0\')) should be equal to jint(\'-2\')', () => {
    const i = jdouble('-1.0');
    const j = jint('-2');

    expect(is(i.dec().eq(j))).to.be.true;
  });


  it('+(jdouble(\'97.0\')) should be equal to jchar(\'a\')', () => {
    const i = jdouble('97.0');
    const j = jchar('a');

    expect(is(i.plus().eq(j))).to.be.true;
  });

  it('-(jdouble(\'-97.0\')) should be equal to jchar(\'a\')', () => {
    const i = jdouble('-97.0');
    const j = jchar('a');

    expect(is(i.minus().eq(j))).to.be.true;
  });

  it('++(jdouble(\'96.0\')) should be equal to jchar(\'a\')', () => {
    const i = jdouble('96.0');
    const j = jchar('a');


    expect(is(i.inc().eq(j))).to.be.true;
  });

  it('--(jdouble(\'98.0\')) should be equal to jchar(\'a\')', () => {
    const i = jdouble('98.0');
    const j = jchar('a');


    expect(is(i.dec().eq(j))).to.be.true;
  });

  it('jdouble(\'0.2\') + jdouble(\'0.7\') should be equal to jdouble(\'0.8999999999999999\')', () => {
    const i1 = jdouble('0.2');
    const i2 = jdouble('0.7');
    const res = jdouble('0.8999999999999999');

    expect(is(i1.add(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'0.7\') - jdouble(\'0.2\') should be equal to jdouble(\'0.49999999999999994\')', () => {
    const i1 = jdouble('0.7');
    const i2 = jdouble('0.2');
    const res = jdouble('0.49999999999999994');

    expect(is(i1.sub(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'0.2\') * jdouble(\'0.7\') should be equal to jdouble(\'0.13999999999999999\')', () => {
    const i1 = jdouble('0.2');
    const i2 = jdouble('0.7');
    const res = jdouble('0.13999999999999999');

    expect(is(i1.mul(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'0.7\') / jdouble(\'0.2\') should be equal to jdouble(\'3.4999999999999996\')', () => {
    const i1 = jdouble('0.7');
    const i2 = jdouble('0.2');
    const res = jdouble('3.4999999999999996');

    expect(is(i1.div(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'0.7\') % jdouble(\'0.2\') should be equal to jdouble(\'0.09999999999999992\')', () => {
    const i1 = jdouble('0.7');
    const i2 = jdouble('0.2');
    const res = jdouble('0.09999999999999992');

    expect(is(i1.mod(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'0.7\') + jint(\'5\') should be equal to jdouble(\'5.7\')', () => {
    const i1 = jdouble('0.7');
    const i2 = jint('5');
    const res = jdouble('5.7');

    expect(is(i1.add(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'6.7\') - jint(\'5\') should be equal to jdouble(\'1.7000000000000002\')', () => {
    const i1 = jdouble('6.7');
    const i2 = jint('5');
    const res = jdouble('1.7000000000000002');

    expect(is(i1.sub(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'6.7\') * jint(\'5\') should be equal to jdouble(\'33.5\')', () => {
    const i1 = jdouble('6.7');
    const i2 = jint('5');
    const res = jdouble('33.5');

    expect(is(i1.mul(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'12.4\') / jint(\'6\') should be equal to jdouble(\'2.066666666666667\')', () => {
    const i1 = jdouble('12.4');
    const i2 = jint('6');
    const res = jdouble('2.066666666666667');

    expect(is(i1.div(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'12.4\') % jint(\'6\') should be equal to jdouble(\'0.40000000000000036\')', () => {
    const i1 = jdouble('12.4');
    const i2 = jint('6');
    const res = jdouble('0.40000000000000036');

    expect(is(i1.mod(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'6.7\') + jchar(\'a\') should be equal to jdouble(\'103.7\')', () => {
    const i1 = jdouble('6.7');
    const i2 = jchar('a');
    const res = jdouble('103.7');

    expect(is(i1.add(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'6.7\') - jchar(\'a\') should be equal to jdouble(\'-90.3\')', () => {
    const i1 = jdouble('6.7');
    const i2 = jchar('a');
    const res = jdouble('-90.3');

    expect(is(i1.sub(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'6.7\') * jchar(\'a\') should be equal to jdouble(\'649.9\')', () => {
    const i1 = jdouble('6.7');
    const i2 = jchar('a');
    const res = jdouble('649.9');

    expect(is(i1.mul(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'12.4\') / jchar(\'d\') should be equal to jdouble(\'0.124\')', () => {
    const i1 = jdouble('12.4');
    const i2 = jchar('d');
    const res = jdouble('0.124');

    expect(is(i1.div(i2).eq(res))).to.be.true;
  });

  it('jdouble(\'12.4\') % jchar(\'a\') should be equal to jdouble(\'12.4\')', () => {
    const i1 = jdouble('12.4');
    const i2 = jchar('a');
    const res = jdouble('12.4');

    expect(is(i1.mod(i2).eq(res))).to.be.true;
  });

  it('toString should convert a Jdouble in a string for printing', () => {
    const i = jdouble('5.6');

    expect(i.toString()).to.be.eq('5.6');
  });
});
