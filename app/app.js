angular.module('app',[])
    // регистрация сервиса в приложении
    .service('todoStore',/* конструктор сервиса */)
    // регистрация компонента в приложении
    .directive('todoList', function(){
        return {
            controller: /* конструктор контроллера компонента */,
            controllerAs: 'vm', // имя переменной в шаблоне, которая будет ссылаться на экземпляр контроллера
            scope: { }, // шаблон необходимо выполнять в изолированном контексте
            templateUrl: 'app/components/todo-list/todo-list.html' // путь до шаблона
        };
    });