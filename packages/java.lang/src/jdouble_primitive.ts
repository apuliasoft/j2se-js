import {JEquality} from '../../java.lang.native.operator/src/jequality';
import {Jboolean, jboolean} from '../../java.lang/src/jboolean_primitive';
import {JRelational} from '../../java.lang.native.operator/src/jrelational';
import {JUnary} from '@j2se-js/java.lang.native.operator/src/junary';
import {JArithmetic} from '@j2se-js/java.lang.native.operator/src/jarithmetic';

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
export class Jdouble implements JEquality<Jdouble>, JRelational<Jdouble>, JUnary<Jdouble>, JArithmetic<Jdouble> {
  /**
   * Internal factory for constructing a Jdouble without use the new keyword.
   * @param {number | string} value to be wrapped in the new Jdouble.
   * @returns {Jdouble} the Jdouble created.
   */
  static create(value: number | string = 0): Jdouble {
    return new Jdouble(value);
  }

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

  private constructor(value: number | string = 0) {
    let isNegative = false;
    if (typeof value === 'string') {
      value = value.replace(/^\+/, '');
      isNegative = value.charAt(0) === '-';
      Jdouble.validate(isNegative ? value = value.slice(1, value.length) : value);
      value = value.replace(/[dfl]$/i, '');
    }

    this._value = isNegative ? -value : +value;
  }

  public get value() {
    return this._value;
  }

  public eq(expr: Jdouble): Jboolean {
    return jboolean(this.value === expr.value);
  }

  public ne(expr: Jdouble): Jboolean {
    return jboolean(this.value !== expr.value);
  }

  public lt(expr: Jdouble): Jboolean {
    return jboolean(this.value < expr.value);
  }

  public gt(expr: Jdouble): Jboolean {
    return jboolean(this.value > expr.value);
  }

  public le(expr: Jdouble): Jboolean {
    return jboolean(this.value <= expr.value);
  }

  public ge(expr: Jdouble): Jboolean {
    return jboolean(this.value >= expr.value);
  }

  public plus(): Jdouble {
    return jdouble(+(this._value));
  }

  public inc(): Jdouble {
    return jdouble(this._value + 1);
  }

  public dec(): Jdouble {
    return jdouble(this._value - 1);
  }

  public minus(): Jdouble {
    return jdouble(-(this._value));
  }

  public add(expr: Jdouble): Jdouble {
    return jdouble(this._value + expr._value);
  }

  public sub(expr: Jdouble): Jdouble {
    return jdouble(this._value - expr._value);
  }

  public mul(expr: Jdouble): Jdouble {
    return jdouble(this._value * expr._value);
  }

  public div(expr: Jdouble): Jdouble {
    return jdouble(this._value / expr._value);
  }

  public mod(expr: Jdouble): Jdouble {
    return jdouble(this._value % expr._value);
  }

  public toString(): string {
    return this._value.toString();
  }
}

/**
 * Factory for constructing a Jdouble without use the new keyword. It calls {@link Jdouble#create} method.
 * @param {number | string} value to be wrapped in the new Jdouble.
 * @returns {Jdouble} the Jdouble created.
 */
export function jdouble(value: number | string = 0): Jdouble {
  return Jdouble.create(value);
}
