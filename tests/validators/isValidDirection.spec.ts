import { isValidDirection } from '../../src/validators/isValidDirection';

describe('isValidDirection', () => {
  it('returns true when direction is valid', async () => {
    const actualResult: boolean = isValidDirection('EAST');
    expect(actualResult).toBe(true);
  });

  it('returns false when direction is invalid', async () => {
    const actualResult: boolean = isValidDirection('LEFT');
    expect(actualResult).toBe(false);
  });
});
