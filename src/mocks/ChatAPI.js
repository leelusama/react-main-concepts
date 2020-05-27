const users = [
  {
    id: 1,
    name: 'Biba',
    isOnline: false,
  },
  {
    id: 2,
    name: 'Boba',
    isOnline: false,
  },
  {
    id: 3,
    name: 'Bob',
    isOnline: false,
  },
];

const subscribers = [];

function timeLoop() {
  console.log('Запускаем timeLoop и ждем 1 секунду');
  setTimeout(() => {
    console.log('Секунда прошла, вычисляем изменение статуса.');
    subscribers.forEach((sub) => {
      const user = users.find((user) => user.id == sub.id);
      const isChanged = Math.random() > 0.8;
      if (isChanged) {
        const prevStatus = user.isOnline;
        const newStatus = !user.isOnline;
        user.isOnline = newStatus;
        console.log(
          `статус изменился для ${user.name} ${prevStatus} -> ${newStatus}`
        );
        sub.callback(user);
      }
    });
    timeLoop();
  }, 1000);
}

timeLoop();

module.exports = {
  getUsers(id) {
    if (id === undefined) {
      return users;
    }

    return users.find((user) => user.id === id);
  },
  subscribeToFriendStatus(id, callback) {
    subscribers.push({
      id,
      callback,
    });
  },
  unsubscribeFromFriendStatus(id, callback) {
    const index = subscribers.findIndex((sub) => sub.id === id);
    subscribers.splice(index, 1);
  },
};
