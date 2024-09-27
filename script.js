const mskv = function () {
  const ms = {
    type: 'temp',
    unit: 'c',
    value: +prompt('What is the temperature in Celsius?'),
  };
  console.warn('🚀  ms.value =>', ms.value);

  debugger;
  const kv = ms.value + 273;
  return kv;
};
console.warn('🚀  mskv() =>', mskv());
