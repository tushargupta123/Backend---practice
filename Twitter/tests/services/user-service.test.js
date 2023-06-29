import UserService from "../../src/services/user-service";
import { UserRepository } from "../../src/repository";

jest.mock('../../src/repository/user-repository.js');

describe('user service signup test',() => {
    test('should successfully create a user',async() => {
        const data = {
            email: "a@b.com",
            password: "1234"
        };
        (UserRepository.prototype.create).mockReturnValue({...data,createdAt: '2023-06-27',updatedAt: '2023-06-27'});
        const service = new UserService();
        const response = await service.signup();
        expect(response.email).toBe(data.email);
    })
})