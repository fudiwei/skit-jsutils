export namespace SKIT.JSUtils {
    export interface StorageUtil {}

    export interface StorageUtilConstructor<T extends StorageUtil = StorageUtil> {
        /**
         * 修改或添加键值对。
         * @param {String} key
         * @param {Object} value
         */
        setItem(key: string, value?: any): void;

        /**
         * 获取指定键的值。
         * @param {String} key
         * @param {Object} [defaultVal] （可选）当不存在指定键时，返回默认的值。
         */
        getItem(key: string, defaultVal?: any): any;

        /**
         * 获取指定键的值。
         * @param {String} key
         * @param {Object} [defaultVal] （可选）当不存在指定键时，返回默认的值。
         */
        getItem<V extends any>(key: string, defaultVal?: V): V;

        /**
         * 移除指定键。
         * @param {String} key
         */
        removeItem(key: string): void;

        /**
         * 清空所有键值对。
         */
        clear(): void;

        /**
         * 获取所有键的集合。
         * @return {Array}
         */
        keys(): Array<string>;
    }

    export const $$storage: StorageUtilConstructor;
}
