<p align="center">
<b style="font-size:50px">zw-js-util</b>
</p>
<p align="center">
  <a href="https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://blog.xiaoandx.club">
    <img src="https://img.shields.io/badge/author-WEI.ZHOU-brightgreen.svg" alt="author">
  </a>
  <a href="https://github.com/xiaoandx/exam">
    <img src="https://img.shields.io/badge/versions-1.0.0-brightgreen" alt="donate">
  </a>
</p>


 [简体中文](/README.md) |  [English ](/)



## 1. Introduce
> Written in typescript, it is commonly used in front-end development, including array processing, object, time, format conversion, browser, cookie and other directions
> Every time you write a project, you have to write some duplicate tool classes, so encapsulate some commonly used tool classes.



## 2. How to use

```
yarn add zw-js-util

// yarn

npm install zw-js-util --dev

// In code reference mode
import * as utilz from 'zw-js-util';
```



## 3. API

> The tool document has not been written yet. Now we summarize the function API of the temporary toolkit through the list

| 类别 | API       | 说明         |
| ---- | --------- | ------------ |
| array | arrIsNull | 数组是否为空 |
| array | map | 返回一个由回调函数的返回值组成的新数组 |
| array | reduce | 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值 |
| array | filter | 将所有在过滤函数中返回 `true` 的数组元素放进一个新数组中并返回 |
| array | find | 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 `undefined` |
| array | findIndex | 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 `-1` |
| array | every | 如果数组中的每个元素都满足测试函数，则返回 `true`，否则返回 `false |
| array | some | 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false |
| array | uniqueByIndexOf | 利用forEach()和indexOf()数组去重 |
| array | uniqueByForEach | 利用forEach() + 对象容器数组去重 |
| array | uniqueBySet | 利用ES6语法: from + Set数组去重 |
| array | slice | 数组切片，返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变 |
| array | concat | 数组合并，将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变 |
| array | flattenByReduceAndConcat | 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中，reduce() + concat() |
| 数组 | flattenBySomeAndConcat | 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中，some() + concat() |
| array | chunk | 数组分块，将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组 |
| array | uniqueBySetAndForEach | 两个数组合并去重 |
| array | difference | 数组取差异，得到当前数组中所有不在arr中的元素组成的数组(不改变原数组) |
| array | pull | 删除原数组中与value相同的元素, 返回所有删除元素的数组 |
| array | pullAll | 功能与pull一致, 只是参数变为数组,删除原数组中与value相同的元素, 返回所有删除元素的数组， |
| array | drop | 得到当前数组过滤掉左边count个后剩余元素组成的数组,count默认是1 |
| array | dropRight | 得到当前数组过滤掉右边count个后剩余元素组成的数组,count默认是1 |
| object | objIsNull | objIsNull 对象判空 |
| fanction | call | 执行fn, 使this为obj, 并将后面的n个参数传给fn(功能等同于函数对象的call方法) |
| fanction | apply | 执行fn, 使this为obj, 并将args数组中的元素传给fn(功能等同于函数对象的apply方法) |
| fanction | bind | 给fn绑定this为obj, 并指定参数为后面的n个参数 (功能等同于函数对象的bind方法) |
| string | strCheck | 字符串验证，支持PHONE,TEL,CARD,PWD   ,POSTAL,QQ,EMAIL,MONEY,URL,IP,DATE,NUMBER,ENGLISH,CHINESE,LOWER,UPPER,HTML |
| string | strTransformName | 两个字名字中间加空格 |
| store | storeCookieSet | 设置某个cookie |
| store | storeCookieGet | 获得coookie中某个值 |
| store | storeCookieDelete | 删除单条cookie |
| store | storeCookieRemove | 删除所有cookie |
| store | storeLocalStorageSet | 设置localStorage 已经JSON.stringify |
| store | storeLocalStorageGet | 获取localStorage 已经JSON.parse |
| URL | uriGetParam | 获取uri上的某个参数 |
| 浏览器 | browserGetType | 获取浏览器类型 |
| 浏览器 | browserIsNew | 是否是现代浏览器（IE11及以上） |
| tree | treeFilter | 向上筛选树结构, 返回包含的树 |
| tree | listToTree | 列表结构转树结构 |
| tree | treeFindPath | 向上查找树节路径, 返回节点id的数组 |
| tree | treeForeach | 广度优先遍历树 |
| tree | treeForeachDepthAsc | 深度优先遍历(后序遍历) |
| tree | treeForeachDepthDesc | 深度优先遍历(先序遍历) |
| ... | 待更新中 | ...... |



## 四. Commit requirements

### 4.1 Specification determination

> I have previously defined my commitment message development specifications by browsing the development documents. In view of the reference documents, I get the following rules and guidelines.

### 4.2 Commit format

```html
<type> (<scope>) : <subject>
```

> **BeCareful：** `>`or`(`   ，`)` or `:` ，`:` or `<` Must be separated by a space

- **type**	     Required - > (used to describe the category of GIT commit. Only the following identification is allowed)
  - `feat`：New features
  - `fix/to`：Bug repair can be a bug found by QA or a bug found by R &amp; D
    - `fix`：Generate diff and automatically fix the problem. It is suitable for one-time submission to fix problems directly
    - `to`：Only diff is generated and this problem is not automatically fixed. Suitable for multiple submissions. Fix is used when submitting the final fix
  - `docs`：documentation
  - `style`：Format (changes that do not affect code operation)
  - `refactor`：Refactoring (i.e. not a new function or a code change to modify a bug)
  - `perf`：Optimize related, such as improving performance and experience
  - `test`：Add test
  - `chore`：Changes in the construction process or auxiliary tools
  - `revert`：Rollback to previous version
  - `merge`：Code merge
  - `sync`：Synchronize the bugs of the main line or branch.
- **scope**        Optional - > (used to describe the scope of the impact of commit, such as data layer, control layer, view layer, etc., which varies according to the project)
- **subject**      Mandatory
  - explain:
    - 1. Subject is a short description of the purpose of commit, no more than 50 characters (zh / CN)
    - 2. It is suggested to use Chinese (I feel that Chinese people can describe problems more clearly in Chinese)

### 4.3 Format use case

```
fix (docs) : Modify annotation requirements and variable type requirements

- 修改注释要求和变量类型要求
- ......
```

## 5. Code contribution and PR considerations

### 5.1 Project structure
```
src（源码文件将）
    --array（工具模块类别，数组）
          --index.ts （具体工具函数）
    --_tests_（单元测试文件夹）
          --array.test.js（数组类别工具函数单元测试）
    --index.ts（工具函数统一导出）
    ...
```
### 5.2 Add tool function
1. To add a tool function of the corresponding type, you must write the function in the specified category module. If you need to add a tool function to judge whether the array is empty, you need to add the `index.ts`in the SRC - > array folder Add the corresponding `arrIsNull`function to ts'; Write the corresponding tool functions and export them by using `expor`.
2. In `src` - > index.ts file, uniformly export the functions of `arrIsNull`just written in the `array` module to `index.ts `medium
3. After configuration export, **must write the unit test class corresponding to** in `src` - >`_ tests_`  Add the corresponding unit test to the corresponding module in the folder
4. Run the unit test and execute the following commands. If there is a problem with the unit test, it will be displayed in the console
```cmd
npm test
```
**Note: ** different unit tests can be added to the corresponding function interface

5. Only after the unit test is passed can the code be submitted for code PR.

