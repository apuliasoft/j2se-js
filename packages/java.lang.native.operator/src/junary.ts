export interface JUnary<T> {

  /** Emulate the operator + */
  plus(): T;

  /** Emulate the operator ++ */
  inc(): T;

  /** Emulate the operator -- */
  dec(): T;

  /** Emulate the operator - */
  minus(): T;
}
