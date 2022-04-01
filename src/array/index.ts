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

/* 
实现find()
*/
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

/* 
实现findIndex()
*/
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

/* 
实现some()
*/
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
    if (arr.indexOf(item)===-1) {
      arr.push(item)
    }
  })
  return arr
}

/**
 * @description     利用forEach() + 对象容器进行数组去重
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
 * @description     利用ES6语法: from + Set 或者 ... + Set
 * @functionName    uniqueBySet
 * @param {any[]}   array     需要去重得数组
 * @return {any[]}  去重后的新数组 
 * @author WEI.ZHOU
 * @date 2022-04-01 20:50:52
 * @version V1.0.0
*/
export const uniqueBySet = (array: Array<any>): any[] => {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}