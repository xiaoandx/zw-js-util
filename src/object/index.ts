/**
 * 判断对象是否为空（已判空）
 * @param obj
 */
export const objIsNull = (obj: object): boolean => {
  let result: boolean;
  if (obj && Object.keys(obj).length > 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

/**
 * @description     判断对象是否为空，字符串是否为空，数组长度为0
 * @functionName    isEmpty
 * @param {any}     data    进行判断对象
 * @return {boolean} true: 为空，false: 不为空
 * @author WEI.ZHOU
 * @date 2022-04-06 16:13:47
 * @version V1.0.0
 */
export function isEmpty(data: any): boolean {
  if (data === '' || data === undefined || data === null || data === 'null' || data === 'undefined' || data.length === 0) {
    return true;
  }
  return false;
}
