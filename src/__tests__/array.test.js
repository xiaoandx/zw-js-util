/*
 * Copyright (c) 2021 WEI.ZHOU. All rights reserved.
 * The following code is only used for learning and communication, not for illegal and commercial use.
 * If the code is used, no consent is required, but the author has nothing to do with any problems 
 * and consequences.
 *                                                                                
 * In case of code problems, feedback can be made through the following email address.
 *                            <xiaoandx@gmail.com>
 * @description:    数组测试类
 * @author: WEI.ZHOU
 * @date: 2022-04-03 15:29:15
 * @version: V1.0.0
 */
'use strict';
import * as util from '../index';

console.log(util);

/**
 * @deprecated: 测试数组是否为空测试
 */
test('arrIsNull', () => {
  expect(util.arrIsNull([])).toBe(true);
});

/**
 * @deprecated: 数组Map函数测试,返回一个由回调函数的返回值组成的新数组
 */
test('map', () => {
  expect(util.map([1, 2, 3], (item, index) => item + index)).toEqual([1, 3, 5]);
})

/**
 * @deprecated: 数组reduce函数测试,从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
 */
test('reduce', () => {
  expect(util.reduce([1, 2, 3], (preTotal, item, index) => {
    return preTotal += item
  }, 0)).toBe(6);
})

/**
 * @deprecated: 数组Filter函数测试,将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回
 */
test('filter', () => {
  expect(util.filter([1, 2, 3], (item, index) => item > 1)).toEqual([2, 3]);
})

/**
 * @deprecated: 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined
 */
test('find', () => {
  expect(util.find([1, 2, 3], (item, index) => item > 1)).toBe(2);
})

/**
 * @deprecated: 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined
 */
test('find', () => {
  expect(util.find([1, 2, 3], (item, index) => item < 1)).toBe(undefined);
})

/**
 * @deprecated: 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1
 */
test('findIndex', () => {
  expect(util.findIndex([1, 2, 3], (item, index) => item > 1)).toBe(1);
})

/**
 * @deprecated: 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1
 */
test('findIndex', () => {
  expect(util.findIndex([1, 2, 3], (item, index) => item < 1)).toBe(-1);
})

/**
 * @deprecated: 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false
 */
test('every', () => {
  expect(util.every([1, 2, 3], (item, index) => item >= 1)).toBe(true);
})

/**
 * @deprecated: 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false
 */
test('some', () => {
  expect(util.some([1, 2, 3], (item, index) => item < 1)).toBe(false);
})

// ===================================数组去重单元测试=====================================

/**
 * @deprecated: 利用forEach()和indexOf() 本质是双重遍历, 效率差些
 */
test('uniqueByIndexOf', () => {
  expect(util.uniqueByIndexOf([1, 2, 3, 1, 3])).toEqual([1, 2, 3]);
})

/**
 * @deprecated: 利用forEach() + 对象容器本质是双重遍历, 只需一重遍历, 效率高些
 */
test('uniqueByForEach', () => {
  expect(util.uniqueByForEach([1, 2, 3, 1, 3])).toEqual([1, 2, 3]);
})

/**
 * @deprecated: 利用ES6语法: from + Set 或者 ... + Set 编码简洁
 */
test('uniqueBySet', () => {
  expect(util.uniqueBySet([1, 2, 3, 1, 3])).toEqual([1, 2, 3]);
})

// ===================================数组合并与切片单元测试=====================================

/**
 * @deprecated: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改
 */
test('slice', () => {
  expect(util.slice([1, 3, 5, 7, 9])).toEqual([1, 3, 5, 7, 9]);
})

/**
 * @deprecated: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改
 */
test('slice', () => {
  expect(util.slice([1, 3, 5, 7, 9], 1, 3)).toEqual([3, 5]);
})

/**
 * @deprecated: 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改
 */
test('slice', () => {
  expect(util.slice([1, 3, 5, 7, 9], 1, 10)).toEqual([3, 5, 7, 9]);
})

