const todos = [
  {
    id: 0,
    created: 1555096121918,
    isDone: false,
    description: 'Create usePromise hook',
  },
  {
    id: 1,
    created: 1555096121918,
    isDone: true,
    description: 'Go sleep',
  },
  {
    id: 2,
    created: 155509612218,
    isDone: false,
    description: 'Create useSelector hook',
  },
];

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default {
  async getList() {
    return todos;
  },
  async get(id) {
    return todos[id];
  },
  async put(id, data) {
    await timeout(1000);
    todos[id] = data;
    return todos[id];
  },
  async post(data) {
    await timeout(1000);
    const nextId = todos.length;
    todos.push({
      id: nextId,
      created: Date.now(),
      isDone: false,
      ...data,
    });
    return todos[nextId];
  },
  async delete() {
    await timeout(1000);
    return todos;
  },
};
