import {JEquality} from '@j2se-js/java.lang.native.operator';
import {JRelational} from '@j2se-js/java.lang.native.operator';
import {Jboolean, jboolean} from './jboolean_primitive';
import {JUnary} from '@j2se-js/java.lang.native.operator/src/junary';
import {JArithmetic} from '@j2se-js/java.lang.native.operator/src/jarithmetic';

const longRegex = /^\d+l$/i;
const doubleRegex = /^(?:(?:\d*\.\d+)|(?:\d+\.\d*))(?:e[+-]?\d+)?d?$|^-?\d+d$/i;
const floatRegex = /^(?:(?:\d*\.?\d+)|(?:\d+\.?\d*))(?:e[+-]?\d+)?f$/i;

const binaryRegex = /^0b[01]+$/i;
const hexRegex = /^0x[0123456789abcdef]+$/i;
const intRegex = /^\d+$/;

/**
 * By default, the Jint data type is a 32-bit signed two's complement integer,
 * which has a minimum _value of -2^31 and a maximum _value of 2^31-1.
 * In Java SE 8 and later, you can use the jint data type to represent an unsigned
 * 32-bit integer, which has a minimum _value of 0 and a maximum _value of 2^32-1.
 * Use the Integer class to use jint data type as an unsigned integer.
 * See the section The Number Classes for more information.
 * Static methods like compareUnsigned, divideUnsigned etc have been added to
 * the Integer class to support the arithmetic operations for unsigned integers.
 *
 * Note: To retrieve the actual numeric value wrapped in a Jint you have to use <code>.value</code> syntax.
 */
export class Jint implements JEquality<Jint>, JRelational<Jint>, JUnary<Jint>, JArithmetic<Jint> {
  /**
   * Internal factory for constructing a Jint without use the new keyword.
   * @param {number | string} value to be wrapped in the new Jint.
   * @returns {Jint} the Jint created.
   */
  static create(value: number | string = 0): Jint {
    return new Jint(value);
  }

  private static validate(value: string) {
    if (value.match(longRegex)) {
      throw Error('incompatible types: possible lossy conversion from long to int');
    } else if (value.match(doubleRegex)) {
      throw Error('incompatible types: possible lossy conversion from double to int');
    } else if (value.match(floatRegex)) {
      throw Error('incompatible types: possible lossy conversion from float to int');
    } else if (!value.match(binaryRegex) && !value.match(hexRegex) && !value.match(intRegex)) {
      throw Error('incompatible types: string cannot be converted to int');
    }
  }

  private _values: Int32Array;

  private constructor(value: number | string = 0) {
    this._values = new Int32Array(1);

    let isNegative = false;
    if (typeof value === 'string') {
      value = value.replace(/^\+/, '');
      isNegative = value.charAt(0) === '-';
      Jint.validate(isNegative ? value = value.slice(1, value.length) : value);
    }

    this._value = isNegative ? -value : +value;
  }

  /*
   * Set int value in respect of the Java int costraint.
   * In order to simulate 32 bit signed int, is used a
   * Int32Array with just 1 element.
   */
  private set _value(value: number) {
    this._values[0] = value;
  }

  private get _value(): number {
    return this._values[0];
  }

  /**
   * Retrieve the numeric value wrapped by this Jint.
   * @returns {number} numeric value wrapped by this Jint.
   */
  public get value(): number {
    return this._value;
  }

  public eq(expr: Jint): Jboolean {
    return jboolean(this._value === expr._value);
  }

  public ne(expr: Jint): Jboolean {
    return jboolean(this._value !== expr._value);
  }

  public lt(expr: Jint): Jboolean {
    return jboolean(this._value < expr._value);
  }

  public gt(expr: Jint): Jboolean {
    return jboolean(this._value > expr._value);
  }

  public le(expr: Jint): Jboolean {
    return jboolean(this._value <= expr._value);
  }

  public ge(expr: Jint): Jboolean {
    return jboolean(this._value >= expr._value);
  }

  public plus(): Jint {
    return jint(+(this._value));
  }

  public inc(): Jint {
    return jint(this._value + 1);
  }

  public dec(): Jint {
    return jint(this._value - 1);
  }

  public minus(): Jint {
    return jint(-(this._value));
  }

  public add(expr: Jint): Jint {
    return jint(this._value + expr._value);
  }

  public sub(expr: Jint): Jint {
    return jint(this._value - expr._value);
  }

  public mul(expr: Jint): Jint {
    return jint(this._value * expr._value);
  }

  public div(expr: Jint): Jint {
    return jint(this._value / expr._value);
  }

  public mod(expr: Jint): Jint {
    return jint(this._value % expr._value);
  }

  public toString(): string {
    return this._value.toString();
  }
}

/**
 * Factory for constructing a Jint without use the new keyword. It calls {@link Jint#create} method.
 * @param {number | string} value to be wrapped in the new Jint.
 * @returns {Jint} the Jint created.
 */
export function jint(value: number | string = 0): Jint {
  return Jint.create(value);
}

