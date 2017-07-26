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

  // TODO conviene spostarlo in JObject dato che instanceof in Java si applica solo agli oggetti?
  // /** Emulate the operator instanceof */
  // instanceof(t: Function): Jboolean;

}
