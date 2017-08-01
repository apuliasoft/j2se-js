/* tslint:disable:no-unused-expression */
import {expect} from 'chai';
import {is} from '../src/jboolean_primitive';
import {jchar} from '../src/jchar_primitive';
import {jdouble} from '../src/jdouble_primitive';
import {jint} from '../src/jint_primitive';

describe('Jchar', () => {
  it('toString should return the Jchar string character for printing', () => {
    const aChar = jchar('a');

    expect(aChar.toString()).to.be.eq('a');
  });

  it('should have \'\\u0000\' as default value', () => {
    const i = jchar();

    expect(i.toString()).to.be.eq('\u0000');
  });

  it('should be initializable with a single char', () => {
    const aChar = jchar('a');
    const bChar = jchar('b');
    const exclamationPoint = jchar('!');
    const ampersand = jchar('&');

    expect(aChar.toString()).to.be.eq('a');
    expect(bChar.toString()).to.be.eq('b');
    expect(exclamationPoint.toString()).to.be.eq('!');
    expect(ampersand.toString()).to.be.eq('&');
  });

  it('should be initializable with a special escape sequences', () => {
    const tab = jchar('\t');
    const backSpace = jchar('\b');
    const newLine = jchar('\n');
    const carriageReturn = jchar('\r');
    const formFeed = jchar('\f');
    const singleQuote = jchar('\'');
    const doubleQuote = jchar('\"');
    const backSlash = jchar('\\');

    expect(tab.toString()).to.be.eq('\t');
    expect(backSpace.toString()).to.be.eq('\b');
    expect(newLine.toString()).to.be.eq('\n');
    expect(carriageReturn.toString()).to.be.eq('\r');
    expect(formFeed.toString()).to.be.eq('\f');
    expect(singleQuote.toString()).to.be.eq('\'');
    expect(doubleQuote.toString()).to.be.eq('\"');
    expect(backSlash.toString()).to.be.eq('\\');
  });

  it('should be initializable with a UTF-8 code (ie \'\\uXXXX\')', () => {
    const aChar = jchar('\u0061');
    const newLine = jchar('\u000a');

    expect(aChar.toString()).to.be.eq('a');
    expect(newLine.toString()).to.be.eq('\n');
  });

  it('should be initializable with a jint', () => {
    const aChar = jchar(jint('97'));
    const newLine = jchar(jint('10'));

    expect(aChar.toString()).to.be.eq('a');
    expect(newLine.toString()).to.be.eq('\n');
  });


  it('should not be initializable with an invalid char or a Jint out of [0, 65535] range', () => {
    let errorMessage = 'incompatible types: string cannot be converted to char';
    expect(() => jchar('hello world')).to.throw(errorMessage);
    expect(() => jchar('ab')).to.throw(errorMessage);

    errorMessage = 'incompatible types: possible lossy conversion from int to char';
    expect(() => jchar(jint('-1'))).to.throw(errorMessage);
    expect(() => jchar(jint('65536'))).to.throw(errorMessage);
    expect(() => jchar(jint('65536'))).to.throw(errorMessage);
  });

  it('jchar(\'a\') should be equal to jchar(\'a\')', () => {
    const aChar = jchar('a');
    const aChar2 = jchar('a');

    expect(is(aChar.eq(aChar2))).to.be.true;
    expect(is(aChar.ne(aChar2))).to.be.false;
  });

  it('jchar(\'a\') should be not equal to jchar(\'b\')', () => {
    const aChar = jchar('a');
    const bChar = jchar('b');

    expect(is(aChar.eq(bChar))).to.be.false;
    expect(is(aChar.ne(bChar))).to.be.true;
  });

  it('jchar(\'a\') should be lower then jchar(\'b\')', () => {
    const aChar = jchar('a');
    const bChar = jchar('b');

    expect(is(aChar.lt(bChar))).to.be.true;
    expect(is(aChar.ge(bChar))).to.be.false;
  });

  it('jchar(\'b\') should be greater than jchar(\'a\')', () => {
    const aChar = jchar('a');
    const bChar = jchar('b');

    expect(is(bChar.gt(aChar))).to.be.true;
    expect(is(bChar.le(aChar))).to.be.false;
  });

  it('jchar(\'a\') should be equal to jint(\'97\')', () => {
    const aChar = jchar('a');
    const aInt = jint('97');

    expect(is(aChar.eq(aInt))).to.be.true;
    expect(is(aChar.ne(aInt))).to.be.false;
  });

  it('jchar(\'a\') should be not equal to jint(\'98\')', () => {
    const aChar = jchar('a');
    const bInt = jint('98');

    expect(is(aChar.eq(bInt))).to.be.false;
    expect(is(aChar.ne(bInt))).to.be.true;
  });

  it('jchar(\'a\') should be lower then jint(\'98\')', () => {
    const aChar = jchar('a');
    const bInt = jint('98');

    expect(is(aChar.lt(bInt))).to.be.true;
    expect(is(aChar.ge(bInt))).to.be.false;
  });

  it('jchar(\'b\') should be greater than jint(\'97\')', () => {
    const aInt = jint('97');
    const bChar = jchar('b');

    expect(is(bChar.gt(aInt))).to.be.true;
    expect(is(bChar.le(aInt))).to.be.false;
  });

  it('jchar(\'a\') should be equal to jdouble(\'97.0\')', () => {
    const aChar = jchar('a');
    const aDouble = jdouble('97');

    expect(is(aChar.eq(aDouble))).to.be.true;
    expect(is(aChar.ne(aDouble))).to.be.false;
  });

  it('jchar(\'a\') should be not equal to jdouble(\'98.0\')', () => {
    const aChar = jchar('a');
    const bDouble = jdouble('98');

    expect(is(aChar.eq(bDouble))).to.be.false;
    expect(is(aChar.ne(bDouble))).to.be.true;
  });

  it('jchar(\'a\') should be lower then jdouble(\'98.0\')', () => {
    const aChar = jchar('a');
    const bDouble = jdouble('98');

    expect(is(aChar.lt(bDouble))).to.be.true;
    expect(is(aChar.ge(bDouble))).to.be.false;
  });

  it('jchar(\'b\') should be greater than jdouble(\'97.0\')', () => {
    const aDouble = jdouble('97');
    const bChar = jchar('b');

    expect(is(bChar.gt(aDouble))).to.be.true;
    expect(is(bChar.le(aDouble))).to.be.false;
  });

  it('+(jchar(\'a\')) should be equal to jint(\'97\')', () => {
    const aChar = jchar('a');
    const aInt = jint('97');

    expect(is(aChar.plus().eq(aInt))).to.be.true;
  });

  it('-(jchar(\'a\')) should be equal to jint(\'-97\')', () => {
    const aChar = jchar('a');
    const aInt = jint('-97');

    expect(is(aChar.minus().eq(aInt))).to.be.true;
  });

  it('++(jchar(\'a\')) should be equal to jchar(\'b\')', () => {
    const aChar = jchar('a');
    const bChar = jchar('b');

    expect(is(aChar.inc().eq(bChar))).to.be.true;
  });

  it('--(jchar(\'b\')) should be equal to jchar(\'a\')', () => {
    const aChar = jchar('a');
    const bChar = jchar('b');

    expect(is(bChar.dec().eq(aChar))).to.be.true;
  });

  it('+(jchar(\'a\')) should be equal to jchar(\'a\')', () => {
    const aChar = jchar('a');

    expect(is(aChar.plus().eq(aChar))).to.be.true;
  });

  it('-(jchar(\'a\')) should be equal to -(jchar(\'a\'))', () => {
    const aChar = jchar('a');
    const aChar2 = jchar('a').minus();

    expect(is(aChar.minus().eq(aChar2))).to.be.true;
  });

  it('++(jchar(\'a\')) should be equal to jint(\'98\')', () => {
    const aChar = jchar('a');
    const bInt = jint('98');

    expect(is(aChar.inc().eq(bInt))).to.be.true;
  });

  it('--(jchar(\'b\')) should be equal to jint(\'97\')', () => {
    const bChar = jchar('b');
    const aInt = jint('97');

    expect(is(bChar.dec().eq(aInt))).to.be.true;
  });

  it('+(jchar(\'a\')) should be equal to jdouble(\'97.0\')', () => {
    const aChar = jchar('a');
    const aInt = jdouble('97.0');

    expect(is(aChar.plus().eq(aInt))).to.be.true;
  });

  it('-(jchar(\'a\')) should be equal to jdouble(\'-97.0\')', () => {
    const aChar = jchar('a');
    const aInt = jdouble('-97.0');

    expect(is(aChar.minus().eq(aInt))).to.be.true;
  });

  it('++(jchar(\'a\')) should be equal to jdouble(\'98.0\')', () => {
    const aChar = jchar('a');
    const bDouble = jdouble('98.0');

    expect(is(aChar.inc().eq(bDouble))).to.be.true;
  });

  it('--(jchar(\'b\')) should be equal to jdouble(\'97.0\')', () => {
    const bChar = jchar('b');
    const aDouble = jdouble('97.0');

    expect(is(bChar.dec().eq(aDouble))).to.be.true;
  });

  it('jchar(\'t\') + jchar(\'f\') should be equal to jint(\'218\')', () => {
    const tChar = jchar('t');
    const fChar = jchar('f');
    const res = jint('218');

    expect(is(tChar.add(fChar).eq(res))).to.be.true;
  });

  it('jchar(\'t\') - jchar(\'f\') should be equal to jint(\'14\')', () => {
    const tChar = jchar('t');
    const fChar = jchar('f');
    const res = jint('14');

    expect(is(tChar.sub(fChar).eq(res))).to.be.true
  });

  it('jchar(\'t\') * jchar(\'f\') should be equal to jint(\'11832\')', () => {
    const tChar = jchar('t');
    const fChar = jchar('f');
    const res = jint('11832');

    expect(is(tChar.mul(fChar).eq(res))).to.be.true
  });

  it('jchar(\'t\') / jchar(\'t\') should be equal to jint(\'1\')', () => {
    const tChar = jchar('t');
    const res = jint('1');

    expect(is(tChar.div(tChar).eq(res))).to.be.true
  });

  it('jchar(\'t\') % jchar(\'f\') should be equal to jint(\'14\')', () => {
    const tChar = jchar('t');
    const fChar = jchar('f');
    const res = jint('14');

    expect(is(tChar.mod(fChar).eq(res))).to.be.true
  });

  it('jchar(\'t\') + jint(\'2\') should be equal to jint(\'118\')', () => {
    const tChar = jchar('t');
    const anInt = jint('2');
    const res = jint('118');

    expect(is(tChar.add(anInt).eq(res))).to.be.true;
  });

  it('jchar(\'t\') - jint(\'2\') should be equal to jint(\'114\')', () => {
    const tChar = jchar('t');
    const anInt = jint('2');
    const res = jint('114');

    expect(is(tChar.sub(anInt).eq(res))).to.be.true
  });

  it('jchar(\'t\') * jint(\'2\') should be equal to jint(\'232\')', () => {
    const tChar = jchar('t');
    const anInt = jint('2');
    const res = jint('232');

    expect(is(tChar.mul(anInt).eq(res))).to.be.true
  });

  it('jchar(\'t\') / jint(\'2\') should be equal to jint(\'58\')', () => {
    const tChar = jchar('t');
    const anInt = jint('2');
    const res = jint('58');

    expect(is(tChar.div(anInt).eq(res))).to.be.true
  });

  it('jchar(\'t\') % jint(\'2\') should be equal to jint(\'0\')', () => {
    const tChar = jchar('t');
    const anInt = jint('2');
    const res = jint('0');

    expect(is(tChar.mod(anInt).eq(res))).to.be.true
  });

  it('jchar(\'t\') + jdouble(\'2.2\') should be equal to jdouble(\'118.2\')', () => {
    const tChar = jchar('t');
    const anInt = jdouble('2.2');
    const res = jdouble('118.2');

    expect(is(tChar.add(anInt).eq(res))).to.be.true;
  });

  it('jchar(\'t\') - jdouble(\'2.2\') should be equal to jdouble(\'113.8\')', () => {
    const tChar = jchar('t');
    const anInt = jdouble('2.2');
    const res = jdouble('113.8');

    expect(is(tChar.sub(anInt).eq(res))).to.be.true
  });

  it('jchar(\'t\') * jdouble(\'2.5\') should be equal to jdouble(\'290.0\')', () => {
    const tChar = jchar('t');
    const anInt = jdouble('2.5');
    const res = jdouble('290.0');

    expect(is(tChar.mul(anInt).eq(res))).to.be.true
  });

  it('jchar(\'t\') / jdouble(\'2.5\') should be equal to jdouble(\'46.4\')', () => {
    const tChar = jchar('t');
    const anInt = jdouble('2.5');
    const res = jdouble('46.4');

    expect(is(tChar.div(anInt).eq(res))).to.be.true
  });

  it('jchar(\'t\') % jdouble(\'2.5\') should be equal to jdouble(\'1.0\')', () => {
    const tChar = jchar('t');
    const anInt = jdouble('2.5');
    const res = jdouble('1.0');

    expect(is(tChar.mod(anInt).eq(res))).to.be.true
  });
});
