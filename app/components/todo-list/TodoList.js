/**
 * Компонент рисует список задач
 * @constructor
 */
function TodoList(todoStore) {
    this.todoStore = todoStore;
    this.todos = [];
    this.newTodoTitle = '';
    this.$updateList();
}

TodoList.prototype.$updateList = function () {
    this.todos = this.todoStore.getAll();
};

TodoList.prototype.create = function () {
    if(!this.newTodoTitle)
        return;
    this.todoStore.add({
        title: this.newTodoTitle
    });
    this.$updateList();
    this.newTodoTitle = '';
};