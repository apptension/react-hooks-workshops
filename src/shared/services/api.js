const todos = [];

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
      ...data,
    });
    return todos[nextId];
  },
  async delete() {
    await timeout(1000);
    return todos;
  },
};
