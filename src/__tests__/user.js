import loadUser from "../loadUser";
import { httpGet } from "../http";
jest.mock('../http'); //говорим что этот файл станет моком

// Перед каждым тестом сбрасываем все моки
beforeEach(() => {
    jest.resetAllMocks();
});

// 
test('should call loadUser once', () => {
    httpGet.mockReturnValue(JSON.stringify({})); // должен вернуть в строке объект
    loadUser(1);
    expect(httpGet).toBeCalledWith('http://server:8080/users/1');
});