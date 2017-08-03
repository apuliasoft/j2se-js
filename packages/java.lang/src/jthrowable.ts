import {JSerializable} from '../../java.io/src/jserializable';
import {Jboolean, is} from './jboolean_primitive';
import {JObject} from './jobject';

/**
 * The {@code Throwable} class is the superclass of all errors and
 * exceptions in the Java language. Only objects that are instances of this
 * class (or one of its subclasses) are thrown by the Java Virtual Machine or
 * can be thrown by the Java {@code throw} statement. Similarly, only
 * this class or one of its subclasses can be the argument type in a
 * {@code catch} clause.
 *
 * For the purposes of compile-time checking of exceptions, {@code
 * Throwable} and any subclass of {@code Throwable} that is not also a
 * subclass of either {@link RuntimeException} or {@link Error} are
 * regarded as checked exceptions.
 *
 * <p>Instances of two subclasses, {@link java.lang.Error} and
 * {@link java.lang.Exception}, are conventionally used to indicate
 * that exceptional situations have occurred. Typically, these instances
 * are freshly created in the context of the exceptional situation so
 * as to include relevant information (such as stack trace data).
 *
 * <p>A throwable contains a snapshot of the execution stack of its
 * thread at the time it was created. It can also contain a message
 * string that gives more information about the error. Over time, a
 * throwable can {@linkplain Throwable#addSuppressed suppress} other
 * throwables from being propagated.  Finally, the throwable can also
 * contain a <i>cause</i>: another throwable that caused this
 * throwable to be constructed.  The recording of this causal information
 * is referred to as the <i>chained exception</i> facility, as the
 * cause can, itself, have a cause, and so on, leading to a "chain" of
 * exceptions, each caused by another.
 *
 * <p>One reason that a throwable may have a cause is that the class that
 * throws it is built atop a lower layered abstraction, and an operation on
 * the upper layer fails due to a failure in the lower layer.  It would be bad
 * design to let the throwable thrown by the lower layer propagate outward, as
 * it is generally unrelated to the abstraction provided by the upper layer.
 * Further, doing so would tie the API of the upper layer to the details of
 * its implementation, assuming the lower layer's exception was a checked
 * exception.  Throwing a "wrapped exception" (i.e., an exception containing a
 * cause) allows the upper layer to communicate the details of the failure to
 * its caller without incurring either of these shortcomings.  It preserves
 * the flexibility to change the implementation of the upper layer without
 * changing its API (in particular, the set of exceptions thrown by its
 * methods).
 *
 * <p>A second reason that a throwable may have a cause is that the method
 * that throws it must conform to a general-purpose interface that does not
 * permit the method to throw the cause directly.  For example, suppose
 * a persistent collection conforms to the {@link java.util.Collection
 * Collection} interface, and that its persistence is implemented atop
 * {@code java.io}.  Suppose the internals of the {@code add} method
 * can throw an {@link java.io.IOException IOException}.  The implementation
 * can communicate the details of the {@code IOException} to its caller
 * while conforming to the {@code Collection} interface by wrapping the
 * {@code IOException} in an appropriate unchecked exception.  (The
 * specification for the persistent collection should indicate that it is
 * capable of throwing such exceptions.)
 *
 * <p>A cause can be associated with a throwable in two ways: via a
 * constructor that takes the cause as an argument, or via the
 * {@link #initCause(Throwable)} method.  New throwable classes that
 * wish to allow causes to be associated with them should provide constructors
 * that take a cause and delegate (perhaps indirectly) to one of the
 * {@code Throwable} constructors that takes a cause.
 *
 * Because the {@code initCause} method is public, it allows a cause to be
 * associated with any throwable, even a "legacy throwable" whose
 * implementation predates the addition of the exception chaining mechanism to
 * {@code Throwable}.
 *
 * <p>By convention, class {@code Throwable} and its subclasses have two
 * constructors, one that takes no arguments and one that takes a
 * {@code String} argument that can be used to produce a detail message.
 * Further, those subclasses that might likely have a cause associated with
 * them should have two more constructors, one that takes a
 * {@code Throwable} (the cause), and one that takes a
 * {@code String} (the detail message) and a {@code Throwable} (the
 * cause).
 *
 * @author  unascribed
 * @author  Josh Bloch (Added exception chaining and programmatic access to
 *          stack trace in 1.4.)
 * @jls 11.2 Compile-Time Checking of Exceptions
 * @since JDK1.0
 */
