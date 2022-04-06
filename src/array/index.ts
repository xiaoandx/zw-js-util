/*
 * Copyright (c) 2022 WEI.ZHOU. All rights reserved.
 * The following code is only used for learning and communication, not for illegal and commercial use.
 * If the code is used, no consent is required, but the author has nothing to do with any problems 
 * and consequences.
 *                                                                                
 * In case of code problems, feedback can be made through the following email address.
 *                            <xiaoandx@gmail.com>
 * @description:    数组相关工具
 * @author: WEI.ZHOU
 * @date: 2022-04-01 19:58:01
 * @version: V1.0.0
*/
'use strict';

import { isEmpty } from "../object";

/**
 * @description     判断数组是否为空
 * @functionName    arrIsNull
 * @param {any[]}   arr   进行判断的数组 
 * @return {boolean}  true 数组为空，反之false数组不为空
 * @author WEI.ZHOU
 * @date 2022-04-01 19:58:23
 * @version V1.0.0
 */
export const arrIsNull = (arr: any[]): boolean => {
  let result: boolean;
  if (arr && arr.length > 0) {
    result = false;
  } else {
    result = true;
  }
  return result;
};

/**
 * @description     数组Map实现，返回一个由回调函数的返回值组成的新数组
 * @functionName    map
 * @param {any[]}   array     需要进行遍历执行的数组
 * @param {*}       callback  对数组项执行的函数
 * @return {any[]}  执行得到的新数组
 * @author WEI.ZHOU
 * @date 2022-04-01 20:06:41
 * @version V1.0.0
 */
export const map = (array: any[], callback): any[] => {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    // 将callback的执行结果添加到结果数组中
    arr.push(callback(array[index], index))
  }
  return arr
}

/**
 * @description     reduce实现，左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值；使用场景，数组每一项求和等
 * @functionName    reduce
 * @param {any[]}   array     需要进行遍历执行的数组
 * @param {*}       callback  对数组项执行的函数
 * @param {any}     initValue 执行初始值
 * @return {any}    最后一次回调函数的返回值
 * @author WEI.ZHOU
 * @date 2022-04-01 20:10:20
 * @version V1.0.0
 */
export const reduce = (array: any[], callback, initValue: any): any => {
  let result = initValue
  for (let index = 0; index < array.length; index++) {
    // 调用回调函数将返回的结果赋值给result
    result = callback(result, array[index], index)
  }
  return result
}

/**
 * @description     filter实现，将所有在过滤函数中返回满足条件的（返回true）的数组元素放进一个新数组中并返回
 * @functionName    filter
 * @param {any[]}   array     需要进行遍历执行判断的数组
 * @param {*}       callback  对数组项执行判断的函数
 * @return {any[]}  执行得到的新数组
 * @author WEI.ZHOU
 * @date 2022-04-01 20:14:26
 * @version V1.0.0
 */
export const filter = (array: any[], callback): any => {
  const arr = []
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      arr.push(array[index])
    }
  }
  return arr
}

/**
 * @description     find函数实现，找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined
 * @functionName    find
 * @param {any[]}   array     需要进行查询的数组
 * @param {*}       callback  进行筛选的函数 
 * @return {any}    满足筛选条件的第一个元素的数值，找不到返回`undefined`
 * @author WEI.ZHOU
 * @date 2022-04-01 20:18:27
 * @version V1.0.0
 */
export const find = (array: any[], callback): any => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return array[index]
    }
  }
  return undefined
}

/**
 * @description     findIndex函数实现，找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1。
 * @functionName    findIndex
 * @param {any[]}   array     需要进行查询的数组
 * @param {*}       callback  进行筛选的函数 
 * @return {number}    满足筛选条件的第一个元素的下标索引，找不到返回`-1`
 * @author WEI.ZHOU
 * @date 2022-04-01 20:21:13
 * @version V1.0.0
 */
export const findIndex = (array: any[], callback): number => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      return index
    }
  }
  return -1
}

/**
 * @description     every函数实现，如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false。
 * @functionName    every
 * @param {any[]}   array     需要进行查询的数组
 * @param {*}       callback  进行筛选的函数 
 * @return {boolean}    数值每个元素满足返回`true`，反之有一个或全部不满足返回`false`
 * @author WEI.ZHOU
 * @date 2022-04-01 20:23:06
 * @version V1.0.0
 */
export const every = (array: any[], callback): boolean => {
  for (let index = 0; index < array.length; index++) {
    if (!callback(array[index], index)) { // 只有一个结果为false, 直接返回false
      return false
    }
  }
  return true
}

