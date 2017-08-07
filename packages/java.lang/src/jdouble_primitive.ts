import {JArithmetic, JEquality, JRelational, JUnary} from '@j2se-js/java.lang.native.operator';
import {Jboolean, jboolean} from './jboolean_primitive';
import {Jchar} from './jchar_primitive';
import {Jint} from './jint_primitive';

const longRegex = /^\d+l$/i;
const doubleRegex = /^(?:(?:\d*\.\d+)|(?:\d+\.\d*))(?:e[+-]?\d+)?d?$|^-?\d+d$/i;
const floatRegex = /^(?:(?:\d*\.?\d+)|(?:\d+\.?\d*))(?:e[+-]?\d+)?f$/i;

const binaryRegex = /^0b[01]+$/i;
const hexRegex = /^0x[0-9a-f]+$/i;
const intRegex = /^\d+$/;

/**
 * The double data type is a double-precision 64-bit IEEE 754 floating point.
 * Its range of values is beyond the scope of this discussion, but is specified
 * in the Floating-Point Types, Formats, and Values section of the Java Language
 * Specification. For decimal values, this data type is generally the default
 * choice. As mentioned above, this data type should never be used for precise
 * values, such as currency.
 *
 * Note: To retrieve the actual numeric value wrapped in a Jdouble you have to use <code>.value</code> syntax.
 */
export class Jdouble implements JEquality<Jchar | Jint | Jdouble>,
                                JRelational<Jchar | Jint | Jdouble>,
                                JUnary<Jdouble>,
                                JArithmetic<Jchar | Jint | Jdouble, Jdouble> {

  private static validate(value: string) {
    if (!value.match(longRegex) &&
      !value.match(doubleRegex) &&
      !value.match(floatRegex) &&
      !value.match(hexRegex) &&
      !value.match(binaryRegex) &&
      !value.match(intRegex)) {

      throw Error('incompatible types: string cannot be converted to double');
    }
  }

  private _value: number;

  public constructor(value: string | Jchar = '0.0') {
    let isNegative = false;
    if (typeof value === 'string') {
      value = value.replace(/^\+/, '');
      isNegative = value.charAt(0) === '-';
      Jdouble.validate(isNegative ? value = value.slice(1, value.length) : value);
      value = value.replace(/[dfl]$/i, '');
      this._value = isNegative ? -value : +value;
    } else {
      this._value = value.value;
    }
  }

  public get value() {
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
  public plus(): Jdouble {
    return jdouble((+this._value).toString());
  }

  public inc(): Jdouble {
    this._value = this._value + 1;
    return jdouble(this._value.toString());
  }

  public dec(): Jdouble {
    this._value = this._value - 1;
    return jdouble(this._value.toString());
  }

  public minus(): Jdouble {
    return jdouble((-this._value).toString());
  }

  // JArithmetic
  public add(expr: Jchar | Jint | Jdouble): Jdouble {
    return jdouble((this.value + expr.value).toString());
  }

  public sub(expr: Jchar | Jint | Jdouble): Jdouble {
    return jdouble((this.value - expr.value).toString());
  }

  public mul(expr: Jchar | Jint | Jdouble): Jdouble {
    return jdouble((this.value * expr.value).toString());
  }

  public div(expr: Jchar | Jint | Jdouble): Jdouble {
    return jdouble((this.value / expr.value).toString());
  }

  public mod(expr: Jchar | Jint | Jdouble): Jdouble {
    return jdouble((this.value % expr.value).toString());
  }
}

/**
 * Factory for constructing a Jdouble without use the new keyword.
 * @param {number | string} value to be wrapped in the new Jdouble.
 * @returns {Jdouble} the Jdouble created.
 */
export function jdouble(value: string | Jchar = '0.0'): Jdouble {
  return new Jdouble(value);
}
