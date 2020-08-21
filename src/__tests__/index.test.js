import * as util from '../index';

let tree = [
  {
    id: '1',
    title: '节点1',
    children: [
      {
        id: '1-1',
        title: '节点1-1',
        children: [
          {
            id: '1-1-1',
            title: '节点1-1-1',
          },
          {
            id: '1-1-2',
            title: '节点1-1-2',
          },
        ],
      },
      {
        id: '1-2',
        title: '节点1-2',
      },
    ],
  },
  {
    id: '2',
    title: '节点2',
    children: [
      {
        id: '2-1',
        title: '节点2-1',
      },
    ],
  },
];

test('strCheck', () => {
  expect(util.strCheck('18268100546', 'phone')).toBe(true);
});

test('arrIsNull', () => {
  expect(util.arrIsNull([])).toBe(false);
});

test('objIsNull', () => {
  expect(util.objIsNull({})).toBe(false);
});

test('treeForeach', () => {
  expect(util.treeForeach(tree, node => console.log(node)));
});

test('treeForeachDepthAsc', () => {
  expect(util.treeForeachDepthAsc(tree, node => console.log(node)));
});

test('treeForeachDepthDesc', () => {
  expect(util.treeForeachDepthDesc(tree, node => console.log(node)));
});

test('treeFilter', () => {
  expect(util.treeFilter(tree, node => node === '1-1-1'));
});

test('treeFindPath', () => {
  expect(util.treeFindPath(tree, node => node === '1-1-1'));
});
