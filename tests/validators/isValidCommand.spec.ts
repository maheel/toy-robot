import { isValidCommand } from '../../src/validators/isValidCommand';

describe('isValidCommand', () => {
  it('returns true when command is valid', async () => {
    const actualResult = isValidCommand('MOVE');
    expect(actualResult).toBe(true);
  });

  it('returns false when command is invalid', async () => {
    const actualResult = isValidCommand('RUN');
    expect(actualResult).toBe(false);
  });
});
