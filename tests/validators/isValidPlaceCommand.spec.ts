import { isValidPlaceCommand } from '../../src/validators/isValidPlaceCommand';

describe('isValidPlaceCommand', () => {
  it('returns true when place command is valid', async () => {
    const actualResult: boolean = isValidPlaceCommand('PLACE 0,0,1');
    expect(actualResult).toBe(true);
  });

  it('returns false when place command is invalid', async () => {
    const actualResult: boolean = isValidPlaceCommand('MOVE');
    expect(actualResult).toBe(false);
  });
});
