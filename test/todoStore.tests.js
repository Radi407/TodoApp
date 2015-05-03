describe('TodoStore', function(){
    var store = new TodoStore();

    var AddTodos = function(count) {
        var allTodos = [];
        var todo = {};
        todo.completed = false;
        for (var i = 0; i < count; i++) {
            todo.title = i.toString();
            store.add(todo);
            allTodos.push(JSON.parse(JSON.stringify(todo)));
        }
        return allTodos;
    }

    var RemoveTodo = function(allTodos,todo) {
        store.remove(todo);
        var length = allTodos.length;
        for (var i = 0; i < length; i++) {
            if (allTodos[i].id == todo.id) {
                allTodos.splice(i, 1);
                return allTodos;
            }
        }
    }

    beforeEach(function(){
        store.clear();
    });


    it('should return empty array', function() {
        expect(store.getAll()).toEqual([]);
    });

    it('should correct add' , function() {
        var allTodos = AddTodos(15);
        expect(store.getAll()).toEqual(allTodos);
    });

    it('should correct remove and add' , function() {
        var allTodos = AddTodos(15);
        var todo = allTodos[7];
        var allTodos = RemoveTodo(allTodos, todo);
        expect(store.getAll()).toEqual(allTodos);
    });

    it("should remove all", function(){
        var allTodos = AddTodos(15);
        for(var i=0;i<15;i++){
            store.remove(allTodos[i]);
        }
        allTodos = [];
        expect(store.getAll()).toEqual(allTodos);
    })


});