/**
 * 广度优先遍历
 * @param tree 树结构
 * @param func 函数
 */

export const treeForeach = (tree: any[], func: any): void => {
  let node;
  const list = [...tree];
  // tslint:disable-next-line:no-conditional-assignment
  while ((node = list.shift())) {
    func(node);
    // tslint:disable-next-line:no-unused-expression
    node.children && list.push(...node.children);
  }
};

/**
 * 深度优先遍历(先序遍历)
 * @param tree 树结构
 * @param func 函数
 */
export const treeForeachDepthDesc = (tree: any[], func: any): void => {
  tree.forEach(data => {
    func(data);
    // tslint:disable-next-line:no-unused-expression
    data.children && treeForeachDepthDesc(data.children, func); // 遍历子树
  });
};

/**
 * 深度优先遍历(后序遍历)
 * @param tree 树结构
 * @param func 函数
 */
export const treeForeachDepthAsc = (tree: any[], func: any): void => {
  tree.forEach(data => {
    // tslint:disable-next-line:no-unused-expression
    data.children && treeForeachDepthAsc(data.children, func); // 遍历子树
    func(data);
  });
};

/**
 * 列表结构转树结构
 * @param list 数组对象
 * @param id   id名
 * @param pid  pic名
 */
export const listToTree = (list: any[], id: string = 'id', pid: string = 'pid'): any[] => {
  const info = list.reduce((map, node) => ((map[node[id]] = node), (node.children = []), map), {});
  return list.filter(node => {
    // tslint:disable-next-line:no-unused-expression
    info[node[pid]] && info[node[pid]].children.push(node);
    return !node[pid];
  });
};

/**
 * 向上筛选树结构, 返回包含的树
 * @param tree
 * @param func
 */
export const treeFilter = (tree: any[], func: any): any[] => {
  // 使用map复制一下节点，避免修改到原树
  return tree
    .map(node => ({ ...node }))
    .filter(node => {
      node.children = node.children && treeFilter(node.children, func);
      return func(node) || (node.children && node.children.length);
    });
};

/**
 * 向上查找树节路径, 返回节点id的数组
 * @param tree
 * @param func
 * @param path 路径有默认值
 */
export const treeFindPath = (tree: any[], func: any, path: any[] = []): any[] => {
  if (!tree) return [];
  for (const data of tree) {
    path.push(data.id);
    if (func(data)) return path;
    if (data.children) {
      const findChildren = treeFindPath(data.children, func, path);
      if (findChildren.length) return findChildren;
    }
    path.pop();
  }
  return [];
};
