import {is, Jboolean, jboolean} from './jboolean_primitive';
import {jchar, Jchar} from './jchar_primitive';
import {jdouble, Jdouble} from './jdouble_primitive';
import {Jint, jint} from './jint_primitive';
import {JObject} from './jobject';


/**
 * An array is a container object that holds a fixed number of values of a single type.
 * The length of an array is established when the array is created. After creation, its length is fixed.
 * Each item in an array is called an element, and each element is accessed by its numerical index.
 * Arrays are objects, are dynamically created, and may be assigned to variables of type JObject.
 * All methods of class JObject may be invoked on an array.
 */
export class Jarray<T> extends JObject {
  protected _array: Array<T>;
  /**
   * The size of the array.
   */
  public length: Jint;

  /**
   * Initialize an empty array of the specified size.
   * @param {Jint} size the size of the array.
   */
  public constructor(size: Jint);
  /**
   * Initialize an array with the specified values, inferring its size.
   * @param {T[]} values the values with which initialize the array.
   */
  public constructor(values: T[]);

  public constructor(arg: Jint | T[]) {
    super();

    if (Array.isArray(arg)) {
      this._array = arg;
      this.length = jint(arg.length.toString());
    } else {
      this._array = Array.apply(null, Array(arg.value)).map((): null => null);
      this.length = arg;
    }
  }

  /**
   * Sets the specified value in the specified index of the array. The index bust be greater or equal to zero and less than the array size.
   * If index exceedes these bounds a JArrayOutOfBoundsException is thrown.
   * @param {Jint} index the position index of the array in which insert the new element.
   * @param {T} value the value to insert.
   */
  public set(index: Jint, value: T) {
    if (is(index.ge(this.length)) || is(index.lt(jint('0')))) {
      throw Error(`JArrayOutOfBoundsException: ${index.valueOf()}`); // TODO JArrayOutOfBoundsException
    }

    this._array[index.value] = value;
  }

  /**
   * Returns the element of the array in the specified index. The index bust be greater or equal to zero and less than the array size.
   * If index exceedes these bounds a JArrayOutOfBoundsException is thrown.
   * @param {Jint} index the position index of the array from which retrieve the element.
   * @returns {T} the array element retrieved in the specified position index.
   */
  public get(index: Jint): T {
    if (is(index.ge(this.length)) || is(index.lt(jint('0')))) {
      throw Error(`JArrayOutOfBoundsException: ${index.valueOf()}`); // TODO JArrayOutOfBoundsException
    }

    return this._array[index.value];
  }

  // TODO mock, remove when getClass() in JObject is implemented
  public toString(): string {
    return `[I@${this.hashCode()}`;
  }
}

export class Jintarray extends Jarray<Jint> {
  public constructor(size: Jint) {
    super(size);
    this._array = this._array.map(() => jint());
  }
}

export class Jdoublearray extends Jarray<Jdouble> {
  public constructor(size: Jint) {
    super(size);
    this._array = this._array.map(() => jdouble());
  }
}

export class Jchararray extends Jarray<Jchar> {
  public constructor(size: Jint) {
    super(size);
    this._array = this._array.map(() => jchar());
  }
}

export class Jbooleanarray extends Jarray<Jboolean> {
  public constructor(size: Jint) {
    super(size);
    this._array = this._array.map(() => jboolean());
  }
}