/**
 * @description     some函数实现，如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false
 * @functionName    some
 * @param {any[]}   array     需要进行查询的数组
 * @param {*}       callback  进行筛选的函数 
 * @return {boolean}    数值至少有一个元素满足返回`true`，反之全部不满足返回`false`
 * @author WEI.ZHOU
 * @date 2022-04-01 20:25:27
 * @version V1.0.0
 */
export const some = (array: any[], callback): boolean => {
  for (let index = 0; index < array.length; index++) {
    if (callback(array[index], index)) {
      // 只有一个结果为true, 直接返回true
      return true
    }
  }
  return false
}

/**
 * @description     indexOf数组去重，利用forEach()和indexOf()
 * @functionName    uniqueByIndexOf
 * @param {any[]}   array     需要去重得数组
 * @return {any[]}  去重后的新数组 
 * @author WEI.ZHOU
 * @date 2022-04-01 20:47:35
 * @version V1.0.0
 */
export const uniqueByIndexOf = (array: any[]): any[] => {
  const arr = []
  array.forEach(item => {
    if (arr.indexOf(item) === -1) {
      arr.push(item)
    }
  })
  return arr
}

/**
 * @description     数组去重，利用forEach() + 对象容器进行数组去重
 * @functionName    uniqueByForEach
 * @param {any[]}   array     需要去重得数组
 * @return {any[]}  去重后的新数组 
 * @author WEI.ZHOU
 * @date 2022-04-01 20:48:15
 * @version V1.0.0
 */
export const uniqueByForEach = (array: any[]): any[] => {
  const arr = []
  const obj = {}
  array.forEach(item => {
    if (!obj.hasOwnProperty(item)) {
      obj[item] = true
      arr.push(item)
    }
  })
  return arr
}

/**
 * @description     数组去重，利用ES6语法: from + Set 或者 ... + Set
 * @functionName    uniqueBySet
 * @param {any[]}   array     需要去重得数组
 * @return {any[]}  去重后的新数组 
 * @author WEI.ZHOU
 * @date 2022-04-01 20:50:52
 * @version V1.0.0
 */
export const uniqueBySet = (array: any[]): any[] => {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}

/**
 * @description     数组切片函数实现
 * @functionName    slice
 * @param {any[]}   array     需要进行切片的数组
 * @param {number}  start     切片开始位置
 * @param {number}  end       切片结束位置
 * @return {any[]}  切片后的新数组
 * @author WEI.ZHOU
 * @date 2022-04-03 14:40:49
 * @version V1.0.0
 */
export const slice = (array: any[], start: number, end: number): any[] => {
  // return array.slice(start, end)
  // 如果当前数组是[], 直接返回[]
  if (array.length === 0) {
    return []
  }

  // 如果start超过最大下标, 直接返回[]
  start = start || 0
  if (start >= array.length) {
    return []
  }

  // 如果end不大于start, 直接返回[]
  end = end || array.length
  if (end > array.length) {
    end = array.length
  }
  if (end <= start) {
    return []
  }

  // 取出下标在[begin, end)区间的元素, 并保存到最终的数组中
  const arr = []
  for (let index = start; index < end; index++) {
    arr.push(array[index])
  }

  return arr
}

/**
 * @description     将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变
 * @functionName    concat
 * @param {any[]}   array     需要合并的第一个数组
 * @param {any}     values    需要合并的第二个数组（value1[, value2[, ...[, valueN]]]）
 * @return {any[]}  合并后的新数组 
 * @author WEI.ZHOU
 * @date 2022-04-03 14:35:34
 * @version V1.0.0
 */
export const concat = (array: any[], ...values) => {
  // return [...array, ...values]
  const arr = [...array]
  values.forEach(item => {
    if (Array.isArray(item)) {
      arr.push(...item)
    } else {
      arr.push(item)
    }
  })
  return arr
}

/**
 * @description     数组嵌套扁平化，取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中,递归 + reduce() + concat()
 * 如: [1, [3, [2, 4]]]  ==>  [1, 3, 2, 4]
 * @functionName    flattenByReduceAndConcat
 * @param {any[]}   array     需要嵌套扁平化的数组
 * @return {any[]}  嵌套扁平化后的新数组
 * @author WEI.ZHOU
 * @date 2022-04-03 14:48:33
 * @version V1.0.0
 */
export const flattenByReduceAndConcat = (array: any[]): any[] => {
  return array.reduce((pre, item) => {
    if (Array.isArray(item) && item.some(cItem => Array.isArray(cItem))) {
      return pre.concat(flattenByReduceAndConcat(item))
    } else {
      return pre.concat(item)
    }
  }, [])
}

