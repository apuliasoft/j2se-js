import { Jboolean } from '@j2se-js/java.lang';

export interface JRelational<T> {

  /** Emulate the operator < */
  lt(expr: T): Jboolean;

  /** Emulate the operator > */
  gt(expr: T): Jboolean;

  /** Emulate the operator <= */
  le(expr: T): Jboolean;

  /** Emulate the operator >= */
  ge(expr: T): Jboolean;
}
