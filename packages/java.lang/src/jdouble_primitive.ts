import {JEquality} from '../../java.lang.native.operator/src/jequality';
import {Jboolean, jboolean} from '../../java.lang/src/jboolean_primitive';
import {JRelational} from '../../java.lang.native.operator/src/jrelational';

/**
 * The double data type is a double-precision 64-bit IEEE 754 floating point.
 * Its range of values is beyond the scope of this discussion, but is specified
 * in the Floating-Point Types, Formats, and Values section of the Java Language
 * Specification. For decimal values, this data type is generally the default
 * choice. As mentioned above, this data type should never be used for precise
 * values, such as currency.
 *
 * Note: To retrieve the actual numeric _value of a Jdouble you have to use {@code ._value} syntax.
 */
export class Jdouble implements JEquality<Jdouble>, JRelational<Jdouble> {
  private _value: number;

  constructor(value: number = 0) {
    this.value = value;
  }

  get value() {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
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
}
