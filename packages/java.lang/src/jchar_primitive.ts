import {JArithmetic, JEquality, JRelational, JUnary} from '@j2se-js/java.lang.native.operator';
import {Jboolean, jboolean} from './jboolean_primitive';
import {Jdouble, jdouble} from './jdouble_primitive';
import {Jint, jint} from './jint_primitive'

/**
 * The char data type is a single 16-bit Unicode character.
 * It has a minimum value of '\u0000' (or 0) and a maximum value of '\uffff' (or 65,535 inclusive).
 *
 * Note: To retrieve the actual numeric value wrapped in a Jchar you have to use <code>.value</code> syntax.
 */
export class Jchar implements JEquality<Jchar | Jint | Jdouble>,
                              JRelational<Jchar | Jint | Jdouble>,
                              JUnary<Jchar | Jint>,
                              JArithmetic<Jchar | Jint | Jdouble, Jint | Jdouble> {

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

  public constructor(value: string | Jint) {
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
  public get value(): number {
    return this._value.charCodeAt(0);
  }

  public toString(): string {
    return this._value;
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
    return jint((+this.value).toString());
  }

  public inc(): Jchar {
    return jchar(jint((this.value + 1).toString()));
  }

  public dec(): Jchar {
    return jchar(jint((this.value - 1).toString()));
  }

  public minus(): Jint {
    return jint((-this.value).toString());
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
      return jint((this.value / expr.value).toString());
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
 * Factory for constructing a Jchar without use the new keyword
 * @param {number | string} value to be wrapped in the new Jchar.
 * @returns {Jchar} the Jchar created.
 */
export function jchar(value: string | Jint = jint('0')): Jchar {
  return new Jchar(value);
}
