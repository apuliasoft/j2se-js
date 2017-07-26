import {JEquality} from '@j2se-js/java.lang.native.operator';

/**
 * The Jboolean data type has only two possible values: true and false.
 * Use this data type for simple flags that track true/false conditions.
 * This data type represents one bit of information,
 * but its "size" isn't something that's precisely defined.
 * Jboolean that are declared but not initialized will be set to false by default.
 *
 * Note: To retrieve the actual boolean value wrapped in a Jboolean you have to use <code>.value</code> syntax.
 */
export class Jboolean implements JEquality<Jboolean> {
  /**
   * Internal factory for constructing a Jboolean without use the new keyword.
   * @param {boolean | string} value to be wrapped in the jboolean.
   * @returns {Jboolean} the Jboolean created.
   */
  static create(value: boolean | string = false): Jboolean {
    return new Jboolean(value);
  }

  private _value: boolean;

  private constructor(value: boolean | string = false) {
    if (typeof value === 'boolean') {
      this._value = value;
    } else if (typeof  value === 'string') {
      this._value = value.toLowerCase() === 'true';
    }
  }

  /**
   * Retrieve the boolean value wrapped by this Jboolean.
   * @returns {boolean} boolean value wrapped by this Jboolean.
   */
  public get value(): boolean {
    return this._value;
  }

  public eq(expr: Jboolean): Jboolean {
    return jboolean(this._value === expr._value);
  }

  public ne(expr: Jboolean): Jboolean {
    return jboolean(this._value !== expr._value);
  }

  /** Emulate the operator ! */
  public not(): Jboolean {
    return jboolean(!this._value);
  }

  public toString(): string {
    return this._value.toString();
  }
}

/**
 * Returns the boolean value of a Jboolean.
 * Useful in if statement: <code>if(is(a.lt(b)))<code>.
 */
export function is(expr: Jboolean): boolean {
  return expr.value;
}

/**
 * Factory for constructing a Jboolean without use the new keyword. It calls {@link Jboolean#create} method.
 * @param {boolean | string} value to be wrapped in the jboolean.
 * @returns {Jboolean} the Jboolean created.
 */
export function jboolean(value: boolean | string = false): Jboolean {
  return Jboolean.create(value);
}
