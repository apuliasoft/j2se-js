import { Jboolean } from './jboolean_primitive';

export interface JEquality<T> {
    
    /** Emulate the operator == */
    eq(expr: T): Jboolean;
    
    /** Emulate the operator != */
    ne(expr: T): Jboolean;
}