export class JThrowable extends JObject implements JSerializable {
  private _detailMessage: string = null;
  private _cause: JThrowable = this;
  private _stackTrace: any; // TODO must be of type JStackTraceElement[]
  private _suppressedExceptions: any; // TODO must be of type JList<JThrowable>

  /**
   * Constructs a new throwable with {@code null} as its detail message.
   * The cause is not initialized, and may subsequently be initialized by a
   * call to {@link #initCause}.
   *
   * <p>The {@link #fillInStackTrace()} method is called to initialize
   * the stack trace data in the newly created throwable.
   */
  public constructor();

  /**
   * Constructs a new throwable with the specified detail message.  The
   * cause is not initialized, and may subsequently be initialized by
   * a call to {@link #initCause}.
   *
   * <p>The {@link #fillInStackTrace()} method is called to initialize
   * the stack trace data in the newly created throwable.
   *
   * @param   message   the detail message. The detail message is saved for
   *          later retrieval by the {@link #getMessage()} method.
   */
  // TODO message parameter of type JString
  public constructor(message?: string);

  /**
   * Constructs a new throwable with the specified detail message and
   * cause.  <p>Note that the detail message associated with
   * {@code cause} is <i>not</i> automatically incorporated in
   * this throwable's detail message.
   *
   * <p>The {@link #fillInStackTrace()} method is called to initialize
   * the stack trace data in the newly created throwable.
   *
   * @param  message the detail message (which is saved for later retrieval
   *         by the {@link #getMessage()} method).
   * @param  cause the cause (which is saved for later retrieval by the
   *         {@link #getCause()} method).  (A {@code null} value is
   *         permitted, and indicates that the cause is nonexistent or
   *         unknown.)
   * @since  1.4
   */
  // TODO message parameter of type JString
  public constructor(message: string, cause: JThrowable);

  /**
   * Constructs a new throwable with the specified cause and a detail
   * message of {@code (cause==null ? null : cause.toString())} (which
   * typically contains the class and detail message of {@code cause}).
   * This constructor is useful for throwables that are little more than
   * wrappers for other throwables (for example, {@link
    * java.security.PrivilegedActionException}).
   *
   * <p>The {@link #fillInStackTrace()} method is called to initialize
   * the stack trace data in the newly created throwable.
   *
   * @param  cause the cause (which is saved for later retrieval by the
   *         {@link #getCause()} method).  (A {@code null} value is
   *         permitted, and indicates that the cause is nonexistent or
   *         unknown.)
   * @since  1.4
   */
  public constructor(cause?: JThrowable);

