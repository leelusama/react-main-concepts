const api = require('./src/mocks/ChatAPI');

const handleStatus = function (user) {
  console.log('status changed:', user);
};

api.subscribeToFriendStatus(2, handleStatus);

setTimeout(() => {
  api.unsubscribeFromFriendStatus(2);
}, 20 * 1000);

// const foo = () => console.log('foo');
// const bar = () => console.log('bar');

// const funcs = [];
// funcs.push(foo);
// funcs.push(bar);

// console.log('foo === funcs[0] ? ', foo === funcs[0]);
// console.log('foo == funcs[0] ? ', foo == funcs[0]);
// console.log('foo === funcs[1] ? ', foo === funcs[1]);
// console.log('bar === funcs[1] ? ', bar === funcs[1]);
