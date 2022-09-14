// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isFunction = (foo: any): foo is () => void => typeof foo === 'function';

export default isFunction;
