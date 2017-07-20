import { Jboolean } from '@j2se-js/java.lang';

export interface JEquality<T> {

  /** Emulate the operator == */
  eq(expr: T): Jboolean;

  /** Emulate the operator != */
  ne(expr: T): Jboolean;

}
