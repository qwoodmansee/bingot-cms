import { Entity } from './Entity';

class TestEntityProps {
  constructor(public name: string, public age: number) {}
}

class TestEntity extends Entity<TestEntityProps> {}

describe('Entity', () => {
  describe('equals', () => {
    it('should return true if two entities have the same ID', () => {
      const entity1 = new TestEntity(
        new TestEntityProps('Entity 1', 30),
        'id-1'
      );
      const entity2 = new TestEntity(
        new TestEntityProps('Entity 2', 35),
        'id-1'
      );

      expect(entity1.equals(entity2)).equals(true);
    });

    it('should return false if two entities have different IDs', () => {
      const entity1 = new TestEntity(
        new TestEntityProps('Entity 1', 30),
        'id-1'
      );
      const entity2 = new TestEntity(
        new TestEntityProps('Entity 2', 35),
        'id-2'
      );

      expect(entity1.equals(entity2)).equals(false);
    });

    it('should return true if compared to itself', () => {
      const entity = new TestEntity(new TestEntityProps('Test Entity', 25));

      expect(entity.equals(entity)).equals(true);
    });

    it('should return false if two entities have the same properties but different IDs', () => {
      const entity1 = new TestEntity(
        new TestEntityProps('Entity 1', 30),
        'id-1'
      );
      const entity2 = new TestEntity(
        new TestEntityProps('Entity 1', 30),
        'id-2'
      );

      expect(entity1.equals(entity2)).equals(false);
    });

    it('should return false if two entities have different properties and different IDs', () => {
      const entity1 = new TestEntity(
        new TestEntityProps('Entity 1', 30),
        'id-1'
      );
      const entity2 = new TestEntity(
        new TestEntityProps('Entity 2', 35),
        'id-2'
      );

      expect(entity1.equals(entity2)).equals(false);
    });
  });
});
