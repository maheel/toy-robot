import { isValidPosition } from '../../src/validators/isValidPosition';

describe('isValidDirection', () => {
  it('returns true when direction is valid', async () => {
    const actualResult = isValidPosition(0, 0);
    expect(actualResult).toBe(true);
  });

  it('returns false when direction is invalid', async () => {
    const actualResult = isValidPosition(-1, 6);
    expect(actualResult).toBe(false);
  });
});
