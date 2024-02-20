// add.test.ts
import { add } from './TestTypeScript';

describe('Test Typescript 컴포넌트 동작 확인', () => {
    test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
});

