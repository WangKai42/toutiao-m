/* 
本地存储封装模块
 */

export const getItem = name => {
    const data = localStorage.getItem(name)
    try {
        // 尝试把 data 转为对象
        return JSON.parse(data)
    } catch (err) {
        return data
    }
}
export const setItem = (name, value) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value)
    }
    localStorage.setItem(name, value)
}
export const removeItem = name => {
    localStorage.removeItem(name)
}