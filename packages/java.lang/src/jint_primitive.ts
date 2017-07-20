import { JEquality } from '@j2se-js/java.lang.native.operator';
import { JRelational } from '@j2se-js/java.lang.native.operator';
import { Jboolean } from './jboolean_primitive';
import { JObject } from './jobject';

/**
 * By default, the jint data type is a 32-bit signed two's complement integer,
 * which has a minimum value of -2^31 and a maximum value of 2^31-1.
 * In Java SE 8 and later, you can use the jint data type to represent an unsigned
 * 32-bit integer, which has a minimum value of 0 and a maximum value of 2^32-1.
 * Use the Integer class to use jint data type as an unsigned integer.
 * See the section The Number Classes for more information.
 * Static methods like compareUnsigned, divideUnsigned etc have been added to
 * the Integer class to support the arithmetic operations for unsigned integers.
 *
 * Note: To retrieve the actual boolean value of a jint you have to use {@code .value} syntax.
 */
export class Jint implements JEquality<Jint>, JRelational<Jint> {
    private _value: number;

    constructor(value: number = 0) {
        this.value = value;
    }

    get value() {
        return this._value;
    }

    /**
     * Set int value in respect of the Java int costraint.
     * In order to simulate 32 bit signed int, is used the
     * bitwise operation `| 0`.
     */
    set value(value: number) {
        this._value = value | 0;
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

}
