type CallbackFunction = () => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isFunction = (foo: any): foo is CallbackFunction =>
  typeof foo === 'function';

export default isFunction;
