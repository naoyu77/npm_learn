// index.js
const _ = require('lodash');

// 配列の重複を削除
const arr = [1, 2, 2, 3, 3, 3];
console.log(_.uniq(arr));  // [1, 2, 3]

// オブジェクトのディープクローン
const obj = { a: { b: 1 } };
const clone = _.cloneDeep(obj);
console.log(clone);

// 配列をシャッフル
console.log(_.shuffle([1, 2, 3, 4, 5]));
