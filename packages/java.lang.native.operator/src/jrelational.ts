import { Jboolean } from "../../java.lang/src/jboolean_primitive";

export interface JRelational<T> {
    
    /** Emulate the operator < */
    lt(expr: T): Jboolean;

    /** Emulate the operator > */
    gt(expr: T): Jboolean;

    /** Emulate the operator <= */
    le(expr: T): Jboolean;

    /** Emulate the operator >= */
    ge(expr: T): Jboolean;

    /** Emulate the operator instanceof */
    instanceof(t: Function): Jboolean;
}