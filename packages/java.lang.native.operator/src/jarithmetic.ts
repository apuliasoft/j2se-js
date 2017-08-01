export interface JArithmetic<P, R> {

  /** Emulate the operator + */
  add(expr: P): R;

  /** Emulate the operator - */
  sub(expr: P): R;

  /** Emulate the operator * */
  mul(expr: P): R;

  /** Emulate the operator / */
  div(expr: P): R;

  /** Emulate the operator % */
  mod(expr: P): R;
}
