/* tslint:disable:no-unused-expression */
import {expect} from 'chai';
import {JThrowable} from '../src/jthrowable';
import {jboolean} from '../src/jboolean_primitive';

describe('JThrowable', () => {
  it('getCause should return the cause of this JThrowable or null if the cause is nonexistent or unknown', () => {
    const throwable1: JThrowable = new JThrowable();
    const throwable2: JThrowable = new JThrowable(throwable1);

    expect(throwable2.getCause()).to.be.eq(throwable1);
  });

  it('getMessage should return the detail message string of this JThrowable', () => {
    const message = 'custom detail message'; // TODO JString
    const throwable: JThrowable = new JThrowable(message);

    expect(throwable.getMessage()).to.be.eq(message);
  });

  it('toString should return a short description of this JThrowable', () => {
    const message = 'custom detail message'; // TODO JString
    const throwable: JThrowable = new JThrowable(message);
    const description = 'java.lang.JThrowable: custom detail message';
    expect(throwable.toString()).to.be.eq(description);
  });

  it('should construct a new JThrowable with null as its detail message', () => {
    const throwable: JThrowable = new JThrowable();

    expect(throwable.getMessage()).to.be.null;
  });

  it('should construct a new JThrowable with a specified detail message', () => {
    const message = 'custom detail message'; // TODO JString
    const throwable: JThrowable = new JThrowable(message);

    expect(throwable.getMessage()).to.be.eq(message);
  });

  it('should construct a new JThrowable with the specified detail message and cause', () => {
    const message1 = 'from throwable1'; // TODO JString
    const throwable1: JThrowable = new JThrowable(message1);
    const message2 = 'from throwable2'; // TODO JString
    const throwable2: JThrowable = new JThrowable(message2, throwable1);

    expect(throwable2.getCause()).to.be.eq(throwable1);
    expect(throwable2.getMessage()).to.be.eq(message2);
  });

  it('should constructs a new JThrowable with a specified cause (and a derived detail message)', () => {
    const message1 = 'from throwable1'; // TODO JString
    const throwable1: JThrowable = new JThrowable(message1);
    const throwable2: JThrowable = new JThrowable(throwable1);

    expect(throwable2.getCause()).to.be.eq(throwable1);
    expect(throwable2.getMessage()).to.be.eq(throwable1.toString());
  });

  // TODO improve test case: this constructor should be protected and flag behaviour is still not implemented...
  it('should construct a new JThrowable with a specified detail message, cause, suppression enabled or disabled, and writable stack' +
    ' trace enabled or disabled.', () => {
    const message1 = 'from throwable1'; // TODO JString
    const throwable1: JThrowable = new JThrowable(message1);
    const message2 = 'from throwable2'; // TODO JString
    let throwable2: JThrowable = new JThrowable(message2, throwable1, jboolean(), jboolean('true'));

    expect(throwable2.getCause()).to.be.eq(throwable1);
    expect(throwable2.getMessage()).to.be.eq(message2);

    throwable2 = new JThrowable(message2, throwable1, jboolean('true'), jboolean());

    expect(throwable2.getCause()).to.be.eq(throwable1);
    expect(throwable2.getMessage()).to.be.eq(message2);
  });
});
