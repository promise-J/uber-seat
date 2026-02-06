import bcrypt from 'bcrypt'
describe('AuthService', () => {
    it('should hash password', async () => {
      const hashed = await bcrypt.hash('12345678', 10);
      expect(hashed).not.toBe('12345678');
    });
  });
  