import {JArithmetic, JEquality, JRelational, JUnary} from '@j2se-js/java.lang.native.operator';
import {Jboolean, jboolean} from './jboolean_primitive';
import {Jchar} from './jchar_primitive';
import {Jdouble, jdouble} from './jdouble_primitive';

export const longRegex = /^\d+l$/i;
export const doubleRegex = /^(?:(?:\d*\.\d+)|(?:\d+\.\d*))(?:e[+-]?\d+)?d?$|^-?\d+d$/i;
export const floatRegex = /^(?:(?:\d*\.?\d+)|(?:\d+\.?\d*))(?:e[+-]?\d+)?f$/i;

export const binaryRegex = /^0b[01]+$/i;
export const hexRegex = /^0x[0-9a-f]+$/i;
export const intRegex = /^\d+$/;

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
export class Jint implements JEquality<Jchar | Jint | Jdouble>,
                             JRelational<Jchar | Jint | Jdouble>,
                             JUnary<Jint>,
                             JArithmetic<Jchar | Jint | Jdouble, Jint | Jdouble> {

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

  public constructor(value: string | Jchar = '0') {
    this._values = new Int32Array(1);

    let isNegative = false;
    if (typeof value === 'string') {
      value = value.replace(/^\+/, '');
      isNegative = value.charAt(0) === '-';
      Jint.validate(isNegative ? value = value.slice(1, value.length) : value);
      this._value = isNegative ? -value : +value;
    } else {
      this._value = value.value;
    }
  }

  /*
   * Set int value in respect of the Java int constraint.
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

  public toString(): string {
    return this._value.toString();
  }

  // JEquality
  public eq(expr: Jchar | Jint | Jdouble): Jboolean {
    return jboolean((this.value === expr.value).toString());
  }

  public ne(expr: Jchar | Jint | Jdouble): Jboolean {
    return jboolean((this.value !== expr.value).toString());
  }

  // JRelational
  public lt(expr: Jchar | Jint | Jdouble): Jboolean {
    return jboolean((this.value < expr.value).toString());
  }

  public gt(expr: Jchar | Jint | Jdouble): Jboolean {
    return jboolean((this.value > expr.value).toString());
  }

  public le(expr: Jchar | Jint | Jdouble): Jboolean {
    return jboolean((this.value <= expr.value).toString());
  }

  public ge(expr: Jchar | Jint | Jdouble): Jboolean {
    return jboolean((this.value >= expr.value).toString());
  }

  // JUnary
  public plus(): Jint {
    return jint((+this._value).toString());
  }

  public inc(): Jint {
    return jint((this._value + 1).toString());
  }

  public dec(): Jint {
    return jint((this._value - 1).toString());
  }

  public minus(): Jint {
    return jint((-this._value).toString());
  }

  // JArithmetic
  public add(expr: Jchar | Jint): Jint;
  public add(expr: Jdouble): Jdouble;

  public add(expr: Jchar | Jint | Jdouble): Jint | Jdouble {
    if (expr instanceof Jdouble) {
      return jdouble((this.value + expr.value).toString());
    } else {
      return jint((this.value + expr.value).toString());
    }
  }

  public sub(expr: Jchar | Jint): Jint;
  public sub(expr: Jdouble): Jdouble;

  public sub(expr: Jchar | Jint | Jdouble): Jint | Jdouble {
    if (expr instanceof Jdouble) {
      return jdouble((this.value - expr.value).toString());
    } else {
      return jint((this.value - expr.value).toString());
    }
  }

  public mul(expr: Jchar | Jint): Jint;
  public mul(expr: Jdouble): Jdouble;

  public mul(expr: Jchar | Jint | Jdouble): Jint | Jdouble {
    if (expr instanceof Jdouble) {
      return jdouble((this.value * expr.value).toString());
    } else {
      return jint((this.value * expr.value).toString());
    }
  }

  public div(expr: Jchar | Jint): Jint;
  public div(expr: Jdouble): Jdouble;

  public div(expr: Jchar | Jint | Jdouble): Jint | Jdouble {
    if (expr instanceof Jdouble) {
      return jdouble((this.value / expr.value).toString());
    } else {
      return jint((Math.floor(this.value / expr.value)).toString());
    }
  }

  public mod(expr: Jchar | Jint): Jint;
  public mod(expr: Jdouble): Jdouble;

  public mod(expr: Jchar | Jint | Jdouble): Jint | Jdouble {
    if (expr instanceof Jdouble) {
      return jdouble((this.value % expr.value).toString());
    } else {
      return jint((this.value % expr.value).toString());
    }
  }
}

/**
 * Factory for constructing a Jint without use the new keyword.
 * @param {number | string} value to be wrapped in the new Jint.
 * @returns {Jint} the Jint created.
 */
export function jint(value: string | Jchar = '0'): Jint {
  return new Jint(value);
}
