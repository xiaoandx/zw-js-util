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


 [简体中文](/) |  [English ](/README-EN.md)



## 一.介绍 
> 用Typescript写的在前端开发中常用工具方式，包括数组处理，对象，时间，格式转换，浏览器，cookie等方向
>
> 每次写项目都要写一些重复的工具类，因此把一些常用的工具类封装起来。



## 二.如何使用

```
yarn add zw-js-util

// 或使用yarn

npm install zw-js-util --dev

// 在代码引用方式
import * as utilz from 'zw-js-util';
```



## 三.API

> 工具文档还未编写中，现通过列表汇总暂时工具包的函数API

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



## 四. commit要求

### 4.1规范确定

> 先前自己通过浏览开发文档都明确了自己的commit message 开发规> 范，我鉴于参考文档，得到下面的规则准则。

### 4.2commit 格式

```html
<type> (<scope>) : <subject>
```

> **注意：** `>`与`(`   ，`)` 与 `:` ，`:` 与 `<` 必须用一个空格分隔

- **type**	     必选    ->   (用于说明git commit的类别，只允许使用下面的标识)
  - `feat`：新功能（feature）
  - `fix/to`：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG
    - `fix`：产生diff并自动修复此问题。适合于一次提交直接修复问题
    - `to`：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix
  - `docs`：文档（documentation）
  - `style`：格式（不影响代码运行的变动）
  - `refactor`：重构（即不是新增功能，也不是修改bug的代码变动）
  - `perf`：优化相关，比如提升性能、体验
  - `test`：增加测试
  - `chore`：构建过程或辅助工具的变动
  - `revert`：回滚到上一个版本
  - `merge`：代码合并
  - `sync`：同步主线或分支的Bug。
- **scope**        可选    ->   （用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同）
- **subject**      必选
  - 说明:
    - 1. subject是commit目的的简短描述，不超过50个字符 (ZH/CN)
    - 2. 建议使用中文（感觉中国人用中文描述问题能更清楚一些）

### 4.3格式用例

```
fix (docs) : Modify annotation requirements and variable type requirements

- 修改注释要求和变量类型要求
- ......
```


## 五. 代码贡献及PR注意事项

### 5.1项目结构
```
src（源码文件将）
    --array（工具模块类别，数组）
          --index.ts （具体工具函数）
    --_tests_（单元测试文件夹）
          --array.test.js（数组类别工具函数单元测试）
    --index.ts（工具函数统一导出）
    ...
```
### 5.2添加工具函数
1.新增对应的类型的工具函数必须到指定类别模块进行函数编写，如现在需要添加一个判断数组`是否为空`的工具函数,就需要要再src -> `array`文件夹中的`index.ts`中添加对应的`arrIsNull`的函数；编写对应的工具函数自己使用 `exprot`导出即可。

2.还需要在src -> index.ts文件中，把刚刚写在`array`模块中`arrIsNull`的函数统一导出到`index.ts`中

3.配置导出后**必须编写**对应的单元测试类，就在src -> `_tests_` 文件夹中对应模块中添加对应的单元测试

4.运行单元测试,执行命令如下，如果单元测试有问题，会在控制台中显示出来
```cmd
npm test
```
**注意：** 对应函数接口可以添加不同的单元测试

5.只有单元测试通过后才可以提交代码，进行代码PR

