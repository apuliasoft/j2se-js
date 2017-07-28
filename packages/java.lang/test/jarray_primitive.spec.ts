/* tslint:disable:no-unused-expression */
import {expect} from 'chai';
import {Jint, jint} from '../src/jint_primitive';
import {Jarray} from '../src/jarray_primitive';
import {is} from '../src/jboolean_primitive';

describe('Jarray', () => {
  it('should construct an array of the specified size', () => {
    const array = new Jarray<Jint>(jint(3));
    const arraySize = jint(3);

    expect(is(array.length.eq(arraySize))).to.be.true;
  });

  it('should construct and initialize an array with specified values, inferring its size', () => {
    const index1 = jint(0);
    const index2 = jint(1);
    const index3 = jint(2);

    const value1 = jint(1);
    const value2 = jint(2);
    const value3 = jint(3);

    const values = [value1, value2, value3];
    const valuesSize = jint(values.length);

    const array = new Jarray<Jint>(values);

    expect(is(array.get(index1).eq(value1))).to.be.true;
    expect(is(array.get(index2).eq(value2))).to.be.true;
    expect(is(array.get(index3).eq(value3))).to.be.true;
    expect(is(array.length.eq(valuesSize))).to.be.true;
  });

  xit('should return default value for non initialized array', () => {
    const array = new Jarray<Jint>(jint(3));
    const index = jint(0);
    const defaultValue = jint(0);

    expect(is(array.get(index).eq(defaultValue))).to.be.true;
  });

  it('should set and get values in positions less than its size', () => {
    const array = new Jarray<Jint>(jint(3));

    const index1 = jint(0);
    const index2 = jint(1);
    const index3 = jint(2);

    const value1 = jint(1);
    const value2 = jint(2);
    const value3 = jint(3);

    array.set(index1, value1);
    array.set(index2, value2);
    array.set(index3, value3);

    expect(is(array.get(index1).eq(value1))).to.be.true;
    expect(is(array.get(index2).eq(value2))).to.be.true;
    expect(is(array.get(index3).eq(value3))).to.be.true;
  });

  it('should result in throwing an exception when accessing positions beyond its size', () => {
    const array = new Jarray<Jint>(jint(3));

    const defaultValue = jint(0);

    const invalidIndex1 = jint(-1);
    const invalidIndex2 = jint(3);
    const invalidIndex3 = jint(4);

    expect(() => array.set(invalidIndex1, defaultValue)).to.throw(`JArrayOutOfBoundsException: ${invalidIndex1.valueOf()}`);
    expect(() => array.set(invalidIndex2, defaultValue)).to.throw(`JArrayOutOfBoundsException: ${invalidIndex2.valueOf()}`);
    expect(() => array.set(invalidIndex3, defaultValue)).to.throw(`JArrayOutOfBoundsException: ${invalidIndex3.valueOf()}`);

    expect(() => array.get(invalidIndex1)).to.throw(`JArrayOutOfBoundsException: ${invalidIndex1.valueOf()}`);
    expect(() => array.get(invalidIndex2)).to.throw(`JArrayOutOfBoundsException: ${invalidIndex2.valueOf()}`);
    expect(() => array.get(invalidIndex3)).to.throw(`JArrayOutOfBoundsException: ${invalidIndex3.valueOf()}`);
  });

  // TODO remove when getClass() in JObject is implemented, already tested in JObject
  it('toString should return a string representation of the object', () => {
    const array = new Jarray<Jint>(jint(3));
    const arrayhash = array.hashCode();

    const index1 = jint(0);
    const index2 = jint(1);
    const index3 = jint(2);

    const value1 = jint(1);
    const value2 = jint(2);
    const value3 = jint(3);

    array.set(index1, value1);
    array.set(index2, value2);
    array.set(index3, value3);

    expect(array.toString()).to.be.equal(`[I@${arrayhash}`);
  });
});
