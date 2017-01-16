function todoListController(fbService, $scope){
    var ctrl = this;

    ctrl.list = fbService.getData('todo-list');

    ctrl.add = function(listItem){
        ctrl.list.$add(listItem).then(function(){
            console.info('Record added');
        });
    };

    ctrl.delete = function(listItem){
        ctrl.list.$remove(listItem).then(function(ref){
            console.log('Item removed?', ref);
        }, function(err){
            console.warn('Item not removed. . .', err);
        });
    };
}

angular.module('tdlApp').component('todoList', {
    templateUrl: './components/todo-list/todo-list.html',
    controller: todoListController
});