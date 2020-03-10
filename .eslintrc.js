module.exports = {
    root: true, // 作用的目录是根目录
    extends: ['plugin:vue/recommended', 'airbnb-base'],
    plugins: [
        'html', // 使用eslint-plugin-html
        'vue'
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        "parser": "babel-eslint",
        sourceType: 'module' // 按照模块的方式解析
    },
    env: {
      browser: true, // 开发环境配置表示可以使用浏览器的方法
      node: true, //
      //es6: true
    },
    rules: { // 重新覆盖 extends的规则
      // 自定义的规则
      "linebreak-style": [0 ,"error", "windows"],
      "indent": ['error', 4], // error类型，缩进4个空格
      'space-before-function-paren': 0, // 在函数左括号的前面是否有空格
      'eol-last': 0, // 不检测新文件末尾是否有空行
      'semi': ['error', 'always'], // 必须在语句后面加分号
      "quotes": ["error", "double"],// 字符串没有使用单引号
      "no-console": ["error",{allow:["log","warn"]}],// 允许使用console.log()
      "arrow-parens": 0,
      "no-new":0,//允许使用 new 关键字
      "comma-dangle": ["error", "always-multiline"],
      "no-param-reassign": 0, //可以对函数的参数赋值
      "global-require": 0,
      "import/first": 0,
      "import/no-unresolved": 0,
      "import/no-dynamic-require": 0,
      "import/extensions": 0, // 关闭使用扩展
      "import/order": 0,
      "import/newline-after-import": 0,
      "vue/html-indent": 0,
      "vue/html-closing-bracket-newline": 0,
      "vue/html-self-closing": 0,
      "vue/multiline-html-element-content-newline": 0,
      "arrow-body-style": 0,
      "no-else-return": 0,
      "no-plusplus": 0,
      //"vue/max-attributes-per-line": 0,
    },
}