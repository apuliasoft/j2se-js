import { JObject } from './jobject';
import { JEquality } from '../../java.lang.native.operator/src/jequality';
import { Jboolean } from "../../java.lang/src/jboolean_primitive";
/**
 * By default, the jint data type is a 32-bit signed two's complement integer,
 * which has a minimum value of -231 and a maximum value of 231-1. 
 * In Java SE 8 and later, you can use the jint data type to represent an unsigned 
 * 32-bit integer, which has a minimum value of 0 and a maximum value of 232-1. 
 * Use the Integer class to use jint data type as an unsigned integer. 
 * See the section The Number Classes for more information. 
 * Static methods like compareUnsigned, divideUnsigned etc have been added to 
 * the Integer class to support the arithmetic operations for unsigned integers.
 *
 * Note: To retrieve the actual boolean value of a jint you have to use {@code .value} syntax.
 */
export class Jint implements JEquality<Jint> {
    private _value: number;

    constructor(value: number = 0) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }

    public eq(expr: Jint): Jboolean {
        return new Jboolean(this.value == expr.value);
    }

    public ne(expr: Jint): Jboolean {
        return new Jboolean(this.value != expr.value);
    }

}