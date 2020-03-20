import * as util from '../index';

test('strCheck', () => {
  expect(util.strCheck('18268100546', "phone")).toBe(true);
});