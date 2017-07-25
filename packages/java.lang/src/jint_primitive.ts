import {JEquality} from '@j2se-js/java.lang.native.operator';
import {JRelational} from '@j2se-js/java.lang.native.operator';
import {Jboolean} from './jboolean_primitive';
import {JUnary} from '@j2se-js/java.lang.native.operator/src/junary';
import {JArithmetic} from '@j2se-js/java.lang.native.operator/src/jarithmetic';

/**
 * By default, the Jint data type is a 32-bit signed two's complement integer,
 * which has a minimum value of -2^31 and a maximum value of 2^31-1.
 * In Java SE 8 and later, you can use the jint data type to represent an unsigned
 * 32-bit integer, which has a minimum value of 0 and a maximum value of 2^32-1.
 * Use the Integer class to use jint data type as an unsigned integer.
 * See the section The Number Classes for more information.
 * Static methods like compareUnsigned, divideUnsigned etc have been added to
 * the Integer class to support the arithmetic operations for unsigned integers.
 *
 * Note: To retrieve the actual numeric value of a Jint you have to use {@code .value} syntax.
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

  private static parse(value: string): number {
    if (value.match('0b.*')) {
      return parseInt(value.slice(2, value.length), 2);
    } else if (value.match('0x.*')) {
      return parseInt(value.slice(2, value.length), 16);
    } else {
      return parseInt(value, 10);
    }
  }

  private _value: Int32Array;

  private constructor(value: number | string = 0) {
    this._value = new Int32Array(1);

    if (typeof value === 'number') {
      this.value = value;
    } else if (typeof value === 'string') {
      const isNegative = value.charAt(0) === '-';

      if (isNegative) {
        value = value.slice(1, value.length);
        this.value = -Jint.parse(value);
      } else {
        this.value = Jint.parse(value);
      }
    }
  }

  private get value(): number {
    return this._value[0];
  }

  /**
   * Set int value in respect of the Java int costraint.
   * In order to simulate 32 bit signed int, is used a
   * Int32Array with just 1 element.
   */
  private set value(value: number) {
    this._value[0] = value;
  }

  /**
   * Retrieve the numeric value wrapped by this Jint.
   * @returns {number} numeric value wrapped by this Jint.
   */
  public unwrap(): number {
    return this.value;
  }

  public eq(expr: Jint): Jboolean {
    return new Jboolean(this.value === expr.value);
  }

  public ne(expr: Jint): Jboolean {
    return new Jboolean(this.value !== expr.value);
  }

  public lt(expr: Jint): Jboolean {
    return new Jboolean(this.value < expr.value);
  }

  public gt(expr: Jint): Jboolean {
    return new Jboolean(this.value > expr.value);
  }

  public le(expr: Jint): Jboolean {
    return new Jboolean(this.value <= expr.value);
  }

  public ge(expr: Jint): Jboolean {
    return new Jboolean(this.value >= expr.value);
  }

  public instanceof(t: Function): Jboolean {
    throw new Error('Method instanceof not implemented.');
  }

  public plus(): Jint {
    return jint(+(this.value));
  }

  public inc(): Jint {
    return jint(this.value + 1);
  }

  public dec(): Jint {
    return jint(this.value - 1);
  }

  public minus(): Jint {
    return jint(-(this.value));
  }

  add(expr: Jint): Jint {
    return jint(this.value + expr.value);
  }

  sub(expr: Jint): Jint {
    return jint(this.value - expr.value);
  }

  mul(expr: Jint): Jint {
    return jint(this.value * expr.value);
  }

  div(expr: Jint): Jint {
    return jint(this.value / expr.value);
  }

  mod(expr: Jint): Jint {
    return jint(this.value % expr.value);
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
