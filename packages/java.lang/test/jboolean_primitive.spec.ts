import {expect} from 'chai';
import 'mocha';
import {Jboolean} from "../src/jboolean_primitive";

describe('Jboolean', () => {
    it('should have only two possible values: true and false.', () => {
        const trueBool = new Jboolean(true);
        const falseBool = new Jboolean(false);

        expect(trueBool.value).to.be.true;
        expect(falseBool.value).to.be.false;
    });

    it('should have false as default value.', () => {
        const bool = new Jboolean();

        expect(bool.value).to.be.false;
    });
});
