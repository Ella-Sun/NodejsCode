var util = require('util');

/*
util.isArray(object)
如果给定的参数 "object" 是一个数组返回true，否则返回false。
*/
console.log('isArray');

console.log(util.isArray([]));
// ture

console.log(util.isArray(new Array));
// true

console.log(util.isArray({}));
// false
console.log();

/*
util.isRegExp(object)
如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
*/
console.log('isRegExp');

console.log(util.isRegExp(/some regexp/));
// true

console.log(util.isRegExp(new RegExp('another regexp')));
// true

console.log(util.isRegExp({}));
// false
console.log();

/*
util.isDate(object)
如果给定的参数 "object" 是一个日期返回true，否则返回false。
*/
console.log('isDate');

console.log(util.isDate(new Date()));
// true

console.log(util.isDate(Date()));
// false (without 'new' returns a String)

console.log(util.isDate({}));
// false
console.log();
/*
util.isError(object)
如果给定的参数 "object" 是一个错误对象返回true，否则返回false
*/
console.log('isError');

console.log(util.isError(new Error()));
// true

console.log(util.isError(new TypeError()));
// true

console.log(util.isError({name: 'error', message: 'an error occurred'}));
// false
console.log();