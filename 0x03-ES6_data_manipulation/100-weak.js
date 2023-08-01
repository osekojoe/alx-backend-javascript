export const weakMap = new WeakMap();

export const queryAPI = (endpoint) => {
  let count = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, count -= -1);

  // eslint-disable-line no-constant-condition
  if ((count) >= 5) {
    throw new Error('Endpoint load is high');
  }

  return count;
};

// export { weakMap, queryAPI };