/**
 * @description     数组嵌套扁平化，取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中,递归 + Some() + concat()
 * @functionName    flattenBySomeAndConcat
 * @param {any[]}   array     需要嵌套扁平化的数组
 * @return {any[]}  嵌套扁平化后的新数组 
 * @author WEI.ZHOU
 * @date 2022-04-03 14:51:58
 * @version V1.0.0
 */
export const flattenBySomeAndConcat = (array: any[]): any[] => {
  let arr = [].concat(...array)
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

/**
 * @description     将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
 * @functionName    chunk
 * @param {any[]}   array     需要拆分的数组
 * @param {number}  size      拆分成的小数组的长度
 * @return {any[]}  拆分后的二维数组
 * @author WEI.ZHOU
 * @date 2022-04-03 14:55:41
 * @version V1.0.0
 */
export const chunk = (array: any[], size: number): any[] => {
  if (array.length === 0) {
    return []
  }
  size = size || 1

  const bigArr = []
  let smallArr = []

  array.forEach(item => {
    if (smallArr.length === 0) {
      bigArr.push(smallArr)
    }
    smallArr.push(item)
    if (smallArr.length === size) {
      smallArr = []
    }
  })

  return bigArr
}

/**
 * @description       两个数组合并去重
 * @functionName      uniqueBySetAndForEach
 * @param {any[]}     array1     需要去重得数组
 * @param {any[]}     array2     需要去重得数组
 * @return {any[]}    去重后的新数组
 * @author WEI.ZHOU
 * @date 2022-04-03 14:32:13
 * @version V1.0.0
 */
export const uniqueBySetAndForEach = (array1: any[], array2: any[]): any[] => {
  const arr = []
  const obj = {}
  array1.forEach(item => {
    if (!obj.hasOwnProperty(item)) {
      obj[item] = true
      arr.push(item)
    }
  })
  array2.forEach(item => {
    if (!obj.hasOwnProperty(item)) {
      obj[item] = true
      arr.push(item)
    }
  })
  return arr
}

/**
 * @description     数组取差异,得到array1中所有不在array2中的元素组成的数组(不改变原数组)
 * 如: [1,3,5,7].difference([5, 8])  ==> [1, 3, 7]
 * @functionName    difference
 * @param {any[]}   array1    判断的数组
 * @param {any[]}   array2    判断条件去差的数组
 * @return {any[]}  差异数组
 * @author WEI.ZHOU
 * @date 2022-04-03 15:00:12
 * @version V1.0.0
 */
export const difference = (array1: any[], array2: any[]): any[] => {
  if (array1.length === 0) {
    return []
  } else if (array2.length === 0) {
    return array1.slice()
  }
  return array1.filter(item => array2.indexOf(item) === -1)
}

/**
 * @description     删除数组中部分元素,删除数组中与value相同的元素, 返回所有删除元素的数组,原数组发生了改变
 * 如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 原数组变为[1, 5], 返回值为[3,3,7]
 * @functionName    pull
 * @param {any[]}   array     需要删除元素的数组
 * @param {any[]}   values    需要删除的元素(可变)
 * @return {any[]}  删除元素的数组
 * @author WEI.ZHOU
 * @date 2022-04-03 15:04:41
 * @version V1.0.0
 */
export const pull = (array: any[], ...values): any[] => {
  if (array.length === 0 || values.length === 0) {
    return []
  }

  const result = []
  for (let index = 0; index < array.length; index++) {
    const item = array[index]
    if (values.indexOf(item) !== -1) {
      array.splice(index, 1)
      result.push(item)
      index--
    }
  }

  return result
}

/**
 * @description     删除数组中部分元素,删除数组中与values数组中相同的元素, 返回所有删除元素的数组,原数组发生了改变
 * 如: pull([1,3,5,3,7], [2, 7, 3, 7]) ===> 原数组变为[1, 5], 返回值为[3,3,7]
 * @functionName    pullAll
 * @param {any[]}   array     需要删除元素的数组
 * @param {any[]}   values    需要删除的元素(可变)
 * @return {any[]}  删除元素的数组
 * @author WEI.ZHOU
 * @date 2022-04-03 15:07:03
 * @version V1.0.0
 */
export const pullAll = (array: any[], values: any[]): any[] => {
  if (!values || !Array.isArray(values)) {
    return []
  }
  return pull(array, ...values)
}

/**
 * @description     得到数组的部分元素，得到当前数组过滤掉左边count个后剩余元素组成的数组
 * 说明: 不改变当前数组, count默认是1
 * 如: drop([1,3,5,7], 2) ===> [5, 7]
 * @functionName    drop
 * @param {ary[]}   array     需要过滤的数组
 * @param {number}  count     过滤的个数
 * @return {any[]}  过滤后的数组
 * @author WEI.ZHOU
 * @date 2022-04-03 15:11:43
 * @version V1.0.0
 */
export const drop = (array: any[], count: number = 1): any[] => {
  if (array.length === 0 || count >= array.length) {
    return []
  }

  return array.filter((item, index) => index >= count)
}

/**
 * @description     得到数组的部分元素，得到当前数组过滤掉右边count个后剩余元素组成的数组
 * 说明: 不改变当前数组, count默认是1
 * : dropRight([1,3,5,7], 2) ===> [1, 3]
 * @functionName    dropRight
 * @param {ary[]}   array     需要过滤的数组
 * @param {number}  count     过滤的个数
 * @return {any[]}  过滤后的数组
 * @author WEI.ZHOU
 * @date 2022-04-03 15:13:09
 * @version V1.0.0
 */
export const dropRight = (array: any[], count: number = 1): any[] => {
  if (array.length === 0 || count >= array.length) {
    return []
  }

  return array.filter((item, index) => index < array.length - count)
}

/**
 * @description     数组去重
 * @functionName    arrayRemoveRepeat
 * @param {any[]}   data     需要去重的数组
 * @return {any[]}  去重后的数组
 * @author WEI.ZHOU
 * @date 2021-11-11 15:46:07
 * @version V1.0.0
 */
export function arrayRemoveRepeat(data: any[]): any[] {
  const r = [];
  for (let i = 0; i < data.length; i++) {
    let flag = true;
    if (!isEmpty(data[i].id) || !isEmpty(data)) {
      let temp = data[i];
      for (let j = 0; j < r.length; j++) {
        if (temp === r[j]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        r.push(temp);
      }
    }
  }
  return r;
}

/**
 * @description       两数组求交集
 * Test: a: [ 1, 2, 3, 4, 5 ]  b: [ 3, 4, 5, 6, 7 ]
 * a & b : [ 3, 4, 5 ]
 * @functionName      arrayIntersection
 * @param {any[]}     a   数组a
 * @param {any[]}     b   数组b
 * @return {any[]}    交集后的数组(去重)
 * @author WEI.ZHOU
 * @date 2021-11-11 15:46:59
 * @version V1.0.0
 */
export function arrayIntersection(a: any[], b: any[]): any[] {
  const result = [];
  for (let i = 0; i < b.length; i++) {
    let temp = b[i];
    for (let j = 0; j < a.length; j++) {
      if (temp === a[j]) {
        result.push(temp);
        break;
      }
    }
  }
  return arrayRemoveRepeat(result);
}

/**
 * @description       两数组求并集
 * Test: a: [ 1, 2, 3, 4, 5 ]  b: [ 3, 4, 5, 6, 7 ]
 * a + b : [ 1, 2, 3, 4, 5, 6, 7 ]
 * @functionName      arrayUnion
 * @param {Array}     a   数组a
 * @param {Array}     b   数组b
 * @return {Array}    并集后的数组(去重) 
 * @author WEI.ZHOU
 * @date 2021-11-11 15:48:05
 * @version V1.0.0
 */
export function arrayUnion(a: any[], b: any[]): any[] {
  return arrayRemoveRepeat(a.concat(b));
}

/**
 * @description       数组求差集  a - b
 * Test: a: [ 1, 2, 3, 4, 5 ]  b: [ 3, 4, 5, 6, 7 ]
 * a - b: [ 1, 2 ]            b - a: [ 6, 7 ]
 * @functionName     arrayDifference
 * @param {Array}     a   数组a
 * @param {Array}     b   数组b
 * @return {Array}    去差集后的数组(去重) 
 * @author WEI.ZHOU
 * @date 2021-11-11 15:49:29
 * @version V1.0.0
 */
export function arrayDifference(a: any[], b:any[]): any[] {
  let clone = a.slice(0);
  for (let i = 0; i < b.length; i++) {
    let temp = b[i];
    for (let j = 0; j < clone.length; j++) {
      if (temp === clone[j]) {
        clone.splice(j, 1);
      }
    }
  }
  return arrayRemoveRepeat(clone);
}

// ==================================== 引入其他数组操作函数 ====================================

import { objectArrayDeduplication, objectArraySortASC, objectArraySortDESC } from "./object.array";
export {
  objectArrayDeduplication,
  objectArraySortASC,
  objectArraySortDESC
}