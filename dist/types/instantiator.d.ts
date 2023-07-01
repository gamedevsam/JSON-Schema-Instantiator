declare var typesInstantiator: {
    string: string;
    number: number;
    integer: number;
    null: null;
    boolean: boolean;
    object: {};
};
type InstanciatorTypes = keyof typeof typesInstantiator;
/**
 * The main function.
 * Calls sub-objects recursively, depth first, using the sub-function 'visit'.
 *
 * @param {Object} schema - The schema to instantiate.
 * @param {Object} [options]
 * @param {Boolean} [options.requiredPropertiesOnly]
 * @param {Object.<string, any>} [options.defaults]
 * @returns {*}
 */
export declare function instantiate<T = any>(schema: object, options?: {
    defaults?: Record<InstanciatorTypes, any>;
    requiredPropertiesOnly?: boolean;
}): T;
export default instantiate;
