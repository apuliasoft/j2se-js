export interface JArithmetic<T> {

  /** Emulate the operator + */
  add(expr: T): T;

  /** Emulate the operator - */
  sub(expr: T): T;

  /** Emulate the operator * */
  mul(expr: T): T;

  /** Emulate the operator / */
  div(expr: T): T;

  /** Emulate the operator % */
  mod(expr: T): T;
}
