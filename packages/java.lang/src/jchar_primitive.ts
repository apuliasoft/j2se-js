import {JArithmetic, JEquality, JRelational, JUnary} from '@j2se-js/java.lang.native.operator';
import {Jboolean, jboolean} from './jboolean_primitive';
import {Jint, jint} from './jint_primitive';

/**
 * The char data type is a single 16-bit Unicode character.
 * It has a minimum value of '\u0000' (or 0) and a maximum value of '\uffff' (or 65,535 inclusive).
 *
 * Note: To retrieve the actual // todo value wrapped in a Jchar you have to use <code>.value</code> syntax.
 */
export class Jchar implements JEquality<Jchar>, JRelational<Jchar>, JUnary<Object>, JArithmetic<Object> {
  /**
   * Internal factory for constructing a Jchar without use the new keyword.
   * @param {number | string} value to be wrapped in the new Jchar.
   * @returns {Jchar} the Jchar created.
   */
  public static create(value: string | Jint = jint(0)): Jchar {
    return new Jchar(value);
  }

  private static validate(value: string | Jint) {
    if (typeof value === 'string') {
      if (value.length > 1) {
        throw Error('incompatible types: string cannot be converted to char');
      }
    } else {
      if (value.value > 65535 || value.value < 0) {
        throw Error('incompatible types: possible lossy conversion from int to char');
      }
    }
  }

  private _value: string;

  private constructor(value: string | Jint) {
    Jchar.validate(value);

    if (typeof value === 'string') {
      this._value = value;
    } else {
      this._value = String.fromCharCode(value.value);
    }
  }

  /**
   * Retrieve the actual value wrapped by this Jchar.
   * @returns {string} value wrapped by this Jchar.
   */
  public get value(): string {
    return this._value;
  }

  public eq(expr: Jchar): Jboolean {
    return jboolean(this._value === expr._value);
  }

  public ne(expr: Jchar): Jboolean {
    return jboolean(this._value !== expr._value);
  }

  public lt(expr: Jchar): Jboolean {
    return jboolean(this._value < expr._value);
  }

  public gt(expr: Jchar): Jboolean {
    return jboolean(this._value > expr._value);
  }

  public le(expr: Jchar): Jboolean {
    return jboolean(this._value <= expr._value);
  }

  public ge(expr: Jchar): Jboolean {
    return jboolean(this._value >= expr._value);
  }

  public plus(): Jint {
    return jint(+this._value.charCodeAt(0));
  }

  public inc(): Jchar {
    return jchar(jint(this._value.charCodeAt(0) + 1));
  }

  public dec(): Jchar {
    return jchar(jint(this._value.charCodeAt(0) - 1));
  }

  public minus(): Jint {
    return jint(-this._value.charCodeAt(0));
  }

  public add(expr: Jchar | Jint): Jint {
    return jint(this._value.charCodeAt(0) + (expr instanceof Jint ? expr.value : expr._value.charCodeAt(0)));
  }

  public sub(expr: Jchar | Jint): Jint {
    return jint(this._value.charCodeAt(0) - (expr instanceof Jint ? expr.value : expr._value.charCodeAt(0)));
  }

  public mul(expr: Jchar | Jint): Jint {
    return jint(this._value.charCodeAt(0) * (expr instanceof Jint ? expr.value : expr._value.charCodeAt(0)));
  }

  public div(expr: Jchar | Jint): Jint {
    return jint(this._value.charCodeAt(0) / (expr instanceof Jint ? expr.value : expr._value.charCodeAt(0)));
  }

  public mod(expr: Jchar | Jint): Jint {
    return jint(this._value.charCodeAt(0) % (expr instanceof Jint ? expr.value : expr._value.charCodeAt(0)));
  }

  public toString(): string {
    return this._value.toString();
  }
}

/**
 * Factory for constructing a Jchar without use the new keyword. It calls {@link Jchar#create} method.
 * @param {number | string} value to be wrapped in the new Jchar.
 * @returns {Jchar} the Jchar created.
 */
export function jchar(value: string | Jint = jint(0)): Jchar {
  return Jchar.create(value);
}

