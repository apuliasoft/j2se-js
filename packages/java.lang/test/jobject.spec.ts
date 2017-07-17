import { JObject } from '../src/jobject';
import { expect } from 'chai';
import { is } from '../src/jboolean_primitive';

class FakeJObject extends JObject {
    clone(): JObject {
        super.clone();
        return new JObject();
    }
}

describe('JObject', () => {
    it(`getClass should return the Class object that represents its runtime class`, () => {
        const obj = new JObject();
        obj.getClass();
    });

    it(`equals should return false if it is called with another JObject as argument`, () => {
        const obj = new JObject();
        const obj2 = new JObject();
        expect(obj.equals(obj2).value).to.be.false;
    });

    it(`equals should return false if it is called with null argument`, () => {
        const obj = new JObject();
        expect(obj.equals(null).value).to.be.false;
    });

    it(`equals should be reflexive`, () => {
        const obj = new JObject();
        expect(obj.equals(obj).value).to.be.true;
    });

    it(`equals should be symmetric`, () => {
        const obj = new JObject();
        const obj2 = new JObject();
        expect(obj.equals(obj2).value).to.be.false;
        expect(obj2.equals(obj).value).to.be.false;
    });

    it(`equals should be transitive`, () => {
        const obj = new JObject();
        const obj2 = new JObject();
        const obj3 = new JObject();
        expect(obj.equals(obj2).value).to.be.false;
        expect(obj2.equals(obj3).value).to.be.false;
        expect(obj.equals(obj3).value).to.be.false;
    });

    it(`equals should be consistent`, () => {
        const obj = new JObject();
        const obj2 = new JObject();

        expect(obj.equals(obj).value).to.be.true;
        expect(obj.equals(obj).value).to.be.true;
        expect(obj.equals(obj2).value).to.be.false;
        expect(obj.equals(obj2).value).to.be.false;
    });

    it(`hashCode should consistently return the same integer
     if it is invoked on the same object more than once during the same execution`, () => {
            const obj = new JObject();
            expect(obj.hashCode()).to.be.equal(obj.hashCode());
        });

    it(`hashCode on two objects should return the same integer
     if the two objects are equal according to the equals method`, () => {
            const obj = new JObject();
            const obj2 = new JObject();

            if (obj.equals(obj2).value) {
                expect(obj.hashCode()).to.be.equal(obj2.hashCode());
            } else {
                expect(obj.hashCode()).to.be.not.equal(obj2.hashCode());
            }
        });

    it(`clone should result in throwing an exception because JObject does not itself implement the interface Cloneable`, () => {
        const obj = new FakeJObject();
        expect(obj.clone).to.throw('CloneNotSupportedException');
    });

    it(`toString should return a string representation of the object`, () => {
        const obj = new JObject();
        const objhash = obj.hashCode();
        expect(obj.toString()).to.be.equal(`java.lang.Object@${objhash.toString(16)}`);
    });

    it('is(obj1.eq(obj1) == true', () => {
        const obj = new JObject();

        expect(is(obj.eq(obj))).to.be.true;
        expect(is(obj.ne(obj))).to.be.false;
    });


    it('is(obj1.eq(obj2) == false', () => {
        const obj1 = new JObject();
        const obj2 = new JObject();

        expect(is(obj1.eq(obj2))).to.be.false;
        expect(is(obj1.ne(obj2))).to.be.true;
    });

});
