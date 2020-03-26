import * as util from '../index';

document.cookie = 'a = 1'

test('strCheck', () => {
  expect(util.strCheck('18268100546', 'phone')).toBe(true);
});

test('cookieGet', () => {
  expect(util.cookieGet("a")).toBe(1);
});
