import {JEquality} from '@j2se-js/java.lang.native.operator';

const booleanRegex = /^true$|^false$/i;

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
  private _value: boolean;

  public constructor(value: string) {
    if (!value.match(booleanRegex)) {
      throw Error('incompatible types: string cannot be converted to boolean');
    }

    this._value = value.toLowerCase() === 'true';
  }

  /**
   * Retrieve the boolean value wrapped by this Jboolean.
   * @returns {boolean} boolean value wrapped by this Jboolean.
   */
  public get value(): boolean {
    return this._value;
  }

  public toString(): string {
    return this._value.toString();
  }

  // JEquality
  public eq(expr: Jboolean): Jboolean {
    return jboolean((this._value === expr._value).toString());
  }

  public ne(expr: Jboolean): Jboolean {
    return jboolean((this._value !== expr._value).toString());
  }

  /** Emulate the operator && */
  public and(expr: Jboolean): Jboolean {
    return jboolean((this._value && expr.value).toString());
  }

  /** Emulate the operator || */
  public or(expr: Jboolean): Jboolean {
    return jboolean((this._value || expr.value).toString());
  }

  /** Emulate the operator ! */
  public not(): Jboolean {
    return jboolean((!this._value).toString());
  }
}

/**
 * Factory for constructing a Jboolean without use the new keyword.
 * @param {boolean | string} value to be wrapped in the jboolean.
 * @returns {Jboolean} the Jboolean created.
 */
export function jboolean(value: string = 'false'): Jboolean {
  return new Jboolean(value);
}

/**
 * Returns the boolean value of a Jboolean.
 * Useful in if statement: <code>if(is(a.lt(b)))<code>.
 */
export function is(expr: Jboolean): boolean {
  return expr.value;
}
