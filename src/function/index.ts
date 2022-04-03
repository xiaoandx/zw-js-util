/*
 * Copyright (c) 2022 WEI.ZHOU. All rights reserved.
 * The following code is only used for learning and communication, not for illegal and commercial use.
 * If the code is used, no consent is required, but the author has nothing to do with any problems 
 * and consequences.
 *                                                                                
 * In case of code problems, feedback can be made through the following email address.
 *                            <xiaoandx@gmail.com>
 * @description:    函数执行相关方法，call(),apply(),bind()
 * @author: WEI.ZHOU
 * @date: 2022-04-01 19:27:10
 * @version: V1.0.0
 */
'use strict';

type Function = 'function'

/**
 * @description     自定义函数对象的call方法,调用函数, 指定函数中的this为第一个参数的值,如果obj是null/undefined, this为空对象{}。
 * 给obj添加一个临时方法, 方法名任意, 值为当前函数通过obj调用这个临时方法, 并将接收的参数传入删除obj上的这个临时方法属性
 * @functionName    call
 * @param {any}  fn     需要执行挂载的函数
 * @param {any | object}    obj    挂载的对象
 * @param {any}       args   执行函数参数集合
 * @return {any}      result 函数执行结果
 * @author WEI.ZHOU
 * @date 2022-04-01 19:27:56
 * @version V1.0.0
 */
export const call = (fn: any, obj: any | object, ...args: any): any => {
  if(obj === undefined || obj === null)
    obj = {}
  obj.tempFunction = fn
  const result = obj.tempFunction(...args)
  delete obj.tempFunction
  return result
}

/**
 * @description     自定义函数对象的apply方法,调用函数, 指定函数中的this为第一个参数的值,如果obj是null/undefined, this为空对象{}。
 * 给obj添加一个临时方法, 方法名任意, 值为当前函数通过obj调用这个临时方法, 并将接收的参数传入删除obj上的这个临时方法属性
 * @functionName    apply
 * @param {any}  fn     需要执行挂载的函数
 * @param {any | object}    obj    挂载的对象
 * @param {any}       args   执行函数参数集合
 * @return {any}      result 函数执行结果
 * @author WEI.ZHOU
 * @date 2022-04-01 19:49:30
 * @version V1.0.0
 */
export const apply = (fn: any, obj: any | object, args: any): any => {
  if(obj === undefined || obj === null)
    obj = {}
  obj.tempFunction = fn
  const result = obj.tempFunction(...args)
  delete obj.tempFunction
  return result
}

/**
 * @description     自定义函数对象的bind方法,调用函数, 指定函数中的this为第一个参数的值,如果obj是null/undefined, this为空对象{}。
 * 给obj添加一个临时方法, 方法名任意, 值为当前函数通过obj调用这个临时方法, 并将接收的参数传入删除obj上的这个临时方法属性
 * @functionName    bind
 * @param {any}  fn     需要执行挂载的函数
 * @param {any | object}    obj    挂载的对象
 * @param {any}       args   执行函数参数集合
 * @return {any}      result 函数执行结果
 * @author WEI.ZHOU
 * @date 2022-04-01 19:49:30
 * @version V1.0.0
 */
export const bind = (fn: any, obj: any | object, ...args: any): any => {
  return (... argsz) => {
    //  通过call调用原函数, 并指定this为obj, 实参为args与argsz
    return call(fn, obj, ...args, ...argsz);
  } 
}
