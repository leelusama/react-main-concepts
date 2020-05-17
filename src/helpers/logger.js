export default function logger(mode) {
  return function () {
    if (mode === 'dev') {
      console.log('Logger:', ...arguments);
    }
  };
}
