const { testFunction } = require('./JestSet');

describe('테스트케이스 동작 확인', () => {
    test('덧셈 함수 동작 확인', () => {
        const num = testFunction(2, 6);
        expect(num).toBe(8);
    });
});