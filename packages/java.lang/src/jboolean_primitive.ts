import { JObject } from './jobject';
import { JEquality } from 'packages/java.lang.native.operator/src/jequality';
/**
 * The Jboolean data type has only two possible values: true and false.
 * Use this data type for simple flags that track true/false conditions.
 * This data type represents one bit of information,
 * but its "size" isn't something that's precisely defined.
 * Jboolean that are declared but not initialized will be set to false by default.
 *
 * Note: To retrieve the actual boolean value of a Jboolean you have to use {@code .value} syntax.
 */
export class Jboolean implements JEquality<Jboolean> {
    private _value: boolean;

    constructor(value: boolean = false) {
        this._value = value;
    }

    get value() {
        return this._value;
    }

    set value(value: boolean) {
        this._value = value;
    }

    public eq(expr: Jboolean): Jboolean {
        return new Jboolean(this.value === expr.value);
    }

    public ne(expr: Jboolean): Jboolean {
        return new Jboolean(this.value !== expr.value);
    }

}

/**
 * returns the boolean value of a Jboolean.
 * Usefull in if statement: if(is(a.lt(b)))
 */
export function is(expr: Jboolean) {
    return expr.value;
}
