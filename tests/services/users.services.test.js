const users = require('../../services/users')

describe('users main functions', () => {
    // createUser function test
    test('createUser with {pk_user: 5, name: "Carlos"}', async () => {
        let user = await users.createUser(5, "Carlos");
        expect(user.pk_user).toBe(5);
    });

    // getUser function test
    test('getUser with {pk_user: 123}', async () => {
        let user = await users.getUser(123)
        expect(user.pk_user).toBe(123);
    });

    // updateUser function test
    test('updateUser should modify name and status', async () => {
        let user = await users.updateUser(123, 'Anthony Updated', false);
        expect(user).toMatchObject({
            pk_user: 123,
            name: 'Anthony Updated',
            status: false
        });
    });
    
    // deleteUser function test
    test('deleteUser should set status to false', async () => {
        let result = await users.deleteUser(123);
        expect(result).toMatchObject({ pk_user: 123 });
        let user = await users.getUser(123);
        expect(user.status).toBe(false);
    });
})
