### prefer-arrow-callback: 
错误:
str.replace(/(\s|^)[a-z]/g, function(char) {
    return char.toUpperCase();
});
正确:
str.replace(/(\s|^)[a-z]/g, char => {
    return char.toUpperCase();
});

### arrow-body-style:
错误:
str.replace(/(\s|^)[a-z]/g, function(char) {
    return char.toUpperCase();
});
正确:
str.replace(/(\s|^)[a-z]/g, char => {
    char.toUpperCase();
});

### semi: // 必须在语句后面加分号

### comma-dangle: always-multiline
错误:
var foo = {
    bar: "baz",
    qux: "quux"
};

var foo = { bar: "baz", qux: "quux", };

var arr = [1,2,];

var arr = [1,
    2,];

var arr = [
    1,
    2
];

foo({
  bar: "baz",
  qux: "quux"
});
正确:
var foo = {
    bar: "baz",
    qux: "quux",
};

var foo = {bar: "baz", qux: "quux"};
var arr = [1,2];

var arr = [1,
    2];

var arr = [
    1,
    2,
];

foo({
  bar: "baz",
  qux: "quux",
});

### guard-for-in
错误:
for (key in foo) {
    doSomething(key);
}
正确:
for (key in foo) {
    if (Object.prototype.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
    if ({}.hasOwnProperty.call(foo, key)) {
        doSomething(key);
    }
}

### spaced-comment 
错误:
//console.log(store);
正确:
// console.log(store);
### no-underscore-dangle 悬挂下划线在标识符的开头或末尾是下划线
错误:
_translateStore
正确:
innerTranslateStore
### object-shorthand
错误:
export default new Router({
    routes: routes,
});
正确:
export default new Router({
    routes,
});
### 
错误:

正确:

