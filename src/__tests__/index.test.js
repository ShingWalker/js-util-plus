import * as util from '../index';

test('strCheck', () => {
  expect(util.strCheck('18268100546', 'phone')).toBe(true);
});

test('arrIsNull', () => {
  expect(util.arrIsNull([])).toBe(false);
});

test('objIsNull', () => {
  expect(util.objIsNull({})).toBe(false);
});
