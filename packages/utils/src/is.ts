import { JObject } from '../../java.lang/src/jobject';
import { Jboolean } from '../../java.lang/src/jboolean_primitive';

export function is(expr: JObject | Jboolean): Is {
    return new Is(expr);
}

/**
 * Comparison framework that allows to overcome the differences between Java and JavaScript.
 */
class Is {
    constructor(private expr1: JObject | Jboolean) { }

    /** PUBLIC METHODS */

    public eq(expr2: JObject | Jboolean): boolean {
        if (this.isJboolean(this.expr1) && this.isJboolean(expr2)) {
            return this.eqJboolean(this.expr1, expr2);
        } else {
            return this.expr1 == expr2;
        }
    }

    public ne(expr2: JObject | Jboolean): boolean {
        if (this.isJboolean(this.expr1) && this.isJboolean(expr2)) {
            return this.neJboolean(this.expr1, expr2);
        } else {
            return this.expr1 != expr2;
        }
    }

    /** PRIVATE METHODS */

    private isJboolean(expr: JObject | Jboolean): expr is Jboolean {
        return expr instanceof Jboolean;
    }

    private eqJboolean(expr1: Jboolean, expr2: Jboolean): boolean {
        return expr1.value == expr2.value;
    }

    private neJboolean(expr1: Jboolean, expr2: Jboolean): boolean {
        return expr1.value != expr2.value;
    }

}
