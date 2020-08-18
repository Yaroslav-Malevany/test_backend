import { User } from '.';

let user;

beforeEach(async () => {
  user = await User.create({ name: 'test', email: 'test', picture: 'test', role: 'test' });
});

describe('view', () => {
  it('returns simple view', () => {
    const view = user.view();
    expect(typeof view).toBe('object');
    expect(view.id).toBe(user.id);
    expect(view.name).toBe(user.name);
    expect(view.email).toBe(user.email);
    expect(view.picture).toBe(user.picture);
    expect(view.role).toBe(user.role);
    expect(view.createdAt).toBeTruthy();
    expect(view.updatedAt).toBeTruthy();
  });

  it('returns full view', () => {
    const view = user.view(true);
    expect(typeof view).toBe('object');
    expect(view.id).toBe(user.id);
    expect(view.name).toBe(user.name);
    expect(view.email).toBe(user.email);
    expect(view.picture).toBe(user.picture);
    expect(view.role).toBe(user.role);
    expect(view.createdAt).toBeTruthy();
    expect(view.updatedAt).toBeTruthy();
  });
});
