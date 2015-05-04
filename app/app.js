angular.module('app',[])
    // регистрация сервиса в приложении
    .service('todoStore',TodoStore())
    // регистрация компонента в приложении
    .directive('todoList', function(){
        return {
            controller: TodoList,
            controllerAs: 'vm', // имя переменной в шаблоне, которая будет ссылаться на экземпляр контроллера
            scope: { }, // шаблон необходимо выполнять в изолированном контексте
            templateUrl: 'app/components/todo-list/todo-list.html' // путь до шаблона
        };
    });