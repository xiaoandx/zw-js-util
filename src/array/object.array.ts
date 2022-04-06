/*
 * Copyright (c) 2022 WEI.ZHOU. All rights reserved.
 * The following code is only used for learning and communication, not for illegal and commercial use.
 * If the code is used, no consent is required, but the author has nothing to do with any problems 
 * and consequences.
 *                                                                                
 * In case of code problems, feedback can be made through the following email address.
 *                            <xiaoandx@gmail.com>
 * @description:    对象数组操作
 * @author: WEI.ZHOU
 * @date: 2022-04-06 16:15:44
 * @version: V1.0.0
 */
'use strict';

import { isEmpty } from "../object";

/**
 * @description     对象数组去重，需要确定去重判断属性，程序根据确定的属性值是否相等，来进行去重操作。默认对象去重判断属性为id
 * @functionName    objectArrayDeduplication
 * @param {any[]}   arr    进行去重的对象数组
 * @param {string}  key    去重判断属性,默认为id
 * @return {any[]}  去重后的对象数组
 * @author WEI.ZHOU
 * @date 2022-04-06 16:18:31
 * @version V1.0.0
 */
export function objectArrayDeduplication(arr: any[], key: string = 'id'): any[] {
  const routersmap = arr.reduce((pre, cur) => {
    pre[cur[key]] = cur;
    return pre;
  }, {});
  const roleUserList = [];
  for (const item in routersmap) {
    if (!isEmpty(routersmap[item][key])) {
      roleUserList.push(routersmap[item]);
    }
  }
  return roleUserList;
}

/**
 * @description       对象数组排序 - 升序
 * @functionName      objectArraySortASC
 * @param {any[]}     object_array     对象数组
 * @param {string}    key              需要进行排序比较的对象属性默认是id
 * @return {any[]}    排序后的新数组
 * @author WEI.ZHOU
 * @date 2021-12-01 09:54:46
 * @version V1.0.0
 */
export function objectArraySortASC(object_array: any[], key: string = 'id'): any[] {
  return object_array.sort((pre, cur) => {
    let x: any, y: any;
    if(typeof pre[key] === 'number'){
      x = pre[key]
      y = cur[key]
    }else{
      x = pre[key].toLowerCase();
      y = cur[key].toLowerCase();
    }
    
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
  });
}

/**
 * @description       对象数组排序 - 降序
 * @functionName      objectArraySortDESC
 * @param {any[]}     object_array     对象数组
 * @param {string}    key              需要进行排序比较的对象属性默认是id
 * @return {any[]}    排序后的新数组
 * @author WEI.ZHOU
 * @date 2021-12-01 10:00:34
 * @version V1.0.0
 */
export function objectArraySortDESC(object_array: any[], key: string = 'id'): any[] {
  return object_array.sort((pre, cur) => {
    let x: any, y: any;
    if(typeof pre[key] === 'number'){
      x = pre[key]
      y = cur[key]
    }else{
      x = pre[key].toLowerCase();
      y = cur[key].toLowerCase();
    }
    if (x < y) { return 1; }
    if (x > y) { return -1; }
    return 0;
  });
}