import { Calendar } from '../src/java/util';
import { expect } from 'chai';
import 'mocha';

describe('DAY_OF_MONTH', () => {
  it('should return current day of month', () => {
     const result = Calendar.DAY_OF_MONTH;
     expect(result).to.equal(5);
  });
});