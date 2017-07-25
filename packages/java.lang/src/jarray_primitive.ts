import {JObject} from '../src/jobject';
import {is} from '../src/jboolean_primitive';
import {Jint, jint} from '../src/jint_primitive';

/**
 * An array is a container object that holds a fixed number of values of a single type.
 * The length of an array is established when the array is created. After creation, its length is fixed.
 * Each item in an array is called an element, and each element is accessed by its numerical index.
 * Arrays are objects, are dynamically created, and may be assigned to variables of type JObject.
 * All methods of class JObject may be invoked on an array.
 */
export class Jarray<T> extends JObject {
  private _array: T[];
  /**
   * The size of the array.
   */
  public length: Jint;

  /**
   * Initialize an empty array of the specified size.
   * @param {Jint} size the size of the array.
   */
  constructor(size: Jint); // TODO Passare default come parametro per inizializzazione? (Advanced)
  /**
   * Initialize an array with the specified values, inferring its size.
   * @param {T[]} values the values with which initialize the array.
   */
  constructor(values: T[]);
  constructor(arg: Jint | T[]) {
    super();

    if (Array.isArray(arg)) {
      this._array = arg;
      this.length = jint(arg.length);
    } else {
      this._array = new Array<T>(arg.unwrap());
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
    if (is(index.gt(jint(this.length.unwrap() - 1))) || is(index.lt(jint(0)))) {
      // TODO JArrayOutOfBoundsException
      throw Error(`JArrayOutOfBoundsException: ${index.unwrap()}`);
    }

    this._array[index.unwrap()] = value;
  }

  /**
   * Returns the element of the array in the specified index. The index bust be greater or equal to zero and less than the array size.
   * If index exceedes these bounds a JArrayOutOfBoundsException is thrown.
   * @param {Jint} index the position index of the array from which retrieve the element.
   * @returns {T} the array element retrieved in the specified position index.
   */
  public get(index: Jint): T {
    if (is(index.gt(jint(this.length.unwrap() - 1))) || is(index.lt(jint(0)))) {
      // TODO JArrayOutOfBoundsException
      throw Error(`JArrayOutOfBoundsException: ${index.unwrap()}`);
    }

    return this._array[index.unwrap()]; // Se togliamo .unwrap(), come faccio gli accessi?
  }

  // TODO mock, remove when getClass() in JObject is implemented
  public toString(): string {
    return `[I@${this.hashCode()}`;
  }
}