  /**
   * Constructs a new throwable with the specified detail message,
   * cause, {@linkplain #addSuppressed suppression} enabled or
   * disabled, and writable stack trace enabled or disabled.  If
   * suppression is disabled, {@link #getSuppressed} for this object
   * will return a zero-length array and calls to {@link
    * #addSuppressed} that would otherwise append an exception to the
   * suppressed list will have no effect.  If the writable stack
   * trace is false, this constructor will not call {@link
    * #fillInStackTrace()}, a {@code null} will be written to the
   * {@code stackTrace} field, and subsequent calls to {@code
   * fillInStackTrace} and {@link
    * #setStackTrace(StackTraceElement[])} will not set the stack
   * trace.  If the writable stack trace is false, {@link
    * #getStackTrace} will return a zero length array.
   *
   * <p>Note that the other constructors of {@code Throwable} treat
   * suppression as being enabled and the stack trace as being
   * writable.  Subclasses of {@code Throwable} should document any
   * conditions under which suppression is disabled and document
   * conditions under which the stack trace is not writable.
   * Disabling of suppression should only occur in exceptional
   * circumstances where special requirements exist, such as a
   * virtual machine reusing exception objects under low-memory
   * situations.  Circumstances where a given exception object is
   * repeatedly caught and rethrown, such as to implement control
   * flow between two sub-systems, is another situation where
   * immutable throwable objects would be appropriate.
   *
   * @param  message the detail message.
   * @param cause the cause.  (A {@code null} value is permitted,
   * and indicates that the cause is nonexistent or unknown.)
   * @param enableSuppression whether or not suppression is enabled or disabled
   * @param writableStackTrace whether or not the stack trace should be
   *                           writable
   *
   * @see OutOfMemoryError
   * @see NullPointerException
   * @see ArithmeticException
   * @since 1.7
   */
  // TODO must be protected! | message parameter of type JString
  public constructor(message: string, cause: JThrowable, enableSuppression: Jboolean, writableStackTrace: Jboolean);

  public constructor(...args: any[]) {
    super();

    switch (args.length) {
      case 4:
        if (is(args[3])) {
          this.fillInStackTrace();
        } else {
          this._stackTrace = null;
        }
        this._detailMessage = args[0];
        this._cause = args[1];
        if (is(args[2].not())) {
          this._suppressedExceptions = null;
        }
        break;

      case 2:
        this.fillInStackTrace();
        this._detailMessage = args[0];
        this._cause = args[1];
        break;

      case 1:
        if (args[0] instanceof JThrowable) {
          this.fillInStackTrace();
          this._detailMessage = (args[0] === null ? null : args[0].toString());
          this._cause = args[0];
        } else {
          this.fillInStackTrace();
          this._detailMessage = args[0];
        }
        break;

      case 0:
        this.fillInStackTrace();
        break;
    }
  }

  /**
   * Returns the cause of this throwable or {@code null} if the
   * cause is nonexistent or unknown.  (The cause is the throwable that
   * caused this throwable to get thrown.)
   *
   * <p>This implementation returns the cause that was supplied via one of
   * the constructors requiring a {@code Throwable}, or that was set after
   * creation with the {@link #initCause(Throwable)} method.  While it is
   * typically unnecessary to override this method, a subclass can override
   * it to return a cause set by some other means.  This is appropriate for
   * a "legacy chained throwable" that predates the addition of chained
   * exceptions to {@code Throwable}.  Note that it is <i>not</i>
   * necessary to override any of the {@code PrintStackTrace} methods,
   * all of which invoke the {@code getCause} method to determine the
   * cause of a throwable.
   *
   * @return  the cause of this throwable or {@code null} if the
   *          cause is nonexistent or unknown.
   * @since 1.4
   */
  public getCause(): JThrowable {
    return (this._cause === this ? null : this._cause);
  }

  /**
   * Returns the detail message string of this throwable.
   *
   * @return  the detail message string of this {@code Throwable} instance
   *          (which may be {@code null}).
   */
  // TODO must return JString
  public getMessage(): string {
    return this._detailMessage;
  }

  // TODO
  private fillInStackTrace(): JThrowable {
    return this;
  }

  /**
   * Returns a short description of this throwable.
   * The result is the concatenation of:
   * <ul>
   * <li> the {@linkplain Class#getName() name} of the class of this object
   * <li> ": " (a colon and a space)
   * <li> the result of invoking this object's {@link #getLocalizedMessage}
   *      method
   * </ul>
   * If {@code getLocalizedMessage} returns {@code null}, then just
   * the class name is returned.
   *
   * @return a string representation of this throwable.
   */
  // TODO must return JString
  public toString(): string {
    const s = 'java.lang.JThrowable'; /* this.getClass().getName(); */ // TODO getClass() | type must be JString
    const message: string = this.getMessage(); // TODO type must be JString | replace with getLocalizedMessage()
    return (message !== undefined) ? (s + ': ' + message) : s;
  }
}