/**
 * @deprecated: 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变
 */
test('concat', () => {
  expect(util.concat([1, 2], [3, 4], 6)).toEqual([1, 2, 3, 4, 6]);
})

// ===================================数组扁平化单元测试=====================================

/**
 * @deprecated: 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
 */
test('flattenByReduceAndConcat', () => {
  expect(util.flattenByReduceAndConcat([1, [3, [2, 4]]])).toEqual([1, 3, 2, 4]);
})

/**
 * @deprecated: 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
 */
test('flattenBySomeAndConcat', () => {
  expect(util.flattenBySomeAndConcat([1, [3, [2, 4]]])).toEqual([1, 3, 2, 4]);
})

// ===================================数组分块单元测试=====================================

/**
 * @deprecated: 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
 */
test('chunk', () => {
  expect(util.chunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
})

/**
 * @deprecated: 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
 */
test('chunk', () => {
  expect(util.chunk([1, 2, 3, 4, 5, 6, 7])).toEqual([[1], [2], [3], [4], [5], [6], [7]]);
})

/**
 * @deprecated: 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
 */
test('chunk', () => {
  expect(util.chunk([1, 2, 3, 4, 5, 6, 7], 8)).toEqual([[1, 2, 3, 4, 5, 6, 7]]);
})

// ===================================两个数组合并去重单元测试=====================================

/**
 * @deprecated: 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
 */
test('uniqueBySetAndForEach', () => {
  expect(util.uniqueBySetAndForEach([1, 2, 3, 4], [3, 2, 5])).toEqual([1, 2, 3, 4, 5]);
})

// ===================================数组取差异单元测试=====================================

/**
 * @deprecated: 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)
 */
test('difference', () => {
  expect(util.difference([1, 3, 5, 7], [5, 8])).toEqual([1, 3, 7]);
})

// ===================================删除数组中部分元素单元测试=====================================

/**
 * @deprecated: 删除原数组中与value相同的元素, 返回所有删除元素的数组,
 * pull([1,3,5,3,7], 2, 7, 3, 7) ===> 原数组变为[1, 5], 返回值为[3,3,7]
 */
test('pull', () => {
  expect(util.pull([1, 3, 5, 3, 7], 2, 7, 3, 7)).toEqual([3, 3, 7]);
})

/**
 * @deprecated: 删除原数组中与value相同的元素, 返回所有删除元素的数组,
 *  pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组1变为[1, 5], 返回值为[3,3,7]
 */
test('pullAll', () => {
  expect(util.pullAll([1, 3, 5, 3, 7], [2, 7, 3, 7])).toEqual([3, 3, 7]);
})

// ===================================得到数组的部分元素单元测试=====================================

/**
 * @deprecated:得到当前数组过滤掉左边count个后剩余元素组成的数组
              说明: 不改变当前数组, count默认是1
              如: drop([1,3,5,7], 2) ===> [5, 7]
 */
test('drop', () => {
  expect(util.drop([1, 3, 5, 7], 2)).toEqual([5, 7]);
})
test('drop', () => {
  expect(util.drop([1, 3, 5, 7], 4)).toEqual([]);
})
test('drop', () => {
  expect(util.drop([1, 3, 5, 7])).toEqual([3, 5, 7]);
})

/**
 * @deprecated: 得到当前数组过滤掉右边count个后剩余元素组成的数组
                说明: 不改变当前数组, count默认是1
                如: dropRight([1,3,5,7], 2) ===> [1, 3]
 */
test('dropRight', () => {
  expect(util.dropRight([1, 3, 5, 7], 2)).toEqual([1, 3]);
})
test('dropRight', () => {
  expect(util.dropRight([1, 3, 5, 7], 4)).toEqual([]);
})
test('dropRight', () => {
  expect(util.dropRight([1, 3, 5, 7])).toEqual([1, 3, 5]);
})
