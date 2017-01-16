function addFormController(){
    var ctrl = this;

    ctrl.item = {};

    ctrl.addItem = function(){
        ctrl.item.status = 'open';
        ctrl.onAdd({todoListItem: ctrl.item});
        ctrl.item = {};
    }
}

angular.module('tdlApp').component('addForm', {
    templateUrl: './components/add-form/add-form.html',
    controller: addFormController,
    bindings: {
        onAdd: '&'
    }
});