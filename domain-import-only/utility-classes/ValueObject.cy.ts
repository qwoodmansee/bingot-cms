import { ValueObject } from './ValueObject';

describe('ValueObject', () => {
  class TestValueObject extends ValueObject<{ a: number; b: string }> {}

  describe('constructor', () => {
    it('should create an instance of the value object with the specified props', () => {
      const vo = new TestValueObject({ a: 1, b: 'test' });
      expect(vo.props.a).equals(1);
      expect(vo.props.b).equals('test');
    });
  });

  describe('equals', () => {
    it('should return true when comparing two instances of the same value object with the same props', () => {
      const vo1 = new TestValueObject({ a: 1, b: 'test' });
      const vo2 = new TestValueObject({ a: 1, b: 'test' });
      expect(vo1.equals(vo2)).equals(true);
    });

    it('should return false when comparing two instances of the same value object with different props', () => {
      const vo1 = new TestValueObject({ a: 1, b: 'test1' });
      const vo2 = new TestValueObject({ a: 1, b: 'test2' });
      expect(vo1.equals(vo2)).equals(false);
    });

    it('should return false when comparing a value object to null', () => {
      const vo = new TestValueObject({ a: 1, b: 'test' });
      expect(vo.equals(null)).equals(false);
    });

    it('should return false when comparing a value object to undefined', () => {
      const vo = new TestValueObject({ a: 1, b: 'test' });
      expect(vo.equals(undefined)).equals(false);
    });
  });
});
