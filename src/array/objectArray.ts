/*
 * Copyright (c) 2022 WEI.ZHOU. All rights reserved.
 * The following code is only used for learning and communication, not for illegal and commercial use.
 * If the code is used, no consent is required, but the author has nothing to do with any problems 
 * and consequences.
 *                                                                                
 * In case of code problems, feedback can be made through the following email address.
 *                            <xiaoandx@gmail.com>
 * @description:    对象数组常用工具函数
 * @author: WEI.ZHOU
 * @date: 2022-04-01 20:27:29
 * @version: V1.0.0
*/
'use strict';

/*
方法1: 利用forEach()和indexOf()
  说明: 本质是双重遍历, 效率差些
*/
/**
 * @description     
 * @functionName jsf
 * @param {} 参数1
 * @param {} 参数2
 * @return {} 
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

/*
方法2: 利用forEach() + 对象容器
  说明: 只需一重遍历, 效率高些
*/
export const uniqueByFooeEach = (array: any[]): any[] => {
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

/*
方法3: 利用ES6语法
    1). from + Set
    2). ... + Set
    说明: 编码简洁
*/
export const uniqueBySet = (array: Array<any>): any[] => {
  // return Array.from(new Set(array))
  return [...new Set(array)]
}